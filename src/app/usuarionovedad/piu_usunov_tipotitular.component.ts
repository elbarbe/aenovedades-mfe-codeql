import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class UsuarioNovedadPIUuUsuNovuTipoTitularComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnumusuario = 'Nº Usuario';
    private readonly dsdrvidentificacion = 'Identificación';
    private readonly dsdrvnombrecompleto = 'Nombre Completo';
    private readonly dsestadobeneficiarioddescripcion = 'Estado';
    private readonly dsparentescoddescripcion = 'Parentesco';
    private readonly dsparentesconuevoddescripcion = 'Nuevo Parentesco';
    private readonly dsmotivoestado = 'Motivo';
    private readonly dsfechainivigencia = 'Fecha Inicio Vigencia';
    private readonly dsfechaantiguedad = 'Fecha Antiguedad';

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
        this.idXML = 'Clas_1581442138112529UIPobCl_1';
        this.className = ModelConstants.Usuarionovedad.name;
        this.iuName = 'PIU_UsuNov_TipoTitular';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_UsuarioNovedad_piu_PIU_UsuNov_TipoTitular',
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
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_1';
        dsItem.name = 'numusuario';
        dsItem.field = 'numusuario';
        dsItem.type = Field.dtInt;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_1',
            this.dsnumusuario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_2';
        dsItem.name = 'drvidentificacion';
        dsItem.field = 'drvidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 70;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_2',
            this.dsdrvidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_3';
        dsItem.name = 'drvnombrecompleto';
        dsItem.field = 'drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 210;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_3',
            this.dsdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_4';
        dsItem.name = 'estadobeneficiario.descripcion';
        dsItem.field = 'estadobeneficiario-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_4',
            this.dsestadobeneficiarioddescripcion);
        dsItem.agents = [];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_9';
        dsItem.name = 'parentesco.descripcion';
        dsItem.field = 'parentesco-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_9',
            this.dsparentescoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_10';
        dsItem.name = 'parentesconuevo.descripcion';
        dsItem.field = 'parentesconuevo-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_10',
            this.dsparentesconuevoddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_6';
        dsItem.name = 'motivoestado';
        dsItem.field = 'motivoestado';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_6',
            this.dsmotivoestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_7';
        dsItem.name = 'fechainivigencia';
        dsItem.field = 'fechainivigencia';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_7',
            this.dsfechainivigencia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581442138112529CjtoVis_2ICtjoVis_8';
        dsItem.name = 'fechaantiguedad';
        dsItem.field = 'fechaantiguedad';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_ds_DS_UsuNov_TipoTitular_item_Clas_1581442138112529CjtoVis_2ICtjoVis_8',
            this.dsfechaantiguedad);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581442138112529AccOfer_2ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoTitular_item_Clas_1581442138112529AccOfer_2ElemAcc_3',
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
        accItem.idXML = 'Clas_1581442138112529AccOfer_2ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoTitular_item_Clas_1581442138112529AccOfer_2ElemAcc_1',
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
        accItem.id = 2;
        accItem.idXML = 'Clas_1581442138112529AccOfer_2ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_UsuarioNovedad_act_A_UsuNov_TipoTitular_item_Clas_1581442138112529AccOfer_2ElemAcc_4',
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
        }
        return true;
    }
}
