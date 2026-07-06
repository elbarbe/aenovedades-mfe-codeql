import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from '../common/app.cachedependencyrules';
import { Field, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements global SIU SIU_OGETREPORTSOLNOV »
 */
@Component({
    selector: 'imes-gs-siu-ogetreportsolnov',
    templateUrl: './siu_ogetreportsolnov.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGETREPORTSOLNOVComponent extends AbstractServiceIU implements OnInit {

    /** Fields */
    public ptSolicitudNovedad: FieldOVLense;

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
        this.idXML = 'IGl_1730127986688050UIServ_1';
        this.className = ModelConstants.Globalservices.name;
        this.iuName = ModelConstants.Globalservices.siuuogetreportsolnov;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Funcionario', 'Admin', 'SuperAdmin',
            'Asesor', 'AreaMedica', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.serviceName = 'OGETREPORTSOLNOV';
        this.title = this.langMng.translateText('gs_OGETREPORTSOLNOV',
            'Ver PDF');
        this.noShow = true;

        // Create inbound argument components
        this.ptSolicitudNovedad = new FieldOVLense(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptSolicitudNovedad.nameInRequest = 'ptsolicitudnovedad';
        this.ptSolicitudNovedad.alias = this.langMng.translateText(
            'gs_OGETREPORTSOLNOV_inArg_ptSolicitudNovedad',
            'Solicitud Novedad');
        this.ptSolicitudNovedad.mandatory = true;
        this.ptSolicitudNovedad.dataType = ModelConstants.Solicitudnovedad.name;
        this.ptSolicitudNovedad.oidFields = Array(1);
        this.ptSolicitudNovedad.oidFieldsTypes = [Field.dtAuto];
        this.ptSolicitudNovedad.assignCSS();
        this.fields.push(this.ptSolicitudNovedad);
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptSolicitudNovedad'.toLowerCase()) {
            this.ptSolicitudNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptSolicitudNovedad();
            this.executeDependecyRulesptsolicitudnovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for ptSolicitudNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptsolicitudnovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptsolicitudnovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptSolicitudNovedad argument
     */
    private setSuppInfoptsolicitudnovedad(): void {

        const displaySetIC = 'DrvNumRadicadoStr';
        let numberMissingSupInfo = 0;
        for (const value of this.ptSolicitudNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptSolicitudNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptSolicitudNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitudnovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueptSolicitudNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

   /**
    * Set values to the Oid fields and supplementary information of ptSolicitudNovedad lense argument
    */
    private setOidFieldsValueptSolicitudNovedad(): void {
        if (this.ptSolicitudNovedad.getSelectedInstances().length > 0) {
            if (this.ptSolicitudNovedad.getSelectedInstances().length > 1) {
                this.ptSolicitudNovedad.oidFields = [null];
                this.ptSolicitudNovedad.editorsEnabled = false;
                this.ptSolicitudNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptSolicitudNovedad.getSelectedInstances().length.toString());
            } else {
                this.ptSolicitudNovedad.editorsEnabled = true;
                this.ptSolicitudNovedad.oidFields[0] = this.ptSolicitudNovedad.getSelectedInstances()[0].oid.id;
                this.ptSolicitudNovedad.supplementaryInfo = this.ptSolicitudNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptSolicitudNovedad.oidFields = Array(1);
            this.ptSolicitudNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the ptSolicitudNovedad lense argument
     */
    public onptsolicitudnovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptSolicitudNovedad.oidFields) {
            if (this.util.isNull(field)) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptSolicitudNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.ptSolicitudNovedad.oidFields[0]
            };
            this.ptSolicitudNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, oid,
                'DrvNumRadicadoStr');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptSolicitudNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Solicitudnovedad.name, value.oid)) {
                        this.ptSolicitudNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptSolicitudNovedad.alias));
                        this.ptSolicitudNovedad.cleanSelectedInstances();
                        this.ptSolicitudNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptsolicitudnovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean ptSolicitudNovedad argument value
     */
    public cleanptsolicitudnovedad(): void {
        this.clearValidationMessages();
        this.ptSolicitudNovedad.clean();
        this.ptSolicitudNovedad.oidFields = Array(1);
        this.executeDependecyRulesptsolicitudnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptSolicitudNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptSolicitudNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_SolicitudNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Process the service answer to show the outbound argument scenario
     */
    public override processOutboundArguments(request: any, response: any): boolean {
        this.util.navigateOutboundArgumentsScenario(this.className, 'siu_ogetreportsolnov_out',
            this.context.exchangeInfo ? this.context.exchangeInfo.previous : null,
            this.context.exchangeInfo ? this.context.exchangeInfo.comeBackContext : null, request, response);
        return true;
    }
}
