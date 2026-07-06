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
    selector: 'imes-familianovedad-siu-tcrearusumanual',
    templateUrl: './siu_tcrearusumanual.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTCREARUSUMANUALComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFamiliaNovedad: FieldOVLense;
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuagrParentesco: FieldOVPreload;
    public ptupuatrNumIdentificacion: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuatrFechaNacimiento: Field;
    public ptupuatrGenero: FieldDefinedSelection;

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
        this.idXML = 'Clas_1581424574464890Ser_28UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutcrearusumanual;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['SuperAdmin', 'Asesor']));
        this.serviceName = 'TCREARUSUMANUAL';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TCREARUSUMANUAL',
            'Añadir usuario');

        // Create inbound argument components
        this.puthisFamiliaNovedad = new FieldOVLense(this.langMng);
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuagrParentesco = new FieldOVPreload(this.langMng);
        this.ptupuatrNumIdentificacion = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuatrFechaNacimiento = new Field(this.langMng);
        this.ptupuatrGenero = new FieldDefinedSelection(this.langMng);

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
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_p_thisFamiliaNovedad',
            'Familia');
        this.puthisFamiliaNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFamiliaNovedad.mandatory = true;
        this.puthisFamiliaNovedad.dataType = ModelConstants.Familianovedad.name;
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.puthisFamiliaNovedad.oidFieldsTypes = [Field.dtAuto];
        this.puthisFamiliaNovedad.assignCSS();
        this.fields.push(this.puthisFamiliaNovedad);

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_agrTipoIdentificacion',
            'Tipo Identificacion');
        this.ptupuagrTipoIdentificacion.mandatory = false;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuagrParentesco.nameInRequest = 'pt_p_agrparentesco';
        this.ptupuagrParentesco.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_agrParentesco',
            'Parentesco');
        this.ptupuagrParentesco.mandatory = false;
        this.ptupuagrParentesco.dataType = ModelConstants.Parentesco.name;
        this.ptupuagrParentesco.maxLength = 100;
        this.ptupuagrParentesco.assignCSS();
        this.fields.push(this.ptupuagrParentesco);

        this.ptupuatrNumIdentificacion.nameInRequest = 'pt_p_atrnumidentificacion';
        this.ptupuatrNumIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrNumIdentificacion',
            'Nº Identificación');
        this.ptupuatrNumIdentificacion.mandatory = true;
        this.ptupuatrNumIdentificacion.dataType = Field.dtString;
        this.ptupuatrNumIdentificacion.maxLength = 60;
        this.ptupuatrNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuatrNumIdentificacion);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrPrimerNombre',
            'Primer Nombre');
        this.ptupuatrPrimerNombre.mandatory = false;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrSegundoNombre',
            'Segundo Nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrPrimerApellido',
            'Primer Apellido');
        this.ptupuatrPrimerApellido.mandatory = false;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrSegundoApellido',
            'Segundo Apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuatrFechaNacimiento.nameInRequest = 'pt_p_atrfechanacimiento';
        this.ptupuatrFechaNacimiento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrFechaNacimiento',
            'Fecha Nacimiento');
        this.ptupuatrFechaNacimiento.mandatory = false;
        this.ptupuatrFechaNacimiento.dataType = Field.dtDate;
        this.ptupuatrFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuatrFechaNacimiento);

        this.ptupuatrGenero.nameInRequest = 'pt_p_atrgenero';
        this.ptupuatrGenero.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARUSUMANUAL_inArg_pt_p_atrGenero',
            'Género');
        this.ptupuatrGenero.mandatory = false;
        this.ptupuatrGenero.dataType = Field.dtString;
        this.ptupuatrGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuatrGenero.maxLength = 1;
        this.ptupuatrGenero.assignCSS();
        this.fields.push(this.ptupuatrGenero);
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
                this.ptupuagrTipoIdentificacion.setValue(lastRoleOid);
                this.ptupuagrTipoIdentificacion.enabled = false;
            }
            if (lastRole === 'Parentesco') {
                this.ptupuagrParentesco.setValue(lastRoleOid);
                this.ptupuagrParentesco.enabled = false;
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

        // ptupuagrParentesco
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Parentesco', 'IC_Parentesco', [], null, 'OC_Parentesco').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrParentesco.loadPreload(response.results);
                } else {
                    this.ptupuagrParentesco.loadPreload([]);
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
}
