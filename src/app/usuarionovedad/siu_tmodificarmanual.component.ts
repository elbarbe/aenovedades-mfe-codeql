import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVPreload } from '../common/baseIUElements';
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
    selector: 'imes-usuarionovedad-siu-tmodificarmanual',
    templateUrl: './siu_tmodificarmanual.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsuarioNovedadSIUuTMODIFICARMANUALComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisUsuarioNovedad: FieldOVLense;
    public ptupuNumIdentificacion: Field;
    public ptupuPrimerNombre: Field;
    public ptupuSegundoNombre: Field;
    public ptupuPrimerApellido: Field;
    public ptupuSegundoApellido: Field;
    public ptupuGenero: FieldDefinedSelection;
    public ptupuFechaNacimiento: Field;
    public ptTipoIdentificacion: FieldOVPreload;
    public ptParentesco: FieldOVPreload;

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
        this.idXML = 'Clas_1581442138112529Ser_31UIServ_1';
        this.className = ModelConstants.Usuarionovedad.name;
        this.iuName = ModelConstants.Usuarionovedad.siuutmodificarmanual;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Asesor']));
        this.serviceName = 'TMODIFICARMANUAL';
        this.title = this.langMng.translateText('cls_UsuarioNovedad_svc_TMODIFICARMANUAL',
            'Modificar');

        // Create inbound argument components
        this.puthisUsuarioNovedad = new FieldOVLense(this.langMng);
        this.ptupuNumIdentificacion = new Field(this.langMng);
        this.ptupuPrimerNombre = new Field(this.langMng);
        this.ptupuSegundoNombre = new Field(this.langMng);
        this.ptupuPrimerApellido = new Field(this.langMng);
        this.ptupuSegundoApellido = new Field(this.langMng);
        this.ptupuGenero = new FieldDefinedSelection(this.langMng);
        this.ptupuFechaNacimiento = new Field(this.langMng);
        this.ptTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptParentesco = new FieldOVPreload(this.langMng);

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
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_p_thisUsuarioNovedad',
            'Usuario');
        this.puthisUsuarioNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisUsuarioNovedad.mandatory = true;
        this.puthisUsuarioNovedad.dataType = ModelConstants.Usuarionovedad.name;
        this.puthisUsuarioNovedad.oidFields = Array(1);
        this.puthisUsuarioNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisUsuarioNovedad.assignCSS();
        this.fields.push(this.puthisUsuarioNovedad);

        this.ptupuNumIdentificacion.nameInRequest = 'pt_p_numidentificacion';
        this.ptupuNumIdentificacion.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_NumIdentificacion',
            'Nº Identificación');
        this.ptupuNumIdentificacion.mandatory = true;
        this.ptupuNumIdentificacion.dataType = Field.dtString;
        this.ptupuNumIdentificacion.maxLength = 60;
        this.ptupuNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuNumIdentificacion);

        this.ptupuPrimerNombre.nameInRequest = 'pt_p_primernombre';
        this.ptupuPrimerNombre.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_PrimerNombre',
            'Primer Nombre');
        this.ptupuPrimerNombre.mandatory = false;
        this.ptupuPrimerNombre.dataType = Field.dtString;
        this.ptupuPrimerNombre.maxLength = 50;
        this.ptupuPrimerNombre.assignCSS();
        this.fields.push(this.ptupuPrimerNombre);

        this.ptupuSegundoNombre.nameInRequest = 'pt_p_segundonombre';
        this.ptupuSegundoNombre.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_SegundoNombre',
            'Segundo Nombre');
        this.ptupuSegundoNombre.mandatory = false;
        this.ptupuSegundoNombre.dataType = Field.dtString;
        this.ptupuSegundoNombre.maxLength = 50;
        this.ptupuSegundoNombre.assignCSS();
        this.fields.push(this.ptupuSegundoNombre);

        this.ptupuPrimerApellido.nameInRequest = 'pt_p_primerapellido';
        this.ptupuPrimerApellido.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_PrimerApellido',
            'Primer Apellido');
        this.ptupuPrimerApellido.mandatory = false;
        this.ptupuPrimerApellido.dataType = Field.dtString;
        this.ptupuPrimerApellido.maxLength = 50;
        this.ptupuPrimerApellido.assignCSS();
        this.fields.push(this.ptupuPrimerApellido);

        this.ptupuSegundoApellido.nameInRequest = 'pt_p_segundoapellido';
        this.ptupuSegundoApellido.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_SegundoApellido',
            'Segundo Apellido');
        this.ptupuSegundoApellido.mandatory = false;
        this.ptupuSegundoApellido.dataType = Field.dtString;
        this.ptupuSegundoApellido.maxLength = 50;
        this.ptupuSegundoApellido.assignCSS();
        this.fields.push(this.ptupuSegundoApellido);

        this.ptupuGenero.nameInRequest = 'pt_p_genero';
        this.ptupuGenero.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_Genero',
            'Género');
        this.ptupuGenero.mandatory = false;
        this.ptupuGenero.dataType = Field.dtString;
        this.ptupuGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuGenero.maxLength = 1;
        this.ptupuGenero.assignCSS();
        this.fields.push(this.ptupuGenero);

        this.ptupuFechaNacimiento.nameInRequest = 'pt_p_fechanacimiento';
        this.ptupuFechaNacimiento.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_pt_p_FechaNacimiento',
            'Fecha Nacimiento');
        this.ptupuFechaNacimiento.mandatory = false;
        this.ptupuFechaNacimiento.dataType = Field.dtDate;
        this.ptupuFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuFechaNacimiento);

        this.ptTipoIdentificacion.nameInRequest = 'pttipoidentificacion';
        this.ptTipoIdentificacion.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_ptTipoIdentificacion',
            'Tipo identificación');
        this.ptTipoIdentificacion.mandatory = true;
        this.ptTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptTipoIdentificacion.maxLength = 170;
        this.ptTipoIdentificacion.assignCSS();
        this.fields.push(this.ptTipoIdentificacion);

        this.ptParentesco.nameInRequest = 'ptparentesco';
        this.ptParentesco.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL_inArg_ptParentesco',
            'Parentesco');
        this.ptParentesco.mandatory = true;
        this.ptParentesco.dataType = ModelConstants.Parentesco.name;
        this.ptParentesco.maxLength = 100;
        this.ptParentesco.assignCSS();
        this.fields.push(this.ptParentesco);
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
            if (lastRole === 'TipoIdentificacion') {
                this.ptTipoIdentificacion.setValue(lastRoleOid);
                this.ptTipoIdentificacion.enabled = false;
            }
            if (lastRole === 'Parentesco') {
                this.ptParentesco.setValue(lastRoleOid);
                this.ptParentesco.enabled = false;
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

        // ptParentesco
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Parentesco', 'IC_Parentesco', [], null, 'OC_Parentesco').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptParentesco.loadPreload(response.results);
                } else {
                    this.ptParentesco.loadPreload([]);
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
                'numidentificacion,primernombre,segundonombre,primerapellido,segundoapellido,genero,fechanacimiento' +
                ',tipoidentificacion.Codigo,parentesco.Codigo');
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
            // pt_p_NumIdentificacion.SetValue( v.numidentificacion )
            this.ptupuNumIdentificacion.setValue(varputhisusuarionovedad.get('numidentificacion'));
            // pt_p_PrimerNombre.SetValue( v.primernombre )
            this.ptupuPrimerNombre.setValue(varputhisusuarionovedad.get('primernombre'));
            // pt_p_SegundoNombre.SetValue( v.segundonombre )
            this.ptupuSegundoNombre.setValue(varputhisusuarionovedad.get('segundonombre'));
            // pt_p_PrimerApellido.SetValue( v.primerapellido )
            this.ptupuPrimerApellido.setValue(varputhisusuarionovedad.get('primerapellido'));
            // pt_p_SegundoApellido.SetValue( v.segundoapellido )
            this.ptupuSegundoApellido.setValue(varputhisusuarionovedad.get('segundoapellido'));
            // pt_p_Genero.SetValue( v.genero )
            this.ptupuGenero.setValue(varputhisusuarionovedad.get('genero'));
            // pt_p_FechaNacimiento.SetValue( v.fechanacimiento )
            this.ptupuFechaNacimiento.setValue(this.util.getDate(varputhisusuarionovedad.get('fechanacimiento')));
            // ptTipoIdentificacion.SetValue( v.tipoidentificacion )
            this.ptTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varputhisusuarionovedad.get('tipoidentificacion.Codigo'))));
            // ptParentesco.SetValue( v.parentesco )
            this.ptParentesco.setValue(this.util.oidBuilder.buildOidParentesco(
                this.util.getInt(varputhisusuarionovedad.get('parentesco.Codigo'))));
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
            if (!field) {
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
