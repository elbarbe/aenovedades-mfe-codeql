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
 * « Implements IIU IIU_SolNovTipoContrato of SolicitudNovedad »
 */
import { SolicitudNovedadMDIUuSolNovTipoContratoComponent } from './mdiu_solnovtipocontrato.component';

export class SolicitudNovedadIIUuSolNovTipoContratoComponent extends AbstractIIU {

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
    public dseDrvNuevaPeriodicidad: Field;
    public dseSCNumMeses: Field;
    public dseFirmaImagenFirma: FieldBlob;
    public dseCompletada: FieldDefinedSelection;
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
        this.idXML = 'Clas_1581421428736234UIInst_1';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.classAlias = this.langMng.translateText('cls_SolicitudNovedad',
            'Solicitud de Novedad');
        this.supplementaryInfoAtt.push('drvnumradicadostr');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_iiu_IIU_SolNovTipoContrato',
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
        this.dseDrvNuevaPeriodicidad = new Field(this.langMng);
        this.dseSCNumMeses = new Field(this.langMng);
        this.dseFirmaImagenFirma = new FieldBlob(this.langMng);
        this.dseCompletada = new FieldDefinedSelection(this.langMng);
        this.dseNovedadAliasNovedad = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseDrvNumRadicadoStr.nameInRequest = 'drvnumradicadostr';
        this.dseDrvNumRadicadoStr.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_21',
            'Nº Solicitud');
        this.dseDrvNumRadicadoStr.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_21', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvNumRadicadoStr.enabled = false;
        this.dseDrvNumRadicadoStr.mandatory = false;
        this.dseDrvNumRadicadoStr.dataType = Field.dtString;
        this.dseDrvNumRadicadoStr.maxLength = 20;
        this.dseDrvNumRadicadoStr.assignCSS();
        this.fields.push(this.dseDrvNumRadicadoStr);

        this.dsePlanTProductoTDescripcion.nameInRequest = 'plant.productot.descripcion';
        this.dsePlanTProductoTDescripcion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_2',
            'Producto');
        this.dsePlanTProductoTDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_2', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePlanTProductoTDescripcion.enabled = false;
        this.dsePlanTProductoTDescripcion.mandatory = false;
        this.dsePlanTProductoTDescripcion.dataType = Field.dtString;
        this.dsePlanTProductoTDescripcion.maxLength = 100;
        this.dsePlanTProductoTDescripcion.assignCSS();
        this.fields.push(this.dsePlanTProductoTDescripcion);

        this.dsePlanTNombre.nameInRequest = 'plant.nombre';
        this.dsePlanTNombre.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_3',
            'Plan');
        this.dsePlanTNombre.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dsePlanTNombre.enabled = false;
        this.dsePlanTNombre.mandatory = false;
        this.dsePlanTNombre.dataType = Field.dtString;
        this.dsePlanTNombre.maxLength = 150;
        this.dsePlanTNombre.assignCSS();
        this.fields.push(this.dsePlanTNombre);

        this.dseNumContrato.nameInRequest = 'numcontrato';
        this.dseNumContrato.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_7',
            'Nº Contrato');
        this.dseNumContrato.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_7', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNumContrato.enabled = false;
        this.dseNumContrato.mandatory = false;
        this.dseNumContrato.dataType = Field.dtString;
        this.dseNumContrato.maxLength = 50;
        this.dseNumContrato.assignCSS();
        this.fields.push(this.dseNumContrato);

        this.dseEstadoContratoDescripcion.nameInRequest = 'estadocontrato.descripcion';
        this.dseEstadoContratoDescripcion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_12',
            'Estado contrato');
        this.dseEstadoContratoDescripcion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_12', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseEstadoContratoDescripcion.enabled = false;
        this.dseEstadoContratoDescripcion.mandatory = false;
        this.dseEstadoContratoDescripcion.dataType = Field.dtString;
        this.dseEstadoContratoDescripcion.maxLength = 100;
        this.dseEstadoContratoDescripcion.assignCSS();
        this.fields.push(this.dseEstadoContratoDescripcion);

        this.dseCtrTagCausaExclusion.nameInRequest = 'ctrtagcausaexclusion';
        this.dseCtrTagCausaExclusion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_20',
            'Motivo Estado');
        this.dseCtrTagCausaExclusion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_20', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCtrTagCausaExclusion.enabled = false;
        this.dseCtrTagCausaExclusion.mandatory = false;
        this.dseCtrTagCausaExclusion.dataType = Field.dtString;
        this.dseCtrTagCausaExclusion.maxLength = 100;
        this.dseCtrTagCausaExclusion.assignCSS();
        this.fields.push(this.dseCtrTagCausaExclusion);

        this.dseDrvTarifa.nameInRequest = 'drvtarifa';
        this.dseDrvTarifa.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_13',
            'Tarifa');
        this.dseDrvTarifa.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_13', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvTarifa.enabled = false;
        this.dseDrvTarifa.mandatory = false;
        this.dseDrvTarifa.dataType = Field.dtString;
        this.dseDrvTarifa.maxLength = 120;
        this.dseDrvTarifa.assignCSS();
        this.fields.push(this.dseDrvTarifa);

        this.dseDrvConvenio.nameInRequest = 'drvconvenio';
        this.dseDrvConvenio.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_14',
            'Convenio');
        this.dseDrvConvenio.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_14', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvConvenio.enabled = false;
        this.dseDrvConvenio.mandatory = false;
        this.dseDrvConvenio.dataType = Field.dtString;
        this.dseDrvConvenio.maxLength = 120;
        this.dseDrvConvenio.assignCSS();
        this.fields.push(this.dseDrvConvenio);

        this.dseDrvGrupoAsociado.nameInRequest = 'drvgrupoasociado';
        this.dseDrvGrupoAsociado.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_16',
            'Grupo Asociado');
        this.dseDrvGrupoAsociado.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_16', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvGrupoAsociado.enabled = false;
        this.dseDrvGrupoAsociado.mandatory = false;
        this.dseDrvGrupoAsociado.dataType = Field.dtString;
        this.dseDrvGrupoAsociado.maxLength = 220;
        this.dseDrvGrupoAsociado.assignCSS();
        this.fields.push(this.dseDrvGrupoAsociado);

        this.dseDrvPeriodicidad.nameInRequest = 'drvperiodicidad';
        this.dseDrvPeriodicidad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_17',
            'Periodicidad');
        this.dseDrvPeriodicidad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_17', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvPeriodicidad.enabled = false;
        this.dseDrvPeriodicidad.mandatory = false;
        this.dseDrvPeriodicidad.dataType = Field.dtString;
        this.dseDrvPeriodicidad.maxLength = 200;
        this.dseDrvPeriodicidad.assignCSS();
        this.fields.push(this.dseDrvPeriodicidad);

        this.dseNovedadDrvTextoMostrar.nameInRequest = 'novedad.drvtextomostrar';
        this.dseNovedadDrvTextoMostrar.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_10',
            'Novedad');
        this.dseNovedadDrvTextoMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseNovedadDrvTextoMostrar.enabled = false;
        this.dseNovedadDrvTextoMostrar.mandatory = false;
        this.dseNovedadDrvTextoMostrar.dataType = Field.dtString;
        this.dseNovedadDrvTextoMostrar.maxLength = 60;
        this.dseNovedadDrvTextoMostrar.assignCSS();
        this.fields.push(this.dseNovedadDrvTextoMostrar);

        this.dseCausalDrvTextoMostrar.nameInRequest = 'causal.drvtextomostrar';
        this.dseCausalDrvTextoMostrar.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_9',
            'Causal');
        this.dseCausalDrvTextoMostrar.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_9', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCausalDrvTextoMostrar.enabled = false;
        this.dseCausalDrvTextoMostrar.mandatory = false;
        this.dseCausalDrvTextoMostrar.dataType = Field.dtString;
        this.dseCausalDrvTextoMostrar.maxLength = 110;
        this.dseCausalDrvTextoMostrar.assignCSS();
        this.fields.push(this.dseCausalDrvTextoMostrar);

        this.dseDrvNuevaPeriodicidad.nameInRequest = 'drvnuevaperiodicidad';
        this.dseDrvNuevaPeriodicidad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_18',
            'Nueva Periodicidad');
        this.dseDrvNuevaPeriodicidad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_18', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseDrvNuevaPeriodicidad.enabled = false;
        this.dseDrvNuevaPeriodicidad.mandatory = false;
        this.dseDrvNuevaPeriodicidad.dataType = Field.dtString;
        this.dseDrvNuevaPeriodicidad.maxLength = 200;
        this.dseDrvNuevaPeriodicidad.assignCSS();
        this.fields.push(this.dseDrvNuevaPeriodicidad);

        this.dseSCNumMeses.nameInRequest = 'scnummeses';
        this.dseSCNumMeses.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_19',
            'Nº Meses Suspensión');
        this.dseSCNumMeses.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_19', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseSCNumMeses.enabled = false;
        this.dseSCNumMeses.mandatory = false;
        this.dseSCNumMeses.dataType = Field.dtNat;
        this.dseSCNumMeses.assignCSS();
        this.fields.push(this.dseSCNumMeses);

        this.dseFirmaImagenFirma.nameInRequest = 'firma.imagenfirma';
        this.dseFirmaImagenFirma.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_23',
            'Firma');
        this.dseFirmaImagenFirma.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_23', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseFirmaImagenFirma.enabled = false;
        this.dseFirmaImagenFirma.mandatory = false;
        this.dseFirmaImagenFirma.dataType = Field.dtBlob;
        this.dseFirmaImagenFirma.assignCSS();
        this.fields.push(this.dseFirmaImagenFirma);

        this.dseCompletada.nameInRequest = 'completada';
        this.dseCompletada.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_24',
            'Completada');
        this.dseCompletada.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_24', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseCompletada.enabled = false;
        this.dseCompletada.mandatory = false;
        this.dseCompletada.dataType = Field.dtBool;
        this.dseCompletada.options = DefinedSelections.DS_SINO;
        this.dseCompletada.assignCSS();
        this.fields.push(this.dseCompletada);

        this.dseNovedadAliasNovedad.nameInRequest = 'novedad.aliasnovedad';
        this.dseNovedadAliasNovedad.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNov_TipoContrato_item_Clas_1581421428736234CjtoVis_2ICtjoVis_25',
            'Alias');
        this.dseNovedadAliasNovedad.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_2ICtjoVis_25', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
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
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_2',
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
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_1',
            'Cambiar periodicidad');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuutchgnuevaperiodicidad;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['novedad.aliasnovedad'] });
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_3',
            'Indicar número de meses de suspensión');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuumodificarnummeses;
        accItem.setShowInModalProperties('imes-solicitudnovedad-siu-modificarnummeses',
            this.langMng.translateText(
            'cls_SolicitudNovedad_svc_modificarNumMeses',
            'Indicar número de meses de suspensión'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['novedad.aliasnovedad'] });
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_5',
            'Nueva Novedad para contrato');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Protecciondatos.name;
        accItem.targetUI = ModelConstants.Protecciondatos.siuutcrearsolnovedad;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_9',
            'Firma');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuutfirmar;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 5;
        accItem.idXML = 'Clas_1581421428736234AccOfer_2ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovTipoContrato_item_Clas_1581421428736234AccOfer_2ElemAcc_10',
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

        const container = this.masterDetailContainer as SolicitudNovedadMDIUuSolNovTipoContratoComponent;

        // Maestro principal
        // Acciones del maestro
        for (const accion of this.actions ) {
            const nombreClase = accion.targetClass;
            const nombreUI = accion.targetUI;

            if (nombreUI === ModelConstants.Solicitudnovedad.siuutchgnuevaperiodicidad &&
                'PP'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }

            if (nombreUI === ModelConstants.Solicitudnovedad.siuumodificarnummeses &&
                'SC'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }

        }
        // DisplaySet
        if ('PP'.toLowerCase() !== aliasNovedad.toLowerCase()) {
            this.dseDrvNuevaPeriodicidad.visible = false;
        }
        if ('SC'.toLowerCase() !== aliasNovedad.toLowerCase()) {
            this.dseSCNumMeses.visible = false;
        }

        // Detalle de Contratante
        const detContratante = container.d0;

        // Acciones del detalle contratante
        for (const accion of detContratante.actions ) {
            const nombreClase = accion.targetClass;
            const nombreUI = accion.targetUI;

            if (nombreUI === ModelConstants.Solicitudnovedad.siuumodificarnuevonombre &&
                'CR'.toLowerCase() !== aliasNovedad.toLowerCase()) {
                accion.visible = false;
            }
        }
        // DisplaySet de contratante
        if ('CR'.toLowerCase() !== aliasNovedad.toLowerCase()) {
            detContratante.dseContraNuevaRazonSocial.visible = false;
        }

    }
    
    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1581421428736234NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_nav_N_SolNovTipoContrato_item_Clas_1581421428736234NavOfer_1ElemNav_1',
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

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 1) {
                isEnabled = this.checkPrecondicionInAdvanceNum1(row);
            }
            if (actionId === 2) {
                isEnabled = this.checkPrecondicionInAdvanceNum2(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum1(row: any): boolean {
        // Novedad.AliasNovedad = "PP"
        if (!(this.util.valueEquals(this.getRowData(row, 'novedad-aliasnovedad'), 'PP'))) {
            return false;
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 2
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum2(row: any): boolean {
        // Novedad.AliasNovedad = "SC"
        if (!(this.util.valueEquals(this.getRowData(row, 'novedad-aliasnovedad'), 'SC'))) {
            return false;
        }
        return true;
    }
}
