import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field, FieldBlob, FieldDefinedSelection } from '../common/baseIUElements';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_SolNovTipoUsuario of SolicitudNovedad »
 */
import { SolicitudNovedadMDIUuSolNovTipoUsuarioComponent } from './mdiu_solnovtipousuario.component';

export class SolicitudNovedadIIUuSolNovTipoUsuarioComponent extends AbstractIIU {

    /** Display Set elements */
    public dseDrvNumRadicadoStr: Field;
    public dsePlanTProductoTDescripcion: Field;
    public dsePlanTNombre: Field;
    public dseNumContrato: Field;
    public dseEstadoContratoDescripcion: Field;
    public dseCtrTagCausaExclusion: Field;
    public dseDrvTarifa: Field;
    public dseDrvConvenio: Field;
    public dseDrvGrupoAsociado: Field;
    public dseDrvPeriodicidad: Field;
    public dseNovedadDrvTextoMostrar: Field;
    public dseCausalDrvTextoMostrar: Field;
    public dseFirmaImagenFirma: FieldBlob;
    public dseCompletada: FieldDefinedSelection;
    public dseDrvPermiteAddFam: FieldDefinedSelection;
    public dseDrvPermiteDelFam: FieldDefinedSelection;
    public dseNovedadAliasNovedad: Field;

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
        this.idXML = 'Clas_1581421428736234UIInst_5';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_iiu_IIU_SolNovTipoUsuario',
            'Solicitud de Novedad');
        this.queryURL = '/api/SolicitudNovedadApi/GetPopulationDynamic';

        this.dseDrvNumRadicadoStr = new Field(this.langMng);
        this.dsePlanTProductoTDescripcion = new Field(this.langMng);
        this.dsePlanTNombre = new Field(this.langMng);
        this.dseNumContrato = new Field(this.langMng);
        this.dseEstadoContratoDescripcion = new Field(this.langMng);
        this.dseCtrTagCausaExclusion = new Field(this.langMng);
        this.dseDrvTarifa = new Field(this.langMng);
        this.dseDrvConvenio = new Field(this.langMng);
        this.dseDrvGrupoAsociado = new Field(this.langMng);
        this.dseDrvPeriodicidad = new Field(this.langMng);
        this.dseNovedadDrvTextoMostrar = new Field(this.langMng);
        this.dseCausalDrvTextoMostrar = new Field(this.langMng);
        this.dseFirmaImagenFirma = new FieldBlob(this.langMng);
        this.dseCompletada = new FieldDefinedSelection(this.langMng);
        this.dseDrvPermiteAddFam = new FieldDefinedSelection(this.langMng);
        this.dseDrvPermiteDelFam = new FieldDefinedSelection(this.langMng);
        this.dseNovedadAliasNovedad = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseDrvNumRadicadoStr.nameInRequest = 'drvnumradicadostr';
        this.dseDrvNumRadicadoStr.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_15',
            'Nº Solicitud');
        this.dseDrvNumRadicadoStr.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_15', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvNumRadicadoStr.enabled = false;
        this.dseDrvNumRadicadoStr.mandatory = false;
        this.dseDrvNumRadicadoStr.dataType = Field.dtString;
        this.dseDrvNumRadicadoStr.maxLength = 20;
        this.dseDrvNumRadicadoStr.assignCSS();
        this.fields.push(this.dseDrvNumRadicadoStr);

        this.dsePlanTProductoTDescripcion.nameInRequest = 'plant.productot.descripcion';
        this.dsePlanTProductoTDescripcion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_2',
            'Producto');
        this.dsePlanTProductoTDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_2', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePlanTProductoTDescripcion.enabled = false;
        this.dsePlanTProductoTDescripcion.mandatory = false;
        this.dsePlanTProductoTDescripcion.dataType = Field.dtString;
        this.dsePlanTProductoTDescripcion.maxLength = 100;
        this.dsePlanTProductoTDescripcion.assignCSS();
        this.fields.push(this.dsePlanTProductoTDescripcion);

        this.dsePlanTNombre.nameInRequest = 'plant.nombre';
        this.dsePlanTNombre.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_3',
            'Plan');
        this.dsePlanTNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePlanTNombre.enabled = false;
        this.dsePlanTNombre.mandatory = false;
        this.dsePlanTNombre.dataType = Field.dtString;
        this.dsePlanTNombre.maxLength = 150;
        this.dsePlanTNombre.assignCSS();
        this.fields.push(this.dsePlanTNombre);

        this.dseNumContrato.nameInRequest = 'numcontrato';
        this.dseNumContrato.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_4',
            'Nº Contrato');
        this.dseNumContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_4', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNumContrato.enabled = false;
        this.dseNumContrato.mandatory = false;
        this.dseNumContrato.dataType = Field.dtString;
        this.dseNumContrato.maxLength = 50;
        this.dseNumContrato.assignCSS();
        this.fields.push(this.dseNumContrato);

        this.dseEstadoContratoDescripcion.nameInRequest = 'estadocontrato.descripcion';
        this.dseEstadoContratoDescripcion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_5',
            'Estado contrato');
        this.dseEstadoContratoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_5', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseEstadoContratoDescripcion.enabled = false;
        this.dseEstadoContratoDescripcion.mandatory = false;
        this.dseEstadoContratoDescripcion.dataType = Field.dtString;
        this.dseEstadoContratoDescripcion.maxLength = 100;
        this.dseEstadoContratoDescripcion.assignCSS();
        this.fields.push(this.dseEstadoContratoDescripcion);

        this.dseCtrTagCausaExclusion.nameInRequest = 'ctrtagcausaexclusion';
        this.dseCtrTagCausaExclusion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_14',
            'Motivo Estado');
        this.dseCtrTagCausaExclusion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_14', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCtrTagCausaExclusion.enabled = false;
        this.dseCtrTagCausaExclusion.mandatory = false;
        this.dseCtrTagCausaExclusion.dataType = Field.dtString;
        this.dseCtrTagCausaExclusion.maxLength = 100;
        this.dseCtrTagCausaExclusion.assignCSS();
        this.fields.push(this.dseCtrTagCausaExclusion);

        this.dseDrvTarifa.nameInRequest = 'drvtarifa';
        this.dseDrvTarifa.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_7',
            'Tarifa');
        this.dseDrvTarifa.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvTarifa.enabled = false;
        this.dseDrvTarifa.mandatory = false;
        this.dseDrvTarifa.dataType = Field.dtString;
        this.dseDrvTarifa.maxLength = 120;
        this.dseDrvTarifa.assignCSS();
        this.fields.push(this.dseDrvTarifa);

        this.dseDrvConvenio.nameInRequest = 'drvconvenio';
        this.dseDrvConvenio.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_8',
            'Convenio');
        this.dseDrvConvenio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_8', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvConvenio.enabled = false;
        this.dseDrvConvenio.mandatory = false;
        this.dseDrvConvenio.dataType = Field.dtString;
        this.dseDrvConvenio.maxLength = 120;
        this.dseDrvConvenio.assignCSS();
        this.fields.push(this.dseDrvConvenio);

        this.dseDrvGrupoAsociado.nameInRequest = 'drvgrupoasociado';
        this.dseDrvGrupoAsociado.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_9',
            'Grupo Asociado');
        this.dseDrvGrupoAsociado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvGrupoAsociado.enabled = false;
        this.dseDrvGrupoAsociado.mandatory = false;
        this.dseDrvGrupoAsociado.dataType = Field.dtString;
        this.dseDrvGrupoAsociado.maxLength = 220;
        this.dseDrvGrupoAsociado.assignCSS();
        this.fields.push(this.dseDrvGrupoAsociado);

        this.dseDrvPeriodicidad.nameInRequest = 'drvperiodicidad';
        this.dseDrvPeriodicidad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_10',
            'Periodicidad');
        this.dseDrvPeriodicidad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvPeriodicidad.enabled = false;
        this.dseDrvPeriodicidad.mandatory = false;
        this.dseDrvPeriodicidad.dataType = Field.dtString;
        this.dseDrvPeriodicidad.maxLength = 200;
        this.dseDrvPeriodicidad.assignCSS();
        this.fields.push(this.dseDrvPeriodicidad);

        this.dseNovedadDrvTextoMostrar.nameInRequest = 'novedad.drvtextomostrar';
        this.dseNovedadDrvTextoMostrar.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_11',
            'Novedad');
        this.dseNovedadDrvTextoMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNovedadDrvTextoMostrar.enabled = false;
        this.dseNovedadDrvTextoMostrar.mandatory = false;
        this.dseNovedadDrvTextoMostrar.dataType = Field.dtString;
        this.dseNovedadDrvTextoMostrar.maxLength = 60;
        this.dseNovedadDrvTextoMostrar.assignCSS();
        this.fields.push(this.dseNovedadDrvTextoMostrar);

        this.dseCausalDrvTextoMostrar.nameInRequest = 'causal.drvtextomostrar';
        this.dseCausalDrvTextoMostrar.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_12',
            'Causal');
        this.dseCausalDrvTextoMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_12', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCausalDrvTextoMostrar.enabled = false;
        this.dseCausalDrvTextoMostrar.mandatory = false;
        this.dseCausalDrvTextoMostrar.dataType = Field.dtString;
        this.dseCausalDrvTextoMostrar.maxLength = 110;
        this.dseCausalDrvTextoMostrar.assignCSS();
        this.fields.push(this.dseCausalDrvTextoMostrar);

        this.dseFirmaImagenFirma.nameInRequest = 'firma.imagenfirma';
        this.dseFirmaImagenFirma.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_16',
            'Firma');
        this.dseFirmaImagenFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_16', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseFirmaImagenFirma.enabled = false;
        this.dseFirmaImagenFirma.mandatory = false;
        this.dseFirmaImagenFirma.dataType = Field.dtBlob;
        this.dseFirmaImagenFirma.assignCSS();
        this.fields.push(this.dseFirmaImagenFirma);

        this.dseCompletada.nameInRequest = 'completada';
        this.dseCompletada.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_17',
            'Completada');
        this.dseCompletada.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_17', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCompletada.enabled = false;
        this.dseCompletada.mandatory = false;
        this.dseCompletada.dataType = Field.dtBool;
        this.dseCompletada.options = DefinedSelections.DS_SINO;
        this.dseCompletada.assignCSS();
        this.fields.push(this.dseCompletada);

        this.dseDrvPermiteAddFam.nameInRequest = 'drvpermiteaddfam';
        this.dseDrvPermiteAddFam.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_18',
            'Permite añadir familia');
        this.dseDrvPermiteAddFam.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_18', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvPermiteAddFam.enabled = false;
        this.dseDrvPermiteAddFam.mandatory = false;
        this.dseDrvPermiteAddFam.dataType = Field.dtBool;
        this.dseDrvPermiteAddFam.options = DefinedSelections.DS_SINO;
        this.dseDrvPermiteAddFam.assignCSS();
        this.fields.push(this.dseDrvPermiteAddFam);

        this.dseDrvPermiteDelFam.nameInRequest = 'drvpermitedelfam';
        this.dseDrvPermiteDelFam.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_19',
            'Permite quitar familia');
        this.dseDrvPermiteDelFam.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_19', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvPermiteDelFam.enabled = false;
        this.dseDrvPermiteDelFam.mandatory = false;
        this.dseDrvPermiteDelFam.dataType = Field.dtBool;
        this.dseDrvPermiteDelFam.options = DefinedSelections.DS_SINO;
        this.dseDrvPermiteDelFam.assignCSS();
        this.fields.push(this.dseDrvPermiteDelFam);

        this.dseNovedadAliasNovedad.nameInRequest = 'novedad.aliasnovedad';
        this.dseNovedadAliasNovedad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoUsuario_item_Clas_1581421428736234CjtoVis_7ICtjoVis_20',
            'Alias');
        this.dseNovedadAliasNovedad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_7ICtjoVis_20', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNovedadAliasNovedad.enabled = false;
        this.dseNovedadAliasNovedad.mandatory = false;
        this.dseNovedadAliasNovedad.dataType = Field.dtString;
        this.dseNovedadAliasNovedad.maxLength = 2;
        this.dseNovedadAliasNovedad.assignCSS();
        this.fields.push(this.dseNovedadAliasNovedad);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581421428736234AccOfer_4ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoUsuario_item_Clas_1581421428736234AccOfer_4ElemAcc_1',
            'Marcar Completada');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuutmarcarcompletada;
        accItem.setNoShowProperties('TMARCARCOMPLETADA', 'p_thissolicitudnovedad_oid', '', false);
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581421428736234AccOfer_4ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoUsuario_item_Clas_1581421428736234AccOfer_4ElemAcc_2',
            'Nueva solicitud novedad');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Protecciondatos.name;
        accItem.targetUI = ModelConstants.Protecciondatos.siuutcrearsolnovedad;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581421428736234AccOfer_4ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoUsuario_item_Clas_1581421428736234AccOfer_4ElemAcc_6',
            'Firma');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuutfirmar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581421428736234AccOfer_4ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoUsuario_item_Clas_1581421428736234AccOfer_4ElemAcc_7',
            'Ver PDF');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Funcionario.name, ModelConstants.Admin.name, ModelConstants.Superadmin.name,
            ModelConstants.Asesor.name, ModelConstants.Areamedica.name, ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Globalservices.name;
        accItem.targetUI = ModelConstants.Globalservices.siuuogetreportsolnov;
        accItem.setOpenNewWindowProperties('OGETREPORTSOLNOV', 'ptsolicitudnovedad_oid', 'oaarchivo', 'oanombrearchivo');
        this.actions.push(accItem);

    }

    protected override processOutArgumentAndCondNavigation(request: any, response: any, actionItem: AccNavItem, totalExecutions: number, anyError: boolean): void {
        if (actionItem.targetClass === ModelConstants.Solicitudnovedad.name && 
            actionItem.targetUI === ModelConstants.Solicitudnovedad.siuutmarcarcompletada &&
            !anyError) {

            this.processCancel();
        } else {
            super.processOutArgumentAndCondNavigation(request, response, actionItem, totalExecutions, anyError)
        }
    }

    public override setData(data: any): void {
        super.setData(data);

        if (data) {
            this.configurar();
        }
    
    }

    private configurar(): void {

        const aliasNovedad = this.dseNovedadAliasNovedad.value;
        const permiteAddFamiliaDesdeCORE = this.dseDrvPermiteAddFam.value && this.appGlobalInfo.getLoggedUserInfo().userCache?.verContratoNovedad;
        const permiteAddFamiliaManual = this.appGlobalInfo.getLoggedUserInfo().userCache && !this.appGlobalInfo.getLoggedUserInfo().userCache.verContratoNovedad;
        const permiteDelFamilia = this.dseDrvPermiteDelFam.value || (this.appGlobalInfo.getLoggedUserInfo().userCache && !this.appGlobalInfo.getLoggedUserInfo().userCache.verContratoNovedad);

        const container = this.masterDetailContainer as SolicitudNovedadMDIUuSolNovTipoUsuarioComponent;

        

        // Detalle de Familia
        const masterFamilia = container.d0.master;

        // Acciones del maestro familia
        for (const accion of masterFamilia.actions ) {
            const nombreClase = accion.targetClass;
            const nombreUI = accion.targetUI;

            if (nombreUI === ModelConstants.Solicitudnovedad.siuutaddfamilia &&
                !permiteAddFamiliaDesdeCORE) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Familianovedad.siuutdelete &&
                !permiteDelFamilia) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Familianovedad.siuutcrearmanual &&
                !permiteAddFamiliaManual) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Familianovedad.siuutmodificarmanual &&
                !permiteAddFamiliaManual) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Familianovedad.siuutcrearusumanual &&
                !permiteAddFamiliaManual) {
                accion.visible = false;
            }
        }
        // DisplaySet del maestro familia
        for (const eleDS of masterFamilia.gridColumns ) {
            if ( eleDS.field.toLowerCase() === "TitDrvNombreAnterior".toLowerCase() && 
                (this.dseNovedadAliasNovedad.value && 
                'CT'.toLowerCase() != this.dseNovedadAliasNovedad.value.toLowerCase()) ) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "DrvTieneNuevaDir".toLowerCase() && 
                (this.dseNovedadAliasNovedad.value && 
                'MD'.toLowerCase() != this.dseNovedadAliasNovedad.value.toLowerCase()) ) {
                eleDS.hidden = true;
            }
        }

        // Detalle de usuarios
        const detalleUsuarios = container.d0.d0;
        for (const accion of detalleUsuarios.actions ) {
            const nombreClase = accion.targetClass;
            const nombreUI = accion.targetUI;

            if (nombreUI === ModelConstants.Usuarionovedad.siuutcambiartipoident &&
                'CD'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }

            if (nombreUI === ModelConstants.Usuarionovedad.siuutcambiarparentesco &&
                'CP'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Usuarionovedad.siuucambiarexcluido &&
                'EU'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Usuarionovedad.siuucambiaras &&
                'AS'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Usuarionovedad.siuucambiarps &&
                'PS'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Usuarionovedad.siuucambiarro &&
                'RO'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
            if (nombreUI === ModelConstants.Usuarionovedad.siuumodificarsunummeses &&
                'SU'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }            
            if (nombreUI === ModelConstants.Usuarionovedad.siuutmodificarmanual &&
                !permiteAddFamiliaManual) {
                accion.visible = false;
            }        
            if (nombreUI === ModelConstants.Usuarionovedad.siuutdelete &&
                !permiteAddFamiliaManual) {
                accion.visible = false;
            }        
        }
        // DisplaySet
        for (const eleDS of detalleUsuarios.gridColumns ) {
            if ( eleDS.field.toLowerCase() === "ContratacionRO".toLowerCase() && 
                'RO'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "Excluido".toLowerCase() && 
                'EU'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "SUNumMeses".toLowerCase() && 
                'SU'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "ProrrogaSuspension".toLowerCase() && 
                'PS'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "ActivacionSuspension".toLowerCase() && 
                'AS'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "ParentescoNuevo-Descripcion".toLowerCase() && 
                'CP'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "DrvNuevaIdentificacion".toLowerCase() && 
                'CD'.toLowerCase() != aliasNovedad.toLowerCase()) {
                eleDS.hidden = true;
            }
            if ( eleDS.field.toLowerCase() === "drvEstaSuspendido".toLowerCase() && 
                'PS'.toLowerCase() != aliasNovedad.toLowerCase() &&
                'AS'.toLowerCase() != aliasNovedad.toLowerCase() ) {
                eleDS.hidden = true;
            }
        }
    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1581421428736234NavOfer_3ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_nav_N_SolNovTipoUsuario_item_Clas_1581421428736234NavOfer_3ElemNav_1',
            'Documentos');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        navItem.targetClass = ModelConstants.Documentonovedad.name;
        navItem.targetUI = ModelConstants.Documentonovedad.piuudocumentonovedad;
        navItem.rolePath = 'Solicitud';
        this.navigations.push(navItem);

    }
}
