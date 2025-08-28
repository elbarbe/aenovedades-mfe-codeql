import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements PIU PIU_LogEstadoDocNov of LogEstadoDocNov »
 */
@Component({
    selector: 'imes-logestadodocnov-piu-logestadodocnov',
    templateUrl: './piu_logestadodocnov.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogEstadoDocNovPIUuLogEstadoDocNovComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfecha = 'Fecha';
    private readonly dsnombrefuncionario = 'Usuario';
    private readonly dsestadoanterior = 'Estado Anterior';
    private readonly dsestadonuevo = 'Estado Nuevo';
    private readonly dsobservacions = 'Observaciones';

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
        this.idXML = 'Clas_1594054803456437UIPobCl_1';
        this.className = ModelConstants.Logestadodocnov.name;
        this.classAlias = this.langMng.translateText('cls_LogEstadoDocNov',
            'Observaciones');
        this.iuName = ModelConstants.Logestadodocnov.piuulogestadodocnov;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_LogEstadoDocNov_piu_PIU_LogEstadoDocNov',
            'Log cambios estado documento');
        this.queryURL = '/api/LogEstadoDocNovApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1594054803456437CjtoVis_1ICtjoVis_1';
        dsItem.name = 'fecha';
        dsItem.field = 'fecha';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_LogEstadoDocNov_ds_DS_LogEstadoDocNov_item_Clas_1594054803456437CjtoVis_1ICtjoVis_1',
            this.dsfecha);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1594054803456437CjtoVis_1ICtjoVis_2';
        dsItem.name = 'nombrefuncionario';
        dsItem.field = 'nombrefuncionario';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 200;
        dsItem.alias = this.langMng.translateText(
            'cls_LogEstadoDocNov_ds_DS_LogEstadoDocNov_item_Clas_1594054803456437CjtoVis_1ICtjoVis_2',
            this.dsnombrefuncionario);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1594054803456437CjtoVis_1ICtjoVis_3';
        dsItem.name = 'estadoanterior';
        dsItem.field = 'estadoanterior';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogEstadoDocNov_ds_DS_LogEstadoDocNov_item_Clas_1594054803456437CjtoVis_1ICtjoVis_3',
            this.dsestadoanterior);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1594054803456437CjtoVis_1ICtjoVis_4';
        dsItem.name = 'estadonuevo';
        dsItem.field = 'estadonuevo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_LogEstadoDocNov_ds_DS_LogEstadoDocNov_item_Clas_1594054803456437CjtoVis_1ICtjoVis_4',
            this.dsestadonuevo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1594054803456437CjtoVis_1ICtjoVis_5';
        dsItem.name = 'observacions';
        dsItem.field = 'observacions';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 999;
        dsItem.alias = this.langMng.translateText(
            'cls_LogEstadoDocNov_ds_DS_LogEstadoDocNov_item_Clas_1594054803456437CjtoVis_1ICtjoVis_5',
            this.dsobservacions);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
