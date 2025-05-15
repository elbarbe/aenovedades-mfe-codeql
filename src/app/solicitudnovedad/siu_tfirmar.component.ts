import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-solicitudnovedad-siu-tfirmar',
    templateUrl: './siu_tfirmar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudNovedadSIUuTFIRMARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisSolicitudNovedad: FieldOVLense;
    public ptupuatrImagenFirma: FieldBlob;
    public ptupuatrLatitud: Field;
    public ptupuatrLongitud: Field;
    public ptuTexto: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1581421428736234Ser_75UIServ_1';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.iuName = ModelConstants.Solicitudnovedad.siuutfirmar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'MesaDeApoyo']));
        this.serviceName = 'TFIRMAR';
        this.title = this.langMng.translateText('cls_SolicitudNovedad_svc_TFIRMAR',
            'Firma');

        // Create inbound argument components
        this.puthisSolicitudNovedad = new FieldOVLense(this.langMng);
        this.ptupuatrImagenFirma = new FieldBlob(this.langMng);
        this.ptupuatrLatitud = new Field(this.langMng);
        this.ptupuatrLongitud = new Field(this.langMng);
        this.ptuTexto = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisSolicitudNovedad.nameInRequest = 'p_thissolicitudnovedad';
        this.puthisSolicitudNovedad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TFIRMAR_inArg_p_thisSolicitudNovedad',
            'Solicitud de Novedad');
        this.puthisSolicitudNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisSolicitudNovedad.mandatory = true;
        this.puthisSolicitudNovedad.dataType = ModelConstants.Solicitudnovedad.name;
        this.puthisSolicitudNovedad.oidFields = Array(1);
        this.puthisSolicitudNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisSolicitudNovedad.assignCSS();
        this.fields.push(this.puthisSolicitudNovedad);

        this.ptupuatrImagenFirma.nameInRequest = 'pt_p_atrimagenfirma';
        this.ptupuatrImagenFirma.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TFIRMAR_inArg_pt_p_atrImagenFirma',
            'Firma');
        this.ptupuatrImagenFirma.mandatory = false;
        this.ptupuatrImagenFirma.dataType = Field.dtBlob;
        this.ptupuatrImagenFirma.assignCSS();
        this.fields.push(this.ptupuatrImagenFirma);

        this.ptupuatrLatitud.nameInRequest = 'pt_p_atrlatitud';
        this.ptupuatrLatitud.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TFIRMAR_inArg_pt_p_atrLatitud',
            'Latitud');
        this.ptupuatrLatitud.mandatory = false;
        this.ptupuatrLatitud.dataType = Field.dtString;
        this.ptupuatrLatitud.maxLength = 25;
        this.ptupuatrLatitud.assignCSS();
        this.fields.push(this.ptupuatrLatitud);

        this.ptupuatrLongitud.nameInRequest = 'pt_p_atrlongitud';
        this.ptupuatrLongitud.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TFIRMAR_inArg_pt_p_atrLongitud',
            'Longitud');
        this.ptupuatrLongitud.mandatory = false;
        this.ptupuatrLongitud.dataType = Field.dtString;
        this.ptupuatrLongitud.maxLength = 25;
        this.ptupuatrLongitud.assignCSS();
        this.fields.push(this.ptupuatrLongitud);

        this.ptuTexto.nameInRequest = 'pt_texto';
        this.ptuTexto.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TFIRMAR_inArg_pt_Texto',
            'pt_Texto');
        this.ptuTexto.mandatory = false;
        this.ptuTexto.dataType = Field.dtText;
        this.ptuTexto.assignCSS();
        this.ptuTexto.addCSSClass('avisoProDatos');
        this.fields.push(this.ptuTexto);

        navigator.geolocation.getCurrentPosition( (pos: any) => {
            if (pos?.coords) {
                this.ptupuatrLatitud.value = pos.coords.latitude;
                this.ptupuatrLongitud.value = pos.coords.longitude;
            }
        });
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_Texto
            const defValptuTexto = new Promise<void>((resolveDefValue) => {
                let rtnFuncptuTexto0: any;
                this.usrFunc.fu_GetTextoAvisoFirma(1).then((res) => {
                    rtnFuncptuTexto0 = res;

                    this.ptuTexto.setValue(rtnFuncptuTexto0);
                    resolveDefValue();
                });
            });
            promiseArr.push(defValptuTexto);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['SolicitudNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisSolicitudNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisSolicitudNovedad();
            this.executeDependecyRulesputhissolicitudnovedad('SetValue', true);
            this.puthisSolicitudNovedad.enabled = false;
            this.executeDependecyRulesputhissolicitudnovedad('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisSolicitudNovedad'.toLowerCase()) {
            this.puthisSolicitudNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisSolicitudNovedad();
            this.executeDependecyRulesputhissolicitudnovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisSolicitudNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhissolicitudnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhissolicitudnovedad();
        }
        if ('SetValue' === event && this.puthisSolicitudNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisSolicitudNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisSolicitudNovedad argument
     */
    private setSuppInfoputhissolicitudnovedad(): void {

        const displaySetIC = 'DrvNumRadicadoStr';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisSolicitudNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisSolicitudNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisSolicitudNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitudnovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueputhisSolicitudNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisSolicitudNovedad argument
     */
    private executeDependecyRules1puthisSolicitudNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisSolicitudNovedad,
                'Id');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisSolicitudNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisSolicitudNovedad argument
     */
    private executeDependecyRules1puthisSolicitudNovedadActions(): void {
        const varputhissolicitudnovedad = this.getFirstInstanceFromCache(this.puthisSolicitudNovedad);
        // v <> NULL
        if (varputhissolicitudnovedad && !this.util.isNull(varputhissolicitudnovedad)) {
            // p_thisSolicitudNovedad.SetVisible( FALSE )
            this.puthisSolicitudNovedad.visible = false;
            // pt_Texto.SetActive( FALSE )
            this.ptuTexto.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisSolicitudNovedad lense argument
    */
    private setOidFieldsValueputhisSolicitudNovedad(): void {
        if (this.puthisSolicitudNovedad.getSelectedInstances().length > 0) {
            if (this.puthisSolicitudNovedad.getSelectedInstances().length > 1) {
                this.puthisSolicitudNovedad.oidFields = [null];
                this.puthisSolicitudNovedad.editorsEnabled = false;
                this.puthisSolicitudNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisSolicitudNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisSolicitudNovedad.editorsEnabled = true;
                this.puthisSolicitudNovedad.oidFields[0] = this.puthisSolicitudNovedad.getSelectedInstances()[0].oid.id;
                this.puthisSolicitudNovedad.supplementaryInfo = this.puthisSolicitudNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisSolicitudNovedad.oidFields = Array(1);
            this.puthisSolicitudNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisSolicitudNovedad lense argument
     */
    public onputhissolicitudnovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisSolicitudNovedad.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisSolicitudNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.puthisSolicitudNovedad.oidFields[0]
            };
            this.puthisSolicitudNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, oid,
                'DrvNumRadicadoStr');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisSolicitudNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Solicitudnovedad.name, value.oid)) {
                        this.puthisSolicitudNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisSolicitudNovedad.alias));
                        this.puthisSolicitudNovedad.cleanSelectedInstances();
                        this.puthisSolicitudNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhissolicitudnovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisSolicitudNovedad argument value
     */
    public cleanputhissolicitudnovedad(): void {
        this.clearValidationMessages();
        this.puthisSolicitudNovedad.clean();
        this.puthisSolicitudNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhissolicitudnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisSolicitudNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisSolicitudNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_SolicitudNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
