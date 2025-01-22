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
    selector: 'imes-familianovedad-siu-tcrearmanual',
    templateUrl: './siu_tcrearmanual.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTCREARMANUALComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrSolicitud: FieldOVLense;
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuatrTitNumidentificacion: Field;
    public ptupuatrTitPrimerNombre: Field;
    public ptupuatrTitSegundoNombre: Field;
    public ptupuatrTitPrimerApellido: Field;
    public ptupuatrTitSegundoApellido: Field;
    public ptupuatrNumFamilia: Field;
    public ptupuatrTitRazonSocial: Field;

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
        this.idXML = 'Clas_1581424574464890Ser_25UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutcrearmanual;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Asesor']));
        this.serviceName = 'TCREARMANUAL';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TCREARMANUAL',
            'Añadir familia');

        // Create inbound argument components
        this.ptupuagrSolicitud = new FieldOVLense(this.langMng);
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuatrTitNumidentificacion = new Field(this.langMng);
        this.ptupuatrTitPrimerNombre = new Field(this.langMng);
        this.ptupuatrTitSegundoNombre = new Field(this.langMng);
        this.ptupuatrTitPrimerApellido = new Field(this.langMng);
        this.ptupuatrTitSegundoApellido = new Field(this.langMng);
        this.ptupuatrNumFamilia = new Field(this.langMng);
        this.ptupuatrTitRazonSocial = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrSolicitud.nameInRequest = 'pt_p_agrsolicitud';
        this.ptupuagrSolicitud.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_agrSolicitud',
            'Solicitud');
        this.ptupuagrSolicitud.mandatory = true;
        this.ptupuagrSolicitud.dataType = ModelConstants.Solicitudnovedad.name;
        this.ptupuagrSolicitud.oidFields = Array(1);
        this.ptupuagrSolicitud.oidFieldsTypes = ['autonumerico'];
        this.ptupuagrSolicitud.assignCSS();
        this.fields.push(this.ptupuagrSolicitud);

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_agrTipoIdentificacion',
            'Tipo Identificacion');
        this.ptupuagrTipoIdentificacion.mandatory = false;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuatrTitNumidentificacion.nameInRequest = 'pt_p_atrtitnumidentificacion';
        this.ptupuatrTitNumidentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitNumidentificacion',
            'Nº Identificación');
        this.ptupuatrTitNumidentificacion.mandatory = true;
        this.ptupuatrTitNumidentificacion.dataType = Field.dtString;
        this.ptupuatrTitNumidentificacion.maxLength = 60;
        this.ptupuatrTitNumidentificacion.assignCSS();
        this.fields.push(this.ptupuatrTitNumidentificacion);

        this.ptupuatrTitPrimerNombre.nameInRequest = 'pt_p_atrtitprimernombre';
        this.ptupuatrTitPrimerNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitPrimerNombre',
            'Primer Nombre');
        this.ptupuatrTitPrimerNombre.mandatory = false;
        this.ptupuatrTitPrimerNombre.dataType = Field.dtString;
        this.ptupuatrTitPrimerNombre.maxLength = 50;
        this.ptupuatrTitPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrTitPrimerNombre);

        this.ptupuatrTitSegundoNombre.nameInRequest = 'pt_p_atrtitsegundonombre';
        this.ptupuatrTitSegundoNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitSegundoNombre',
            'Segundo Nombre');
        this.ptupuatrTitSegundoNombre.mandatory = false;
        this.ptupuatrTitSegundoNombre.dataType = Field.dtString;
        this.ptupuatrTitSegundoNombre.maxLength = 50;
        this.ptupuatrTitSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrTitSegundoNombre);

        this.ptupuatrTitPrimerApellido.nameInRequest = 'pt_p_atrtitprimerapellido';
        this.ptupuatrTitPrimerApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitPrimerApellido',
            'Primer Apellido');
        this.ptupuatrTitPrimerApellido.mandatory = false;
        this.ptupuatrTitPrimerApellido.dataType = Field.dtString;
        this.ptupuatrTitPrimerApellido.maxLength = 50;
        this.ptupuatrTitPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrTitPrimerApellido);

        this.ptupuatrTitSegundoApellido.nameInRequest = 'pt_p_atrtitsegundoapellido';
        this.ptupuatrTitSegundoApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitSegundoApellido',
            'Segundo Apellido');
        this.ptupuatrTitSegundoApellido.mandatory = false;
        this.ptupuatrTitSegundoApellido.dataType = Field.dtString;
        this.ptupuatrTitSegundoApellido.maxLength = 50;
        this.ptupuatrTitSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrTitSegundoApellido);

        this.ptupuatrNumFamilia.nameInRequest = 'pt_p_atrnumfamilia';
        this.ptupuatrNumFamilia.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrNumFamilia',
            'Nº Familia');
        this.ptupuatrNumFamilia.mandatory = true;
        this.ptupuatrNumFamilia.dataType = Field.dtNat;
        this.ptupuatrNumFamilia.assignCSS();
        this.fields.push(this.ptupuatrNumFamilia);

        this.ptupuatrTitRazonSocial.nameInRequest = 'pt_p_atrtitrazonsocial';
        this.ptupuatrTitRazonSocial.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL_inArg_pt_p_atrTitRazonSocial',
            'Razón Social');
        this.ptupuatrTitRazonSocial.mandatory = false;
        this.ptupuatrTitRazonSocial.dataType = Field.dtString;
        this.ptupuatrTitRazonSocial.maxLength = 200;
        this.ptupuatrTitRazonSocial.assignCSS();
        this.fields.push(this.ptupuatrTitRazonSocial);
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
            if (lastRole === 'Solicitud') {
                this.ptupuagrSolicitud.setValue(lastRoleOid);
                this.setOidFieldsValueptupuagrSolicitud();
                this.executeDependecyRulesptupuagrsolicitud('SetValue', true);
                this.ptupuagrSolicitud.enabled = false;
                this.executeDependecyRulesptupuagrsolicitud('SetEnabled', true);
            }
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuagrTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
                this.ptupuagrTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuagrtipoidentificacion('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoIdentificacion.loadPreload([]);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrSolicitud'.toLowerCase()) {
            this.ptupuagrSolicitud.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptupuagrSolicitud();
            this.executeDependecyRulesptupuagrsolicitud('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrsolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrsolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrSolicitud argument
     */
    private setSuppInfoptupuagrsolicitud(): void {

        const displaySetIC = 'DrvNumRadicadoStr';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptupuagrSolicitud();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitudnovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueptupuagrSolicitud();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

   /**
    * Set values to the Oid fields and supplementary information of pt_p_agrSolicitud lense argument
    */
    private setOidFieldsValueptupuagrSolicitud(): void {
        if (this.ptupuagrSolicitud.getSelectedInstances().length > 0) {
            if (this.ptupuagrSolicitud.getSelectedInstances().length > 1) {
                this.ptupuagrSolicitud.oidFields = [null];
                this.ptupuagrSolicitud.editorsEnabled = false;
                this.ptupuagrSolicitud.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptupuagrSolicitud.getSelectedInstances().length.toString());
            } else {
                this.ptupuagrSolicitud.editorsEnabled = true;
                this.ptupuagrSolicitud.oidFields[0] = this.ptupuagrSolicitud.getSelectedInstances()[0].oid.id;
                this.ptupuagrSolicitud.supplementaryInfo = this.ptupuagrSolicitud.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptupuagrSolicitud.oidFields = Array(1);
            this.ptupuagrSolicitud.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the pt_p_agrSolicitud lense argument
     */
    public onptupuagrsolicitudChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptupuagrSolicitud.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptupuagrSolicitud.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.ptupuagrSolicitud.oidFields[0]
            };
            this.ptupuagrSolicitud.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, oid,
                'DrvNumRadicadoStr');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptupuagrSolicitud.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Solicitudnovedad.name, value.oid)) {
                        this.ptupuagrSolicitud.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptupuagrSolicitud.alias));
                        this.ptupuagrSolicitud.cleanSelectedInstances();
                        this.ptupuagrSolicitud.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptupuagrsolicitud('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean pt_p_agrSolicitud argument value
     */
    public cleanptupuagrsolicitud(): void {
        this.clearValidationMessages();
        this.ptupuagrSolicitud.clean();
        this.ptupuagrSolicitud.oidFields = Array(1);
        this.executeDependecyRulesptupuagrsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrtipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.NIT = TRUE
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), true)) {
            // pt_p_atrTitPrimerApellido.SetValue( NULL )
            this.ptupuatrTitPrimerApellido.setValue(null);
            // pt_p_atrTitPrimerNombre.SetValue( NULL )
            this.ptupuatrTitPrimerNombre.setValue(null);
            // pt_p_atrTitSegundoApellido.SetValue( NULL )
            this.ptupuatrTitSegundoApellido.setValue(null);
            // pt_p_atrTitSegundoNombre.SetValue( NULL )
            this.ptupuatrTitSegundoNombre.setValue(null);
            // pt_p_atrTitPrimerApellido.SetActive( FALSE )
            this.ptupuatrTitPrimerApellido.enabled = false;
            // pt_p_atrTitPrimerNombre.SetActive( FALSE )
            this.ptupuatrTitPrimerNombre.enabled = false;
            // pt_p_atrTitSegundoApellido.SetActive( FALSE )
            this.ptupuatrTitSegundoApellido.enabled = false;
            // pt_p_atrTitSegundoNombre.SetActive( FALSE )
            this.ptupuatrTitSegundoNombre.enabled = false;
            // pt_p_atrTitRazonSocial.SetActive( TRUE )
            this.ptupuatrTitRazonSocial.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.NIT = FALSE
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), false)) {
            // pt_p_atrTitPrimerApellido.SetActive( TRUE )
            this.ptupuatrTitPrimerApellido.enabled = true;
            // pt_p_atrTitPrimerNombre.SetActive( TRUE )
            this.ptupuatrTitPrimerNombre.enabled = true;
            // pt_p_atrTitSegundoApellido.SetActive( TRUE )
            this.ptupuatrTitSegundoApellido.enabled = true;
            // pt_p_atrTitSegundoNombre.SetActive( TRUE )
            this.ptupuatrTitSegundoNombre.enabled = true;
            // pt_p_atrTitRazonSocial.SetActive( FALSE )
            this.ptupuatrTitRazonSocial.enabled = false;
            // pt_p_atrTitRazonSocial.SetValue( NULL )
            this.ptupuatrTitRazonSocial.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrTipoIdentificacion argument
     */
    public onptupuagrtipoidentificacionChange(): void {
        this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_SolicitudNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '2') {
            isVisible = this.ptupuagrTipoIdentificacion.visible ||
                this.ptupuatrTitNumidentificacion.visible ||
                this.ptupuatrTitPrimerNombre.visible ||
                this.ptupuatrTitSegundoNombre.visible ||
                this.ptupuatrTitPrimerApellido.visible ||
                this.ptupuatrTitSegundoApellido.visible ||
                this.ptupuatrTitRazonSocial.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '2') {
            alias = this.langMng.translateText('2',
                'Titular');
        }
        return alias;
    }
}
