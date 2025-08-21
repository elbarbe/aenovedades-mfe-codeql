import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from './app.utils';
import { LanguageMng } from './languageMng';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { ConditionalNavigationMng } from './conditionalNavigationMng';
import { Field } from './baseIUElements';
import { Subscription } from 'rxjs';
/**
 * Generic component for services under specific conditions
 *      Service has not inbound argments or only one and object valued that not allows null
 *      Service has not outbound arguments
 *      Service is not offered in the manu
 */
@Component({
    selector: 'genericsiu',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `

    <waitDialog [showWait]="showWait"></waitDialog> 
    <ng-container *ngIf="visible">
        <div style="text-align: center;margin-bottom: 10px;">
            <h2>{{title}}</h2>

            <div>
                <label class="control-label">{{argAlias}}</label>
                <label class="control-label" style="padding-left: 10px;">
                    {{argValue}}
                </label>
            </div>

        </div>
        <div class="col-12 siuButtons">
            <button type="button" class="btnOk btn btn-primary" (click)="saveChanges()">
                {{langMng.translateText('app_SIU_BTNOK', '')}}</button>
            <button type="button" class="btnCancel btn btn-danger" (click)="processCancel()">
                {{langMng.translateText('app_SIU_BTNCANCEL', '')}}
            </button>
        </div>
    </ng-container>

  `
})
export class GenericSiuComponent implements OnInit {

    /** Exchange information */
    private exchangeInfo: ExchangeInfo | null = null;
    /** Target class name */
    private className = '';
    /** Target service interaction unit name */
    private serviceIUName = '';
    /** Target service name */
    private serviceName = '';
    /** Argument class name */
    private argClassName = '';
    /** Argument name */
    private argName = '';
    /** Argument name in request */
    private argNameInRequest = '';
    /** Supplementary information attribute names */
    private argSupInfAttNames = '';
    /** Supplementary attribute data types */
    private argSupInfAttTypes: string[] = [];
    /** Service Interaction unit must not been shown */
    private siuHasNoShow = false;

    /** Title */
    public title = '';
    /** Argument alias */
    public argAlias = '';
    /** Argument value */
    public argValue = '';

    /** Progress bar subscription to manage the cancel */
    protected progressBarSubscription: Subscription | null = null;
    /** Selected Oids */
    private originalOidList: any[] = [];
    private oidList: any[] = [];

    /** Scenario is visible or not */
    public visible = true;

    public showWait = false;

    constructor(
        protected appGlobalInfo: AppGlobalInfo,
        protected util: Util,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng,
        public changeDetectorRef: ChangeDetectorRef) {
    }

    public ngOnInit(): void {
        this.exchangeInfo = this.appGlobalInfo.appExchangeInfo.get();
        this.className = this.exchangeInfo.targetClassName;
        this.serviceIUName = this.exchangeInfo.targetIUName;

        if (this.configureSIU()) {
            this.visible = !this.siuHasNoShow;
            // Get the selected instances
            if (this.argName) {
                // Navigational or custom initialization
                if (this.exchangeInfo.customData[this.argName]) {
                    this.originalOidList.push(this.exchangeInfo.customData[this.argName]);
                } else if (this.exchangeInfo.selectedOidsClassName === this.argClassName) {
                    // Selected instance
                    this.originalOidList = this.exchangeInfo.selectedOids;
                } else {
                    // Any in the context stack
                    this.originalOidList = this.exchangeInfo.getOidsOfClass(this.argClassName);
                }
            }
            if (this.argName && this.originalOidList.length === 0) {
                // No Oid found
                this.title = 'Error';
                this.argAlias = 'No selected element';
                this.argValue = '';
            } else {
                this.showSuplementaryInformation();
            }
        } else {
            // Configuration has not been found
            this.title = 'Error';
            this.argAlias = 'Configuration not found';
            this.argValue = '';
        }
        if (this.util.modalForIUResponse.observed) {
            this.appGlobalInfo.setScenarioTitle(this.title);
        }
    }

    /**
     * Call service
     */
    public saveChanges(): void {
        this.oidList  = [];
        this.originalOidList.forEach(val => this.oidList.push(Object.assign({}, val)));

        if (this.oidList.length === 0) {
            this.executeService(null, [], 0, 1);
        } else {
            const totalOids = this.oidList.length;
            if (totalOids > 1) {
                this.progressBarSubscription = this.util.progessBarCancelResponse.subscribe(() => {
                    this.util.hideProgressBar();
                    this.oidList = [];
                    if (this.progressBarSubscription) {
                        this.progressBarSubscription.unsubscribe();
                    }   
                });
            }
            this.executeService(this.oidList.pop(), [], 0, totalOids);
        }
    }

    /**
     * Auxiliar function to manages the multiselection
     * @param oid Instance Oid
     * @param errorList List of errors
     * @param executionCount Execution counter
     * @param totalExecutions Total executions
     */
    private executeService(oid: any, errorList: string[], executionCount: number, totalExecutions: number): void {
        // Show progress bar or wait dialog
        if (totalExecutions > 1) {
            this.util.showProgressBar(this.title, executionCount + 1 === totalExecutions ? 99 :
                Math.round(((executionCount + 1) / totalExecutions) * 100), 0);
        } else {
            this.showWait = true;
        }
        let lOid = oid;
        if (this.argNameInRequest?.endsWith('_json')) {
            lOid = JSON.stringify(oid);
        }
        this.util.executeNoShowService(this.className, this.serviceName, lOid, this.argNameInRequest).then(
            (data: {request: any, response: any}) => {
                executionCount++;
                this.processServiceResponse(data, errorList, executionCount, totalExecutions);
                
            }, (error: {request: any, response: any}) => {
                executionCount++;
                errorList.push(this.langMng.translateError(error.response));
                if (this.oidList.length === 0) {
                    this.visible = true;
                    this.util.addErrorMessageList(errorList);
                    this.showWait = false;
                    this.util.hideProgressBar();
                    this.changeDetectorRef.markForCheck();
                } else {
                    this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
                }
            });
    }

    private processServiceResponse(data: {request: any, response: any}, errorList: string[], executionCount: number, totalExecutions: number): void {
        if (data.response.resultCode !== '000' && data.response.resultCode !== '') {
            errorList.push(data.response.resultDescription);
        }
        if (this.oidList.length === 0) {
            if (errorList.length === 0) {
                this.showWait = false;
                this.util.hideProgressBar();
                this.processSuccessfulExecution(data, executionCount);
            } else {
                this.visible = true;
                this.util.addErrorMessageList(errorList);
                this.showWait = false;
                this.util.hideProgressBar();
                this.changeDetectorRef.markForCheck();
            }
        } else {
            this.executeService(this.oidList.pop(), errorList, executionCount, totalExecutions);
        }
    }

    private processSuccessfulExecution(data: {request: any, response: any}, executionCount: number): void {
        if (executionCount <= 1) {
            if (!this.condNavMng.processConditionalNavigation(this.className, this.serviceName,
                data.request, data.response,
                this.exchangeInfo ? this.exchangeInfo.previous : null,
                this.exchangeInfo ? this.exchangeInfo.comeBackContext : null)) {
                this.processCancel(true);
            }
        } else {
            this.processCancel(true);
        }
    }


    /**
     * Manages Cancel button
     * @param lastExecutionSuccess Tue if the execution was success or not
     */
    public processCancel(lastExecutionSuccess = false): void {
        this.util.hideProgressBar();
        if (this.exchangeInfo) {
            if (this.util.processCancelInPopup(lastExecutionSuccess)) {
                // Remove the top element in the context stack
                if (this.exchangeInfo?.comeBackContext?.exchangeInfo) {
                    this.appGlobalInfo.appExchangeInfo.save(this.exchangeInfo.comeBackContext.exchangeInfo);
                }
            } else if (this.exchangeInfo?.comeBackContext) {
                this.util.navigateComeBack(this.exchangeInfo.comeBackContext);
            } else {
                this.util.navigateToMain();
            }
        } else {
            this.util.navigateToMain();
        }
    }

    /**
     * Show the supplementary information of the selected Oids
     */
    private showSuplementaryInformation(): void {
        // If no argument
        if (!this.argName || this.originalOidList.length === 0) {
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
            return;
        }

        if (this.originalOidList.length > 1) {
            this.argValue = this.langMng.translateTextWithParams(
                LanguageMng.fsNumberInstacesSelected, '',
                this.originalOidList.length.toString());
            if (this.siuHasNoShow) {
                this.saveChanges();
            }
        } else {
            // Query to get the value of attributes
			this.showWait = true;
			this.util.callQueryByOid(this.argClassName, JSON.stringify(this.originalOidList[0]),
				this.argSupInfAttNames).then((instance) => {
				if (instance) {
					let textValue = '';
					const attArray: string[] = this.argSupInfAttNames.split(',');
					let i = 0;
					for (const att of attArray) {
						if (textValue.length > 0) {
							textValue += ' ';
						}
						if (this.argSupInfAttTypes && this.argSupInfAttTypes.length > i) {
							textValue += this.util.applyDefaultFormat(instance[att.replace('.', '-')], this.argSupInfAttTypes[i]);
						} else {
							textValue += this.util.valueToString(instance[att.replace('.', '-')]);
						}
						i++;
					}
					this.argValue = textValue;
				} else {
					this.argValue = '';
				}
				this.showWait = false;
				this.changeDetectorRef.markForCheck();
				if (this.siuHasNoShow) {
					this.saveChanges();
				}
			}).catch((errorMsg) => {
				this.argValue = '';
				this.util.addErrorMessage(errorMsg);
				this.showWait = false;
				this.changeDetectorRef.markForCheck();
			});
        }
    }

    /**
     * Configure the scenario based on the Class and service interaction unit
     */
    private configureSIU(): boolean {
        let siuFound = false;
        switch (this.className) {
            case ModelConstants.Solicitudnovedad.name:
                siuFound = this.configureClassSolicitudNovedad();
                break;
            case ModelConstants.Familianovedad.name:
                siuFound = this.configureClassFamiliaNovedad();
                break;
            case ModelConstants.Usuarionovedad.name:
                siuFound = this.configureClassUsuarioNovedad();
                break;
            case ModelConstants.Documentonovedad.name:
                siuFound = this.configureClassDocumentoNovedad();
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class SolicitudNovedad
     */
    private configureClassSolicitudNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Solicitudnovedad.siuutmarcarcompletada:
                this.title = this.langMng.translateText('cls_SolicitudNovedad_svc_TMARCARCOMPLETADA',
                    'Marcar Completada');
                this.serviceName = 'TMARCARCOMPLETADA';
                this.argName = 'p_thissolicitudnovedad';
                this.argNameInRequest = 'p_thissolicitudnovedad_oid';
                this.argClassName = ModelConstants.Solicitudnovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_SolicitudNovedad_svc_TMARCARCOMPLETADA_inArg_p_thisSolicitudNovedad',
                    'Solicitud de Novedad');
                this.argSupInfAttNames = 'drvnumradicadostr';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class FamiliaNovedad
     */
    private configureClassFamiliaNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Familianovedad.siuutdelete:
                this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TDELETE',
                    '¿Está seguro de que desea eliminar la familia?');
                this.serviceName = 'TDELETE';
                this.argName = 'p_thisfamilianovedad';
                this.argNameInRequest = 'p_thisfamilianovedad_oid';
                this.argClassName = ModelConstants.Familianovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_FamiliaNovedad_svc_TDELETE_inArg_p_thisFamiliaNovedad',
                    'Familia');
                this.argSupInfAttNames = 'numfamilia';
                this.argSupInfAttTypes = [Field.dtNat];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class UsuarioNovedad
     */
    private configureClassUsuarioNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Usuarionovedad.siuutdelete:
                this.title = this.langMng.translateText('cls_UsuarioNovedad_svc_TDELETE',
                    'Quitar Usuario');
                this.serviceName = 'TDELETE';
                this.argName = 'p_thisusuarionovedad';
                this.argNameInRequest = 'p_thisusuarionovedad_oid';
                this.argClassName = ModelConstants.Usuarionovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_UsuarioNovedad_svc_TDELETE_inArg_p_thisUsuarioNovedad',
                    'Usuario');
                this.argSupInfAttNames = 'drvnombrecompleto';
                this.argSupInfAttTypes = [Field.dtString];
                siuFound = true;
                break;
        }
        return siuFound;
    }

    /**
     * Configuration for class DocumentoNovedad
     */
    private configureClassDocumentoNovedad(): boolean {
        let siuFound = false;
        switch (this.serviceIUName) {
            case ModelConstants.Documentonovedad.siuudescargardocumentoato:
                this.title = this.langMng.translateText('cls_DocumentoNovedad_svc_descargarDocumentoATO',
                    'Previsualizar');
                this.serviceName = 'descargarDocumentoATO';
                this.argName = 'p_thisdocumentonovedad';
                this.argNameInRequest = 'p_thisdocumentonovedad_oid';
                this.argClassName = ModelConstants.Documentonovedad.name;
                this.argAlias = this.langMng.translateText(
                    'cls_DocumentoNovedad_svc_descargarDocumentoATO_inArg_p_thisDocumentoNovedad',
                    'Documento');
                this.argSupInfAttNames = 'nombre';
                this.argSupInfAttTypes = [Field.dtString];
                this.siuHasNoShow = true;
                siuFound = true;
                break;
        }
        return siuFound;
    }
}
