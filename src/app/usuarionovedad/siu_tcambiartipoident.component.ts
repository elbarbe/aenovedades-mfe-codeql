import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLense, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-usuarionovedad-siu-tcambiartipoident',
    templateUrl: './siu_tcambiartipoident.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuarioNovedad: FieldOVLense;
    public ptupuevcTipoIdentificacion: FieldOVPreload;
    public ptupuNumIdentificacionCD: Field;

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
        this.idXML = 'Clas_1581442138112529Ser_28UIServ_1';
        this.className = ModelConstants.Usuarionovedad.name;
        this.iuName = ModelConstants.Usuarionovedad.siuutcambiartipoident;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TCAMBIARTIPOIDENT';
        this.title = this.langMng.translateText('cls_UsuarioNovedad_svc_TCAMBIARTIPOIDENT',
            'Cambiar Identificación');

        // Create inbound argument components
        this.puthisUsuarioNovedad = new FieldOVLense(this.langMng);
        this.ptupuevcTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuNumIdentificacionCD = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisUsuarioNovedad.nameInRequest = 'p_thisusuarionovedad';
        this.puthisUsuarioNovedad.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TCAMBIARTIPOIDENT_inArg_p_thisUsuarioNovedad',
            'Usuario');
        this.puthisUsuarioNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuarioNovedad.mandatory = true;
        this.puthisUsuarioNovedad.dataType = ModelConstants.Usuarionovedad.name;
        this.puthisUsuarioNovedad.oidFields = Array(1);
        this.puthisUsuarioNovedad.oidFieldsTypes = [Field.dtAuto];
        this.puthisUsuarioNovedad.assignCSS();
        this.fields.push(this.puthisUsuarioNovedad);

        this.ptupuevcTipoIdentificacion.nameInRequest = 'pt_p_evctipoidentificacion';
        this.ptupuevcTipoIdentificacion.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TCAMBIARTIPOIDENT_inArg_pt_p_evcTipoIdentificacion',
            'Tipo Id. Nuevo');
        this.ptupuevcTipoIdentificacion.mandatory = true;
        this.ptupuevcTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuevcTipoIdentificacion.maxLength = 170;
        this.ptupuevcTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuevcTipoIdentificacion);

        this.ptupuNumIdentificacionCD.nameInRequest = 'pt_p_numidentificacioncd';
        this.ptupuNumIdentificacionCD.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TCAMBIARTIPOIDENT_inArg_pt_p_NumIdentificacionCD',
            'Nº Identificación Nuevo');
        this.ptupuNumIdentificacionCD.mandatory = true;
        this.ptupuNumIdentificacionCD.dataType = Field.dtString;
        this.ptupuNumIdentificacionCD.maxLength = 60;
        this.ptupuNumIdentificacionCD.assignCSS();
        this.fields.push(this.ptupuNumIdentificacionCD);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['UsuarioNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisUsuarioNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisUsuarioNovedad();
            this.executeDependecyRulesputhisusuarionovedad('SetValue', true);
            this.puthisUsuarioNovedad.enabled = false;
            this.executeDependecyRulesputhisusuarionovedad('SetEnabled', true);
        }
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'TipoIdentificacionCD') {
                this.ptupuevcTipoIdentificacion.setValue(lastRoleOid);
                this.ptupuevcTipoIdentificacion.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuevcTipoIdentificacion
        const navFiltersptupuevcTipoIdentificacion: string[] = [];
        navFiltersptupuevcTipoIdentificacion.push('UsuarioNovedad_TCAMBIARTIPOIDENT_pt_p_evcTipoIdentificacion_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', navFiltersptupuevcTipoIdentificacion, this.getNavigationFilterVariables(), 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuevcTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuevcTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisUsuarioNovedad'.toLowerCase()) {
            this.puthisUsuarioNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisUsuarioNovedad();
            this.executeDependecyRulesputhisusuarionovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisUsuarioNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisusuarionovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisusuarionovedad();
        }
        if ('SetValue' === event && this.puthisUsuarioNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisUsuarioNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisUsuarioNovedad argument
     */
    private setSuppInfoputhisusuarionovedad(): void {

        const displaySetIC = 'DrvNombreCompleto';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisUsuarioNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuarionovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisUsuarioNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisUsuarioNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Usuarionovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueputhisUsuarioNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisUsuarioNovedad argument
     */
    private executeDependecyRules1puthisUsuarioNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisUsuarioNovedad,
                'numidentificacioncd');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisUsuarioNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisUsuarioNovedad argument
     */
    private executeDependecyRules1puthisUsuarioNovedadActions(): void {
        const varputhisusuarionovedad = this.getFirstInstanceFromCache(this.puthisUsuarioNovedad);
        // v <> NULL
        if (varputhisusuarionovedad && !this.util.isNull(varputhisusuarionovedad)) {
            // pt_p_NumIdentificacionCD.SetValue( v.NumIdentificacionCD )
            this.ptupuNumIdentificacionCD.setValue(varputhisusuarionovedad.get('numidentificacioncd'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisUsuarioNovedad lense argument
    */
    private setOidFieldsValueputhisUsuarioNovedad(): void {
        if (this.puthisUsuarioNovedad.getSelectedInstances().length > 0) {
            if (this.puthisUsuarioNovedad.getSelectedInstances().length > 1) {
                this.puthisUsuarioNovedad.oidFields = [null];
                this.puthisUsuarioNovedad.editorsEnabled = false;
                this.puthisUsuarioNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisUsuarioNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisUsuarioNovedad.editorsEnabled = true;
                this.puthisUsuarioNovedad.oidFields[0] = this.puthisUsuarioNovedad.getSelectedInstances()[0].oid.id_usuarionovedad;
                this.puthisUsuarioNovedad.supplementaryInfo = this.puthisUsuarioNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisUsuarioNovedad.oidFields = Array(1);
            this.puthisUsuarioNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisUsuarioNovedad lense argument
     */
    public onputhisusuarionovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisUsuarioNovedad.oidFields) {
            if (this.util.isNull(field)) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisUsuarioNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_usuarionovedad: this.puthisUsuarioNovedad.oidFields[0]
            };
            this.puthisUsuarioNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Usuarionovedad.name, oid,
                'DrvNombreCompleto');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisUsuarioNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Usuarionovedad.name, value.oid)) {
                        this.puthisUsuarioNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisUsuarioNovedad.alias));
                        this.puthisUsuarioNovedad.cleanSelectedInstances();
                        this.puthisUsuarioNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisusuarionovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisUsuarioNovedad argument value
     */
    public cleanputhisusuarionovedad(): void {
        this.clearValidationMessages();
        this.puthisUsuarioNovedad.clean();
        this.puthisUsuarioNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhisusuarionovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisUsuarioNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisUsuarioNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_UsuarioNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
