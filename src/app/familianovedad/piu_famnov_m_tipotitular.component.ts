import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem, ScenarioType } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_FamNov_M_TipoTitular of FamiliaNovedad »
 */
export class FamiliaNovedadPIUuFamNovuMuTipoTitularComponent extends AbstractPIU {
    /** Constants for display set item aliases */
    private readonly dsnumfamilia = 'Nº Familia';
    private readonly dsfamactiva = 'Familia Activa';
    private readonly dstitdrvidentificacion = 'Identificación Titular';
    private readonly dstitdrvnombrecompleto = 'Nombre Titular';
    private readonly dstitdrvnombreanterior = 'Titular anterior';
    private readonly dsdrvtienenuevadir = 'Nueva dirección';
    private readonly dsdrvtienefirmatit = 'Firma Titular';
    private readonly dsdrvtienefirmanuevotit = 'Firma Nuevo Titular';

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
        this.idXML = 'Clas_1581424574464890UIPobCl_1';
        this.className = ModelConstants.Familianovedad.name;
        this.classAlias = this.langMng.translateText('cls_FamiliaNovedad',
            'Familia');
        this.supplementaryInfoAtt.push('numfamilia');
        this.iuName = 'PIU_FamNov_M_TipoTitular';
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_FamiliaNovedad_piu_PIU_FamNov_M_TipoTitular',
            'Familias');
        this.queryURL = '/api/FamiliaNovedadApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_3';
        dsItem.name = 'numfamilia';
        dsItem.field = 'numfamilia';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_3',
            this.dsnumfamilia);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_4';
        dsItem.name = 'famactiva';
        dsItem.field = 'famactiva';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_4',
            this.dsfamactiva);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_5';
        dsItem.name = 'titdrvidentificacion';
        dsItem.field = 'titdrvidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 70;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_5',
            this.dstitdrvidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_6';
        dsItem.name = 'titdrvnombrecompleto';
        dsItem.field = 'titdrvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 210;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_6',
            this.dstitdrvnombrecompleto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_9';
        dsItem.name = 'titdrvnombreanterior';
        dsItem.field = 'titdrvnombreanterior';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 210;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_9',
            this.dstitdrvnombreanterior);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_10';
        dsItem.name = 'drvtienenuevadir';
        dsItem.field = 'drvtienenuevadir';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_10',
            this.dsdrvtienenuevadir);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_11';
        dsItem.name = 'drvtienefirmatit';
        dsItem.field = 'drvtienefirmatit';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_11',
            this.dsdrvtienefirmatit);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_1ICtjoVis_12';
        dsItem.name = 'drvtienefirmanuevotit';
        dsItem.field = 'drvtienefirmanuevotit';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamNov_TipoTitular_item_Clas_1581424574464890CjtoVis_1ICtjoVis_12',
            this.dsdrvtienefirmanuevotit);
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
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_6',
            'Añadir Familia');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuutaddfamilia;
        accItem.setShowInModalProperties('imes-solicitudnovedad-siu-taddfamilia',
            this.langMng.translateText(
            'cls_SolicitudNovedad_svc_TADDFAMILIA',
            'Añadir Familia'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_7';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_7',
            'Añadir familia');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutcrearmanual;
        accItem.setShowInModalProperties('imes-familianovedad-siu-tcrearmanual',
            this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TCREARMANUAL',
            'Añadir familia'));
        accItem.targetType  = ScenarioType.Create;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_9';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_9',
            'Añadir usuario');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutcrearusumanual;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_8';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_8',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Superadmin.name, ModelConstants.Asesor.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutmodificarmanual;
        accItem.setShowInModalProperties('imes-familianovedad-siu-tmodificarmanual',
            this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TMODIFICARMANUAL',
            'Modificar'));
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 4;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_3';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_3',
            'Firma titular');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutfirmartitular;
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 5;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_1',
            'Indicar nuevo titular');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutaddtitular;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['solicitud.novedad.aliasnovedad'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['famactiva'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 6;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_2',
            'Firma nuevo titular');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutfirmarnuevotitular;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['famactiva'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['drvtienenuevotitular'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 7;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_5',
            'Indicar nueva dirección de correspondencia');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutsetdircorr;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['famactiva'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['solicitud.novedad.aliasnovedad'] });
        accItem.targetType  = ScenarioType.Normal;
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 8;
        accItem.idXML = 'Clas_1581424574464890AccOfer_1ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_act_A_FamNov_TipoTitular_item_Clas_1581424574464890AccOfer_1ElemAcc_4',
            'Quitar familia');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Familianovedad.name;
        accItem.targetUI = ModelConstants.Familianovedad.siuutdelete;
        accItem.targetType  = ScenarioType.Delete;
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
     * Evaluate in advance the preconditions of the action element number 5
     * @param rows Selected instances
     */
    private checkPrecondicionInAdvanceNum5(rows: any[]): boolean {
        for (const row of rows) {
            // Solicitud.Novedad.AliasNovedad = "CT"
            if (!(this.util.valueEquals(this.getRowData(row, 'solicitud-novedad-aliasnovedad'), 'CT'))) {
                return false;
            }
            // FamActiva = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'famactiva')), true))) {
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
            // FamActiva = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'famactiva')), true))) {
                return false;
            }
            // drvTieneNuevoTitular = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'drvtienenuevotitular')), true))) {
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
            // FamActiva = true
            if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'famactiva')), true))) {
                return false;
            }
            // Solicitud.Novedad.AliasNovedad = "MD"
            if (!(this.util.valueEquals(this.getRowData(row, 'solicitud-novedad-aliasnovedad'), 'MD'))) {
                return false;
            }
        }
        return true;
    }
}
