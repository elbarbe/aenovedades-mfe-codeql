import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-familianovedad-siu-tsetdircorr',
    templateUrl: './siu_tsetdircorr.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTSETDIRCORRComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFamiliaNovedad: FieldOVLense;
    public ptupuagrPais: FieldOVLenseSearch;
    public ptupuagrDepartamento: FieldOVPreload;
    public ptupuagrMunicipio: FieldOVPreload;
    public ptupuatrDireccionCompleta: Field;
    public ptupuatrRural: FieldDefinedSelection;
    public ptupuatrTelefonoFijo: Field;
    public ptupuatrTelefonoCelular: Field;
    public ptupuatrCorreoElectronico: Field;

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
        this.idXML = 'Clas_1581424574464890Ser_19UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutsetdircorr;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TSETDIRCORR';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TSETDIRCORR',
            'Indicar nueva dirección de correspondencia');

        // Create inbound argument components
        this.puthisFamiliaNovedad = new FieldOVLense(this.langMng);
        this.ptupuagrPais = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuagrDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipio = new FieldOVPreload(this.langMng);
        this.ptupuatrDireccionCompleta = new Field(this.langMng);
        this.ptupuatrRural = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTelefonoFijo = new Field(this.langMng);
        this.ptupuatrTelefonoCelular = new Field(this.langMng);
        this.ptupuatrCorreoElectronico = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFamiliaNovedad.nameInRequest = 'p_thisfamilianovedad';
        this.puthisFamiliaNovedad.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_p_thisFamiliaNovedad',
            'Familia');
        this.puthisFamiliaNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFamiliaNovedad.mandatory = true;
        this.puthisFamiliaNovedad.dataType = ModelConstants.Familianovedad.name;
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.puthisFamiliaNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisFamiliaNovedad.assignCSS();
        this.fields.push(this.puthisFamiliaNovedad);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptupuagrDepartamento.nameInRequest = 'pt_p_agrdepartamento';
        this.ptupuagrDepartamento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_agrDepartamento',
            'Departamento');
        this.ptupuagrDepartamento.mandatory = false;
        this.ptupuagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamento.maxLength = 150;
        this.ptupuagrDepartamento.assignCSS();
        this.fields.push(this.ptupuagrDepartamento);

        this.ptupuagrMunicipio.nameInRequest = 'pt_p_agrmunicipio';
        this.ptupuagrMunicipio.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_agrMunicipio',
            'Municipio');
        this.ptupuagrMunicipio.mandatory = false;
        this.ptupuagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipio.maxLength = 150;
        this.ptupuagrMunicipio.assignCSS();
        this.fields.push(this.ptupuagrMunicipio);

        this.ptupuatrDireccionCompleta.nameInRequest = 'pt_p_atrdireccioncompleta';
        this.ptupuatrDireccionCompleta.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_atrDireccionCompleta',
            'Dirección completa');
        this.ptupuatrDireccionCompleta.mandatory = false;
        this.ptupuatrDireccionCompleta.dataType = Field.dtString;
        this.ptupuatrDireccionCompleta.maxLength = 250;
        this.ptupuatrDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuatrDireccionCompleta);

        this.ptupuatrRural.nameInRequest = 'pt_p_atrrural';
        this.ptupuatrRural.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_atrRural',
            'Rural');
        this.ptupuatrRural.mandatory = true;
        this.ptupuatrRural.dataType = Field.dtBool;
        this.ptupuatrRural.options = DefinedSelections.DS_SINO;
        this.ptupuatrRural.assignCSS();
        this.fields.push(this.ptupuatrRural);

        this.ptupuatrTelefonoFijo.nameInRequest = 'pt_p_atrtelefonofijo';
        this.ptupuatrTelefonoFijo.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_atrTelefonoFijo',
            'Teléfono Fijo');
        this.ptupuatrTelefonoFijo.mandatory = false;
        this.ptupuatrTelefonoFijo.dataType = Field.dtString;
        this.ptupuatrTelefonoFijo.maxLength = 15;
        this.ptupuatrTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuatrTelefonoFijo);

        this.ptupuatrTelefonoCelular.nameInRequest = 'pt_p_atrtelefonocelular';
        this.ptupuatrTelefonoCelular.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_atrTelefonoCelular',
            'Telefono Celular');
        this.ptupuatrTelefonoCelular.mandatory = false;
        this.ptupuatrTelefonoCelular.dataType = Field.dtString;
        this.ptupuatrTelefonoCelular.maxLength = 15;
        this.ptupuatrTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuatrTelefonoCelular);

        this.ptupuatrCorreoElectronico.nameInRequest = 'pt_p_atrcorreoelectronico';
        this.ptupuatrCorreoElectronico.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TSETDIRCORR_inArg_pt_p_atrCorreoElectronico',
            'Correo electrónico');
        this.ptupuatrCorreoElectronico.mandatory = false;
        this.ptupuatrCorreoElectronico.dataType = Field.dtString;
        this.ptupuatrCorreoElectronico.maxLength = 100;
        this.ptupuatrCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuatrCorreoElectronico);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrRural
            const defValptupuatrRural = new Promise<void>((resolveDefValue) => {
                this.ptupuatrRural.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrRural);

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
            ['FamiliaNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFamiliaNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', true);
            this.puthisFamiliaNovedad.enabled = false;
            this.executeDependecyRulesputhisfamilianovedad('SetEnabled', true);
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
            if (lastRole === 'Pais') {
                this.ptupuagrPais.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrpais('SetValue', true);
                this.ptupuagrPais.enabled = false;
                this.executeDependecyRulesptupuagrpais('SetEnabled', true);
            }
            if (lastRole === 'Departamento') {
                this.ptupuagrDepartamento.setValue(lastRoleOid);
                this.ptupuagrDepartamento.enabled = false;
                this.loadPreloadptupuagrmunicipio();
            }
            if (lastRole === 'Municipio') {
                this.ptupuagrMunicipio.setValue(lastRoleOid);
                this.ptupuagrMunicipio.enabled = false;
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamento.loadPreload([]);
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
     * Search the preload values of field pt_p_agrMunicipio
     */
    private loadPreloadptupuagrmunicipio(): void {

        if (this.ptupuagrDepartamento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('FamiliaNovedad_TSETDIRCORR_pt_p_agrMunicipio_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipio.cleanPreload();
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFamiliaNovedad'.toLowerCase()) {
            this.puthisFamiliaNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPais'.toLowerCase()) {
            this.ptupuagrPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrpais('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFamiliaNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisfamilianovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisfamilianovedad();
        }
        if ('SetValue' === event && this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisFamiliaNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFamiliaNovedad argument
     */
    private setSuppInfoputhisfamilianovedad(): void {

        const displaySetIC = 'NumFamilia';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Familianovedad.name,
                            value.oid, displaySetIC, [Field.dtNat]);
                    }
                }
                this.setOidFieldsValueputhisFamiliaNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFamiliaNovedad,
                'novedadmd.departamento.Codigo,novedadmd.municipio.Codigo,novedadmd.direccioncompleta,novedadmd.telefonocelular' +
                ',novedadmd.telefonofijo,novedadmd.pais.Codigo,novedadmd.correoelectronico,novedadmd.rural');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisFamiliaNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedadActions(): void {
        const varputhisfamilianovedad = this.getFirstInstanceFromCache(this.puthisFamiliaNovedad);
        // v <> NULL
        if (varputhisfamilianovedad && !this.util.isNull(varputhisfamilianovedad)) {
            // pt_p_agrDepartamento.SetValue( v.NovedadMD.Departamento )
            this.ptupuagrDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhisfamilianovedad.get('novedadmd.departamento.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrMunicipio.SetValue( v.NovedadMD.Municipio )
            this.ptupuagrMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhisfamilianovedad.get('novedadmd.municipio.Codigo'))));
            // pt_p_atrDireccionCompleta.SetValue( v.NovedadMD.DireccionCompleta )
            this.ptupuatrDireccionCompleta.setValue(varputhisfamilianovedad.get('novedadmd.direccioncompleta'));
            // pt_p_atrTelefonoCelular.SetValue( v.NovedadMD.TelefonoCelular )
            this.ptupuatrTelefonoCelular.setValue(varputhisfamilianovedad.get('novedadmd.telefonocelular'));
            // pt_p_atrTelefonoFijo.SetValue( v.NovedadMD.TelefonoFijo )
            this.ptupuatrTelefonoFijo.setValue(varputhisfamilianovedad.get('novedadmd.telefonofijo'));
            // pt_p_agrPais.SetValue( v.NovedadMD.Pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhisfamilianovedad.get('novedadmd.pais.Codigo')));
            this.executeDependecyRulesptupuagrpais('SetValue', true);
            // pt_p_agrPais.SetVisible( FALSE )
            this.ptupuagrPais.visible = false;
            // pt_p_atrCorreoElectronico.SetValue( v.NovedadMD.CorreoElectronico )
            this.ptupuatrCorreoElectronico.setValue(varputhisfamilianovedad.get('novedadmd.correoelectronico'));
            // pt_p_atrRural.SetValue( v.NovedadMD.Rural )
            this.ptupuatrRural.setValue(this.util.getBool(varputhisfamilianovedad.get('novedadmd.rural')));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisFamiliaNovedad lense argument
    */
    private setOidFieldsValueputhisFamiliaNovedad(): void {
        if (this.puthisFamiliaNovedad.getSelectedInstances().length > 0) {
            if (this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
                this.puthisFamiliaNovedad.oidFields = [null];
                this.puthisFamiliaNovedad.editorsEnabled = false;
                this.puthisFamiliaNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisFamiliaNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisFamiliaNovedad.editorsEnabled = true;
                this.puthisFamiliaNovedad.oidFields[0] = this.puthisFamiliaNovedad.getSelectedInstances()[0].oid.id_familianovedad;
                this.puthisFamiliaNovedad.supplementaryInfo = this.puthisFamiliaNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisFamiliaNovedad.oidFields = Array(1);
            this.puthisFamiliaNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisFamiliaNovedad lense argument
     */
    public onputhisfamilianovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisFamiliaNovedad.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisFamiliaNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_familianovedad: this.puthisFamiliaNovedad.oidFields[0]
            };
            this.puthisFamiliaNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, oid,
                'NumFamilia');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisFamiliaNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Familianovedad.name, value.oid)) {
                        this.puthisFamiliaNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisFamiliaNovedad.alias));
                        this.puthisFamiliaNovedad.cleanSelectedInstances();
                        this.puthisFamiliaNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisFamiliaNovedad argument value
     */
    public cleanputhisfamilianovedad(): void {
        this.clearValidationMessages();
        this.puthisFamiliaNovedad.clean();
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrpais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrpais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrPais argument
     */
    private setSuppInfoptupuagrpais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the pt_p_agrPais lense search argument
     */
    public onptupuagrpaisChange(): void {
        this.executeLenseSearch(this.ptupuagrPais, ModelConstants.Pais.name, 'IC_Pais',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanptupuagrpais();
            }
            if (foundInstances === 1) {
                this.processptupuagrpaisSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrPais lense search argument
     */
    public processptupuagrpaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrPais.searchResults.length > index) {
            selectedInstance = this.ptupuagrPais.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrPais.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrPais.allowMultiSelect) {
                this.ptupuagrPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrPais.addInstances(selectedInstance);
        }
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrPais lense search argument
     */
    public cleanptupuagrpais(): void {
        this.clearValidationMessages();
        this.ptupuagrPais.clean();
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrDepartamento argument
     */
    public onptupuagrdepartamentoChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFamiliaNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFamiliaNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FamiliaNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
