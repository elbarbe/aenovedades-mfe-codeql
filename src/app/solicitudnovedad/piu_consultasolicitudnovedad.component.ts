import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { SolicitudNovedadFilterFuSolicitudNovedaduNumFechas} from './filters/solicitudnovedadfilterfusolicitudnovedadunumfechas';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_ConsultaSolicitudNovedad of SolicitudNovedad »
 */
@Component({
    selector: 'imes-solicitudnovedad-piu-consultasolicitudnovedad',
    templateUrl: './piu_consultasolicitudnovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudNovedadPIUuConsultaSolicitudNovedadComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsdrvnumradicadostr = 'Nº Solicitud';
    private readonly dsfechacreacion = 'Fecha Creación';
    private readonly dsplantdproductotddescripcion = 'Producto';
    private readonly dsplantdnombre = 'Plan';
    private readonly dsnumcontrato = 'Nº Contrato';
    private readonly dsexcepcion = 'Excepción';
    private readonly dsnovedaddtiponovedaddnombre = 'Tipo';
    private readonly dsnovedaddnombre = 'Novedad';
    private readonly dscausaldnombre = 'Causal';

    /** Filters */
    public f0: SolicitudNovedadFilterFuSolicitudNovedaduNumFechas;

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
        this.idXML = 'Clas_1581421428736234UIPobCl_1';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.classAlias = this.langMng.translateText('cls_SolicitudNovedad',
            'Solicitud de Novedad');
        this.supplementaryInfoAtt.push('drvnumradicadostr');
        this.iuName = ModelConstants.Solicitudnovedad.piuuconsultasolicitudnovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_piu_PIU_ConsultaSolicitudNovedad',
            'Consultar Novedades');
        this.f0 = new SolicitudNovedadFilterFuSolicitudNovedaduNumFechas(this.appGlobalInfo,
            this.util, this.changeDetectorRef, this.langMng, stdFun, usrFunc);
        this.f0.populationContainer = this;
        this.filters.push(this.f0);
        this.queryURL = '/api/SolicitudNovedadApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_14';
        dsItem.name = 'drvnumradicadostr';
        dsItem.field = 'drvnumradicadostr';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 20;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_14',
            this.dsdrvnumradicadostr);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_9';
        dsItem.name = 'fechacreacion';
        dsItem.field = 'fechacreacion';
        dsItem.type = Field.dtDate;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_9',
            this.dsfechacreacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_1';
        dsItem.name = 'plant.productot.descripcion';
        dsItem.field = 'plant-productot-descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 100;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_1',
            this.dsplantdproductotddescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_2';
        dsItem.name = 'plant.nombre';
        dsItem.field = 'plant-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_2',
            this.dsplantdnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_4';
        dsItem.name = 'numcontrato';
        dsItem.field = 'numcontrato';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_4',
            this.dsnumcontrato);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_10';
        dsItem.name = 'excepcion';
        dsItem.field = 'excepcion';
        dsItem.type = Field.dtBool;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_10',
            this.dsexcepcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_SINO;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_11';
        dsItem.name = 'novedad.tiponovedad.nombre';
        dsItem.field = 'novedad-tiponovedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_11',
            this.dsnovedaddtiponovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_12';
        dsItem.name = 'novedad.nombre';
        dsItem.field = 'novedad-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_12',
            this.dsnovedaddnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1581421428736234CjtoVis_1ICtjoVis_13';
        dsItem.name = 'causal.nombre';
        dsItem.field = 'causal-nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 50;
        dsItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolicitudNovedad_Con_item_Clas_1581421428736234CjtoVis_1ICtjoVis_13',
            this.dscausaldnombre);
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
        accItem.idXML = 'Clas_1581421428736234AccOfer_5ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNov_Consulta_item_Clas_1581421428736234AccOfer_5ElemAcc_1',
            'Modificar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuudummynavegaramodificar;
        accItem.setNoShowProperties('dummyNavegarAModificar', 'p_thissolicitudnovedad_oid', '', false);

        this.actions.push(accItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteriaList.push({key: 'OC_SolNov_FechaCreacion', value: 'Por fecha elaboración'});
        this.orderCriteria = 'OC_SolNov_FechaCreacion';
    }
}
