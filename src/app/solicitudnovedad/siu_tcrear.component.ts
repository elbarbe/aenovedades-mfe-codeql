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
    selector: 'imes-solicitudnovedad-siu-tcrear',
    templateUrl: './siu_tcrear.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudNovedadSIUuTCREARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuagrPlan: FieldOVPreload;
    public ptupuagrNovedad: FieldOVPreload;
    public ptupuagrCausal: FieldOVPreload;
    public ptupuatrFechaVigencia: Field;
    public ptupuatrNumContrato: Field;
    public ptProducto: FieldOVPreload;
    public ptTipoNovedad: FieldOVPreload;
    public ptupuagrProteccionDatos: FieldOVLense;

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
        this.idXML = 'Clas_1581421428736234Ser_5UIServ_1';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.iuName = ModelConstants.Solicitudnovedad.siuutcrear;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor']));
        this.serviceName = 'TCREAR';
        this.title = this.langMng.translateText('cls_SolicitudNovedad_svc_TCREAR',
            'Crear');

        // Create inbound argument components
        this.ptupuagrPlan = new FieldOVPreload(this.langMng);
        this.ptupuagrNovedad = new FieldOVPreload(this.langMng);
        this.ptupuagrCausal = new FieldOVPreload(this.langMng);
        this.ptupuatrFechaVigencia = new Field(this.langMng);
        this.ptupuatrNumContrato = new Field(this.langMng);
        this.ptProducto = new FieldOVPreload(this.langMng);
        this.ptTipoNovedad = new FieldOVPreload(this.langMng);
        this.ptupuagrProteccionDatos = new FieldOVLense(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

     private comprobarNovedadAnterior(): void {
        // Si venimos de un escenario de MD de solicitud de novedad recuperamos los datos
        if (this.context?.exchangeInfo) {
            this.setShowWait(true);
            const oids = this.context.exchangeInfo.getOidsOfClass(ModelConstants.Solicitudnovedad.name);
            if (oids && oids.length === 1) {
                const oidSolNovedad = oids[0];
                const displaySet = 'plant.plan,plant.productot.producto,numcontrato';
                this.util.callQueryByOid( ModelConstants.Solicitudnovedad.name, oidSolNovedad, displaySet).then ( (response: any) => {

                    if (response) {
                        this.ptProducto.setValue(this.util.oidBuilder.buildOidProductos(response['plant-productot-producto']));
                        this.ptupuagrPlan.setValue(this.util.oidBuilder.buildOidPlanes(response['plant-plan']));
                        this.ptupuatrNumContrato.setValue( response['numcontrato']);
                        this.loadPreloadptupuagrplan();
                    }
                    this.setShowWait(false);
                }).catch ((err: Error) => {
                    this.setShowWait(false);
                });
            }
        }
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuagrPlan.nameInRequest = 'pt_p_agrplan';
        this.ptupuagrPlan.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_agrPlan',
            'Plan');
        this.ptupuagrPlan.mandatory = true;
        this.ptupuagrPlan.dataType = ModelConstants.Planes.name;
        this.ptupuagrPlan.maxLength = 150;
        this.ptupuagrPlan.assignCSS();
        this.fields.push(this.ptupuagrPlan);

        this.ptupuagrNovedad.nameInRequest = 'pt_p_agrnovedad';
        this.ptupuagrNovedad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_agrNovedad',
            'Novedad');
        this.ptupuagrNovedad.mandatory = true;
        this.ptupuagrNovedad.dataType = ModelConstants.Novedad.name;
        this.ptupuagrNovedad.maxLength = 50;
        this.ptupuagrNovedad.assignCSS();
        this.fields.push(this.ptupuagrNovedad);

        this.ptupuagrCausal.nameInRequest = 'pt_p_agrcausal';
        this.ptupuagrCausal.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_agrCausal',
            'Causal');
        this.ptupuagrCausal.mandatory = false;
        this.ptupuagrCausal.dataType = ModelConstants.Causal.name;
        this.ptupuagrCausal.maxLength = 50;
        this.ptupuagrCausal.assignCSS();
        this.fields.push(this.ptupuagrCausal);

        this.ptupuatrFechaVigencia.nameInRequest = 'pt_p_atrfechavigencia';
        this.ptupuatrFechaVigencia.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_atrFechaVigencia',
            'Fecha de vigencia');
        this.ptupuatrFechaVigencia.mandatory = true;
        this.ptupuatrFechaVigencia.dataType = Field.dtDate;
        this.ptupuatrFechaVigencia.assignCSS();
        this.fields.push(this.ptupuatrFechaVigencia);

        this.ptupuatrNumContrato.nameInRequest = 'pt_p_atrnumcontrato';
        this.ptupuatrNumContrato.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_atrNumContrato',
            'Nº Contrato');
        this.ptupuatrNumContrato.mandatory = true;
        this.ptupuatrNumContrato.dataType = Field.dtString;
        this.ptupuatrNumContrato.maxLength = 50;
        this.ptupuatrNumContrato.assignCSS();
        this.fields.push(this.ptupuatrNumContrato);

        this.ptProducto.nameInRequest = 'ptproducto';
        this.ptProducto.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_ptProducto',
            'Producto');
        this.ptProducto.mandatory = true;
        this.ptProducto.dataType = ModelConstants.Productos.name;
        this.ptProducto.maxLength = 100;
        this.ptProducto.assignCSS();
        this.fields.push(this.ptProducto);

        this.ptTipoNovedad.nameInRequest = 'pttiponovedad';
        this.ptTipoNovedad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_ptTipoNovedad',
            'Tipo Novedad');
        this.ptTipoNovedad.mandatory = true;
        this.ptTipoNovedad.dataType = ModelConstants.Tiponovedad.name;
        this.ptTipoNovedad.maxLength = 50;
        this.ptTipoNovedad.assignCSS();
        this.fields.push(this.ptTipoNovedad);

        this.ptupuagrProteccionDatos.nameInRequest = 'pt_p_agrprotecciondatos';
        this.ptupuagrProteccionDatos.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TCREAR_inArg_pt_p_agrProteccionDatos',
            'Protección de datos');
        this.ptupuagrProteccionDatos.mandatory = true;
        this.ptupuagrProteccionDatos.dataType = ModelConstants.Protecciondatos.name;
        this.ptupuagrProteccionDatos.oidFields = Array(1);
        this.ptupuagrProteccionDatos.oidFieldsTypes = ['autonumerico'];
        this.ptupuagrProteccionDatos.assignCSS();
        this.fields.push(this.ptupuagrProteccionDatos);
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
            if (lastRole === 'PlanT') {
                this.ptupuagrPlan.setValue(lastRoleOid);
                this.ptupuagrPlan.enabled = false;
                this.loadPreloadptupuagrnovedad();
                this.loadPreloadpttiponovedad();
            }
            if (lastRole === 'Novedad') {
                this.ptupuagrNovedad.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrnovedad('SetValue', true);
                this.ptupuagrNovedad.enabled = false;
                this.executeDependecyRulesptupuagrnovedad('SetEnabled', true);
            }
            if (lastRole === 'Causal') {
                this.ptupuagrCausal.setValue(lastRoleOid);
                this.ptupuagrCausal.enabled = false;
            }
            if (lastRole === 'ProteccionDatos') {
                this.ptupuagrProteccionDatos.setValue(lastRoleOid);
                this.setOidFieldsValueptupuagrProteccionDatos();
                this.executeDependecyRulesptupuagrprotecciondatos('SetValue', true);
                this.ptupuagrProteccionDatos.enabled = false;
                this.executeDependecyRulesptupuagrprotecciondatos('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptProducto
        const navFiltersptProducto: string[] = [];
        navFiltersptProducto.push('SolicitudNovedad_TCREAR_ptProducto_NavFilter0');
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Productos', 'IC_Producto', navFiltersptProducto, this.getNavigationFilterVariables(), 'OC_Producto').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptProducto.loadPreload(response.results);
                } else {
                    this.ptProducto.loadPreload([]);
                }
                
                this.comprobarNovedadAnterior();
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
     * Search the preload values of field pt_p_agrPlan
     */
    private loadPreloadptupuagrplan(): void {

        if (this.ptProducto.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('SolicitudNovedad_TCREAR_pt_p_agrPlan_NavFilter0');
            navFilters.push('SolicitudNovedad_TCREAR_pt_p_agrPlan_NavFilter1');
            this.util.searchPreload('Planes', 'IC_Plan', navFilters, this.getNavigationFilterVariables(), 'OC_Plan').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrPlan.loadPreload(response.results);
                    } else {
                        this.ptupuagrPlan.loadPreload([]);
                    }
                    this.loadPreloadptupuagrnovedad();
                    this.loadPreloadpttiponovedad();
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrPlan.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrPlan.cleanPreload();
            this.loadPreloadptupuagrnovedad();
            this.loadPreloadpttiponovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrNovedad
     */
    private loadPreloadptupuagrnovedad(): void {

        if (this.ptTipoNovedad.getSelectedInstances().length === 1 &&
            this.ptupuagrPlan.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('SolicitudNovedad_TCREAR_pt_p_agrNovedad_NavFilter0');
            navFilters.push('SolicitudNovedad_TCREAR_pt_p_agrNovedad_NavFilter1');
            this.util.searchPreload('Novedad', 'IC_Novedad', navFilters, this.getNavigationFilterVariables(), 'OC_Novedad').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrNovedad.loadPreload(response.results);
                    } else {
                        this.ptupuagrNovedad.loadPreload([]);
                    }
                    if (this.ptupuagrNovedad.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptupuagrnovedad('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrNovedad.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptupuagrNovedad.getSelectedInstances().length > 0) {
                this.ptupuagrNovedad.cleanPreload();
                this.executeDependecyRulesptupuagrnovedad('SetValue', true);
            } else {
                this.ptupuagrNovedad.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrCausal
     */
    private loadPreloadptupuagrcausal(): void {

        if (this.ptupuagrNovedad.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('SolicitudNovedad_TCREAR_pt_p_agrCausal_NavFilter0');
            this.util.searchPreload('Causal', 'IC_Causal', navFilters, this.getNavigationFilterVariables(), 'OC_Causal').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrCausal.loadPreload(response.results);
                    } else {
                        this.ptupuagrCausal.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrCausal.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrCausal.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field ptTipoNovedad
     */
    private loadPreloadpttiponovedad(): void {

        if (this.ptupuagrPlan.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('SolicitudNovedad_TCREAR_ptTipoNovedad_NavFilter0');
            this.util.searchPreload('TipoNovedad', 'IC_TipoNovedad', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptTipoNovedad.loadPreload(response.results);
                    } else {
                        this.ptTipoNovedad.loadPreload([]);
                    }
                    this.loadPreloadptupuagrnovedad();
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptTipoNovedad.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptTipoNovedad.cleanPreload();
            this.loadPreloadptupuagrnovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrProteccionDatos'.toLowerCase()) {
            this.ptupuagrProteccionDatos.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptupuagrProteccionDatos();
            this.executeDependecyRulesptupuagrprotecciondatos('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_agrNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrnovedad(event: string, internal: boolean): void {

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptupuagrcausal();
        }
        if ('SetValue' === event && this.ptupuagrNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrNovedad argument
     */
    private executeDependecyRules1ptupuagrNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrNovedad,
                'drvtienecausales');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrNovedad argument
     */
    private executeDependecyRules1ptupuagrNovedadActions(): void {
        const varptupuagrnovedad = this.getFirstInstanceFromCache(this.ptupuagrNovedad);
        // v <> NULL
        if (varptupuagrnovedad && !this.util.isNull(varptupuagrnovedad)) {
            // pt_p_agrCausal.SetActive( v.drvTieneCausales )
            this.ptupuagrCausal.enabled = this.util.getBool(varptupuagrnovedad.get('drvtienecausales'));
            // pt_p_agrCausal.SetMandatory( v.drvTieneCausales )
            this.ptupuagrCausal.mandatory = this.util.getBool(varptupuagrnovedad.get('drvtienecausales'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrNovedad argument
     */
    public onptupuagrnovedadChange(): void {
        this.executeDependecyRulesptupuagrnovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrProteccionDatos argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrprotecciondatos(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrprotecciondatos();
        }
        if ('SetValue' === event && this.ptupuagrProteccionDatos.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrProteccionDatos();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrProteccionDatos argument
     */
    private setSuppInfoptupuagrprotecciondatos(): void {

        const displaySetIC = 'Identificador';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrProteccionDatos.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Protecciondatos.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptupuagrProteccionDatos();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrProteccionDatos.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Protecciondatos.name,
                            value.oid, displaySetIC, [Field.dtAuto]);
                    }
                }
                this.setOidFieldsValueptupuagrProteccionDatos();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for pt_p_agrProteccionDatos argument
     */
    private executeDependecyRules1ptupuagrProteccionDatos(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrProteccionDatos,
                'Identificador');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrProteccionDatosActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrProteccionDatos argument
     */
    private executeDependecyRules1ptupuagrProteccionDatosActions(): void {
        const varptupuagrprotecciondatos = this.getFirstInstanceFromCache(this.ptupuagrProteccionDatos);
        // v <> NULL
        if (varptupuagrprotecciondatos && !this.util.isNull(varptupuagrprotecciondatos)) {
            // pt_p_agrProteccionDatos.SetVisible( FALSE )
            this.ptupuagrProteccionDatos.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of pt_p_agrProteccionDatos lense argument
    */
    private setOidFieldsValueptupuagrProteccionDatos(): void {
        if (this.ptupuagrProteccionDatos.getSelectedInstances().length > 0) {
            if (this.ptupuagrProteccionDatos.getSelectedInstances().length > 1) {
                this.ptupuagrProteccionDatos.oidFields = [null];
                this.ptupuagrProteccionDatos.editorsEnabled = false;
                this.ptupuagrProteccionDatos.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptupuagrProteccionDatos.getSelectedInstances().length.toString());
            } else {
                this.ptupuagrProteccionDatos.editorsEnabled = true;
                this.ptupuagrProteccionDatos.oidFields[0] =
                    this.ptupuagrProteccionDatos.getSelectedInstances()[0].oid.identificador;
                this.ptupuagrProteccionDatos.supplementaryInfo =
                    this.ptupuagrProteccionDatos.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptupuagrProteccionDatos.oidFields = Array(1);
            this.ptupuagrProteccionDatos.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the pt_p_agrProteccionDatos lense argument
     */
    public onptupuagrprotecciondatosChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptupuagrProteccionDatos.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptupuagrProteccionDatos.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            identificador: this.ptupuagrProteccionDatos.oidFields[0]
            };
            this.ptupuagrProteccionDatos.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Protecciondatos.name, oid,
                'Identificador');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptupuagrProteccionDatos.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Protecciondatos.name, value.oid)) {
                        this.ptupuagrProteccionDatos.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptupuagrProteccionDatos.alias));
                        this.ptupuagrProteccionDatos.cleanSelectedInstances();
                        this.ptupuagrProteccionDatos.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptupuagrprotecciondatos('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean pt_p_agrProteccionDatos argument value
     */
    public cleanptupuagrprotecciondatos(): void {
        this.clearValidationMessages();
        this.ptupuagrProteccionDatos.clean();
        this.ptupuagrProteccionDatos.oidFields = Array(1);
        this.executeDependecyRulesptupuagrprotecciondatos('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the ptProducto argument
     */
    public onptproductoChange(): void {
        this.loadPreloadptupuagrplan();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the ptTipoNovedad argument
     */
    public onpttiponovedadChange(): void {
        this.loadPreloadptupuagrnovedad();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_agrPlan argument
     */
    public onptupuagrplanChange(): void {
        this.loadPreloadptupuagrnovedad();
        this.loadPreloadpttiponovedad();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptupuagrProteccionDatos'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrProteccionDatos.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_ProteccionDatos_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
