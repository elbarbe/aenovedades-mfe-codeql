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
    selector: 'imes-familianovedad-siu-tmodificarmanual',
    templateUrl: './siu_tmodificarmanual.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTMODIFICARMANUALComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFamiliaNovedad: FieldOVLense;
    public ptupuNumFamilia: Field;
    public ptupuTitNumidentificacion: Field;
    public ptupuTitPrimerNombre: Field;
    public ptupuTitSegundoNombre: Field;
    public ptupuTitPrimerApellido: Field;
    public ptupuTitSegundoApellido: Field;
    public ptupuTitRazonSocial: Field;
    public ptTipoIdentificacion: FieldOVPreload;

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
        this.idXML = 'Clas_1581424574464890Ser_27UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutmodificarmanual;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Asesor']));
        this.serviceName = 'TMODIFICARMANUAL';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TMODIFICARMANUAL',
            'Modificar');

        // Create inbound argument components
        this.puthisFamiliaNovedad = new FieldOVLense(this.langMng);
        this.ptupuNumFamilia = new Field(this.langMng);
        this.ptupuTitNumidentificacion = new Field(this.langMng);
        this.ptupuTitPrimerNombre = new Field(this.langMng);
        this.ptupuTitSegundoNombre = new Field(this.langMng);
        this.ptupuTitPrimerApellido = new Field(this.langMng);
        this.ptupuTitSegundoApellido = new Field(this.langMng);
        this.ptupuTitRazonSocial = new Field(this.langMng);
        this.ptTipoIdentificacion = new FieldOVPreload(this.langMng);

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
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_p_thisFamiliaNovedad',
            'Familia');
        this.puthisFamiliaNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFamiliaNovedad.mandatory = true;
        this.puthisFamiliaNovedad.dataType = ModelConstants.Familianovedad.name;
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.puthisFamiliaNovedad.oidFieldsTypes = [Field.dtAuto];
        this.puthisFamiliaNovedad.assignCSS();
        this.fields.push(this.puthisFamiliaNovedad);

        this.ptupuNumFamilia.nameInRequest = 'pt_p_numfamilia';
        this.ptupuNumFamilia.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_NumFamilia',
            'Nº Familia');
        this.ptupuNumFamilia.mandatory = true;
        this.ptupuNumFamilia.dataType = Field.dtNat;
        this.ptupuNumFamilia.assignCSS();
        this.fields.push(this.ptupuNumFamilia);

        this.ptupuTitNumidentificacion.nameInRequest = 'pt_p_titnumidentificacion';
        this.ptupuTitNumidentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitNumidentificacion',
            'Nº Identificación');
        this.ptupuTitNumidentificacion.mandatory = true;
        this.ptupuTitNumidentificacion.dataType = Field.dtString;
        this.ptupuTitNumidentificacion.maxLength = 60;
        this.ptupuTitNumidentificacion.assignCSS();
        this.fields.push(this.ptupuTitNumidentificacion);

        this.ptupuTitPrimerNombre.nameInRequest = 'pt_p_titprimernombre';
        this.ptupuTitPrimerNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitPrimerNombre',
            'Primer Nombre');
        this.ptupuTitPrimerNombre.mandatory = false;
        this.ptupuTitPrimerNombre.dataType = Field.dtString;
        this.ptupuTitPrimerNombre.maxLength = 50;
        this.ptupuTitPrimerNombre.assignCSS();
        this.fields.push(this.ptupuTitPrimerNombre);

        this.ptupuTitSegundoNombre.nameInRequest = 'pt_p_titsegundonombre';
        this.ptupuTitSegundoNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitSegundoNombre',
            'Segundo Nombre');
        this.ptupuTitSegundoNombre.mandatory = false;
        this.ptupuTitSegundoNombre.dataType = Field.dtString;
        this.ptupuTitSegundoNombre.maxLength = 50;
        this.ptupuTitSegundoNombre.assignCSS();
        this.fields.push(this.ptupuTitSegundoNombre);

        this.ptupuTitPrimerApellido.nameInRequest = 'pt_p_titprimerapellido';
        this.ptupuTitPrimerApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitPrimerApellido',
            'Primer Apellido');
        this.ptupuTitPrimerApellido.mandatory = false;
        this.ptupuTitPrimerApellido.dataType = Field.dtString;
        this.ptupuTitPrimerApellido.maxLength = 50;
        this.ptupuTitPrimerApellido.assignCSS();
        this.fields.push(this.ptupuTitPrimerApellido);

        this.ptupuTitSegundoApellido.nameInRequest = 'pt_p_titsegundoapellido';
        this.ptupuTitSegundoApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitSegundoApellido',
            'Segundo Apellido');
        this.ptupuTitSegundoApellido.mandatory = false;
        this.ptupuTitSegundoApellido.dataType = Field.dtString;
        this.ptupuTitSegundoApellido.maxLength = 50;
        this.ptupuTitSegundoApellido.assignCSS();
        this.fields.push(this.ptupuTitSegundoApellido);

        this.ptupuTitRazonSocial.nameInRequest = 'pt_p_titrazonsocial';
        this.ptupuTitRazonSocial.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_TitRazonSocial',
            'Razón Social');
        this.ptupuTitRazonSocial.mandatory = false;
        this.ptupuTitRazonSocial.dataType = Field.dtString;
        this.ptupuTitRazonSocial.maxLength = 200;
        this.ptupuTitRazonSocial.assignCSS();
        this.fields.push(this.ptupuTitRazonSocial);

        this.ptTipoIdentificacion.nameInRequest = 'pttipoidentificacion';
        this.ptTipoIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL_inArg_ptTipoIdentificacion',
            'Tipo Identificación');
        this.ptTipoIdentificacion.mandatory = true;
        this.ptTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptTipoIdentificacion.maxLength = 170;
        this.ptTipoIdentificacion.assignCSS();
        this.fields.push(this.ptTipoIdentificacion);
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
            if (lastRole === 'TipoIdentificacion') {
                this.ptTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulespttipoidentificacion('SetValue', true);
                this.ptTipoIdentificacion.enabled = false;
                this.executeDependecyRulespttipoidentificacion('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptTipoIdentificacion.loadPreload([]);
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
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFamiliaNovedad'.toLowerCase()) {
            this.puthisFamiliaNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
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
                'numfamilia,titnumidentificacion,titprimernombre,titsegundonombre,titprimerapellido,titsegundoapellido,titrazonsocial');
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
            // p_thisFamiliaNovedad.SetVisible( FALSE )
            this.puthisFamiliaNovedad.visible = false;
            // pt_p_NumFamilia.SetValue( v.numfamilia )
            this.ptupuNumFamilia.setValue(this.util.getInt(varputhisfamilianovedad.get('numfamilia')));
            // pt_p_TitNumidentificacion.SetValue( v.titnumidentificacion )
            this.ptupuTitNumidentificacion.setValue(varputhisfamilianovedad.get('titnumidentificacion'));
            // pt_p_TitPrimerNombre.SetValue( v.titprimernombre )
            this.ptupuTitPrimerNombre.setValue(varputhisfamilianovedad.get('titprimernombre'));
            // pt_p_TitSegundoNombre.SetValue( v.titsegundonombre )
            this.ptupuTitSegundoNombre.setValue(varputhisfamilianovedad.get('titsegundonombre'));
            // pt_p_TitPrimerApellido.SetValue( v.titprimerapellido )
            this.ptupuTitPrimerApellido.setValue(varputhisfamilianovedad.get('titprimerapellido'));
            // pt_p_TitSegundoApellido.SetValue( v.titsegundoapellido )
            this.ptupuTitSegundoApellido.setValue(varputhisfamilianovedad.get('titsegundoapellido'));
            // pt_p_TitRazonSocial.SetValue( v.titrazonsocial )
            this.ptupuTitRazonSocial.setValue(varputhisfamilianovedad.get('titrazonsocial'));
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
            if (this.util.isNull(field)) {
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
     * Evaluate dependendy rules for ptTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulespttipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptTipoIdentificacion argument
     */
    private executeDependecyRules1ptTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptTipoIdentificacion argument
     */
    private executeDependecyRules1ptTipoIdentificacionActions(): void {
        const varpttipoidentificacion = this.getFirstInstanceFromCache(this.ptTipoIdentificacion);
        // v <> NULL AND v.nit = true
        if (varpttipoidentificacion && !this.util.isNull(varpttipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varpttipoidentificacion.get('nit')), true)) {
            // pt_p_TitPrimerApellido.SetValue( NULL )
            this.ptupuTitPrimerApellido.setValue(null);
            // pt_p_TitPrimerNombre.SetValue( NULL )
            this.ptupuTitPrimerNombre.setValue(null);
            // pt_p_TitSegundoApellido.SetValue( NULL )
            this.ptupuTitSegundoApellido.setValue(null);
            // pt_p_TitSegundoNombre.SetValue( NULL )
            this.ptupuTitSegundoNombre.setValue(null);
            // pt_p_TitPrimerApellido.SetActive( FALSE )
            this.ptupuTitPrimerApellido.enabled = false;
            // pt_p_TitPrimerNombre.SetActive( FALSE )
            this.ptupuTitPrimerNombre.enabled = false;
            // pt_p_TitSegundoApellido.SetActive( FALSE )
            this.ptupuTitSegundoApellido.enabled = false;
            // pt_p_TitSegundoNombre.SetActive( FALSE )
            this.ptupuTitSegundoNombre.enabled = false;
            // pt_p_TitRazonSocial.SetActive( TRUE )
            this.ptupuTitRazonSocial.enabled = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptTipoIdentificacion argument
     */
    private executeDependecyRules2ptTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptTipoIdentificacion argument
     */
    private executeDependecyRules2ptTipoIdentificacionActions(): void {
        const varpttipoidentificacion = this.getFirstInstanceFromCache(this.ptTipoIdentificacion);
        // v <> NULL AND v.nit = false
        if (varpttipoidentificacion && !this.util.isNull(varpttipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varpttipoidentificacion.get('nit')), false)) {
            // pt_p_TitPrimerApellido.SetActive( TRUE )
            this.ptupuTitPrimerApellido.enabled = true;
            // pt_p_TitPrimerNombre.SetActive( TRUE )
            this.ptupuTitPrimerNombre.enabled = true;
            // pt_p_TitSegundoApellido.SetActive( TRUE )
            this.ptupuTitSegundoApellido.enabled = true;
            // pt_p_TitSegundoNombre.SetActive( TRUE )
            this.ptupuTitSegundoNombre.enabled = true;
            // pt_p_TitRazonSocial.SetActive( FALSE )
            this.ptupuTitRazonSocial.enabled = false;
            // pt_p_TitRazonSocial.SetValue( NULL )
            this.ptupuTitRazonSocial.setValue(null);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptTipoIdentificacion argument
     */
    public onpttipoidentificacionChange(): void {
        this.executeDependecyRulespttipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
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
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '2') {
            isVisible = this.ptTipoIdentificacion.visible ||
                this.ptupuTitNumidentificacion.visible ||
                this.ptupuTitPrimerNombre.visible ||
                this.ptupuTitSegundoNombre.visible ||
                this.ptupuTitPrimerApellido.visible ||
                this.ptupuTitSegundoApellido.visible ||
                this.ptupuTitRazonSocial.visible;
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
