import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_UsuNov_TipoUsuario of UsuarioNovedad »
 */
export class UsuarioNovedadPIUuUsuNovuTipoUsuarioComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dscontratacionro = 'Contratación rehabilitación oral';
    private readonly dsexcluido = 'Excluido';
    private readonly dssunummeses = 'Nº Meses';
    private readonly dsprorrogasuspension = 'Prorroga Suspension';
    private readonly dsactivacionsuspension = 'Activación Suspension';
    private readonly dsnumusuario = 'Nº Usuario';
    private readonly dsdrvidentificacion = 'Identificación';
    private readonly dsdrvnuevaidentificacion = 'Nueva Identificación';
    private readonly dsdrvnombrecompleto = 'Nombre Completo';
    private readonly dsparentescoddescripcion = 'Parentesco';
    private readonly dsparentesconuevoddescripcion = 'Nuevo Parentesco';
    private readonly dsestadobeneficiarioddescripcion = 'Estado';
    private readonly dsmotivoestado = 'Motivo';
    private readonly dsfechainivigencia = 'Fecha Inicio Vigencia';
    private readonly dsfechaantiguedad = 'Fecha Antiguedad';
    private readonly dsdrvestasuspendido = 'Usuario Suspendido';

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
        public override langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, langMng, condNavMng);
        this.idXML = 'Clas_1581442138112529UIPobCl_2';
        this.className = ModelConstants.Usuarionovedad.name;
        this.classAlias = this.langMng.translateText('cls_UsuarioNovedad',
            'Usuario');
        this.supplementaryInfoAtt.push('drvnombrecompleto');
        this.iuName = 'PIU_UsuNov_TipoUsuario';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_UsuarioNovedad_piu_PIU_UsuNov_TipoUsuario',
            'Usuarios');
        this.queryURL = '/api/UsuarioNovedadApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_12';
        dsItem.name = 'contratacionro';
        dsItem.field = 'contratacionro';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_12',
            this.dscontratacionro);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_13';
        dsItem.name = 'excluido';
        dsItem.field = 'excluido';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_13',
            this.dsexcluido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_15';
        dsItem.name = 'sunummeses';
        dsItem.field = 'sunummeses';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_15',
            this.dssunummeses);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_14';
        dsItem.name = 'prorrogasuspension';
        dsItem.field = 'prorrogasuspension';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_14',
            this.dsprorrogasuspension);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_11';
        dsItem.name = 'activacionsuspension';
        dsItem.field = 'activacionsuspension';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_11',
            this.dsactivacionsuspension);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_1';
        dsItem.name = 'numusuario';
        dsItem.field = 'numusuario';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_1',
            this.dsnumusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_2';
        dsItem.name = 'drvidentificacion';
        dsItem.field = 'drvidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 70;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_2',
            this.dsdrvidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_16';
        dsItem.name = 'drvnuevaidentificacion';
        dsItem.field = 'drvnuevaidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 70;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_16',
            this.dsdrvnuevaidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_3';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 210;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_3',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_17';
        dsItem.name = 'parentesco.descripcion';
        dsItem.field = 'parentesco-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_17',
            this.dsparentescoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_18';
        dsItem.name = 'parentesconuevo.descripcion';
        dsItem.field = 'parentesconuevo-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_18',
            this.dsparentesconuevoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_4';
        dsItem.name = 'estadobeneficiario.descripcion';
        dsItem.field = 'estadobeneficiario-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_4',
            this.dsestadobeneficiarioddescripcion);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_5';
        dsItem.name = 'motivoestado';
        dsItem.field = 'motivoestado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_5',
            this.dsmotivoestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_7';
        dsItem.name = 'fechainivigencia';
        dsItem.field = 'fechainivigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_7',
            this.dsfechainivigencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_8';
        dsItem.name = 'fechaantiguedad';
        dsItem.field = 'fechaantiguedad';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_8',
            this.dsfechaantiguedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_4ICtjoVis_10';
        dsItem.name = 'drvestasuspendido';
        dsItem.field = 'drvestasuspendido';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoUsuario_item_Clas_1581442138112529CjtoVis_4ICtjoVis_10',
            this.dsdrvestasuspendido);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_9',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuutmodificarmanual;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-tmodificarmanual',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TMODIFICARMANUAL',
            'Modificar'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_7',
            'Cambiar Identificación');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuutcambiartipoident;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-tcambiartipoident',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TCAMBIARTIPOIDENT',
            'Cambiar Identificación'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvestaactivo'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_6',
            'Cambiar Parentesco');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuutcambiarparentesco;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-tcambiarparentesco',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TCAMBIARPARENTESCO',
            'Cambiar Parentesco'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvestaactivo'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_2',
            'Cambiar Excluido');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuucambiarexcluido;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-cambiarexcluido',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_cambiarExcluido',
            'Cambiar Excluido'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['parentesco.estitular'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvestaactivo'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_1',
            'Activar Suspensión');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuucambiaras;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-cambiaras',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_cambiarAS',
            'Activar Suspensión'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 5;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_3',
            'Prorrogar Suspensión');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuucambiarps;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-cambiarps',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_cambiarPS',
            'Prorrogar Suspensión'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 6;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_4',
            'Contratación rehabilitación oral');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuucambiarro;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-cambiarro',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_cambiarRO',
            'Contratación rehabilitación oral'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvestaactivo'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 7;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_5',
            'Suspender Usuario');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuumodificarsunummeses;
        accItem.setShowInModalProperties('imes-usuarionovedad-siu-modificarsunummeses',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_modificarSUNumMeses',
            'Suspender Usuario'));
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvestaactivo'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['familianovedad.solicitud.novedad.aliasnovedad'] });

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 8;
        accItem.idXML = 'Clas_1581442138112529AccOfer_1ElemAcc_10';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoUsuario_item_Clas_1581442138112529AccOfer_1ElemAcc_10',
            'Quitar Usuario');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Usuarionovedad.name;
        accItem.targetUI = ModelConstants.Usuarionovedad.siuutdelete;
        accItem.setShowInModalProperties('genericsiu',
            this.langMng.translateText(
            'cls_UsuarioNovedad_svc_TDELETE',
            'Quitar Usuario'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;

        if (actionId === 1) {
            isEnabled = this.checkPrecondicionInAdvanceNum1(rows);
        }

        if (actionId === 2) {
            isEnabled = this.checkPrecondicionInAdvanceNum2(rows);
        }

        if (actionId === 3) {
            isEnabled = this.checkPrecondicionInAdvanceNum3(rows);
        }

        if (actionId === 4) {
            isEnabled = this.checkPrecondicionInAdvanceNum4(rows);
        }

        if (actionId === 5) {
            isEnabled = this.checkPrecondicionInAdvanceNum5(rows);
        }

        if (actionId === 6) {
            isEnabled = this.checkPrecondicionInAdvanceNum6(rows);
        }

        if (actionId === 7) {
            isEnabled = this.checkPrecondicionInAdvanceNum7(rows);
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 1
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum1(rows: any[]): boolean {
        for (const row of rows) {
            // drvEstaActivo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvestaactivo')), true))) {
                return false;
            }
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "CD"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'CD'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 2
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum2(rows: any[]): boolean {
        for (const row of rows) {
            // drvEstaActivo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvestaactivo')), true))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 3
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum3(rows: any[]): boolean {
        for (const row of rows) {
            // Parentesco.EsTitular = false
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'parentesco-estitular')), false))) {
                return false;
            }
            // drvEstaActivo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvestaactivo')), true))) {
                return false;
            }
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "EU"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'EU'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 4
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum4(rows: any[]): boolean {
        for (const row of rows) {
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "AS"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'AS'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 5
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum5(rows: any[]): boolean {
        for (const row of rows) {
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "PS"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'PS'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 6
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum6(rows: any[]): boolean {
        for (const row of rows) {
            // drvEstaActivo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvestaactivo')), true))) {
                return false;
            }
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "RO"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'RO'))) {
                return false;
            }
        }
        return true;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 7
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum7(rows: any[]): boolean {
        for (const row of rows) {
            // drvEstaActivo = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvestaactivo')), true))) {
                return false;
            }
            // FamiliaNovedad.Solicitud.Novedad.AliasNovedad = "SU"
            if (!(this.util.valueEquals(this.getRowData(row, 'familianovedad-solicitud-novedad-aliasnovedad'), 'SU'))) {
                return false;
            }
        }
        return true;
    }
}
