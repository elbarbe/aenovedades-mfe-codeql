import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-familianovedad-piu-familianovedad-null',
    templateUrl: './piu_familianovedad_null.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadPIUuFamiliaNovedaduNullComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsidufamilianovedad = 'Id.';

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
        this.idXML = 'Clas_1581424574464890UIPobCl_3';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.piuufamilianovedadunull;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_FamiliaNovedad_piu_PIU_FamiliaNovedad_Null',
            'Familia');
        this.queryURL = '/api/FamiliaNovedadApi/GetPopulationDynamic';
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
        dsItem.idXML = 'Clas_1581424574464890CjtoVis_4ICtjoVis_1';
        dsItem.name = 'id_familianovedad';
        dsItem.field = 'id_familianovedad';
        dsItem.type = Field.dtAuto;
        dsItem.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_ds_DS_FamiliaNovedad_Null_item_Clas_1581424574464890CjtoVis_4ICtjoVis_1',
            this.dsidufamilianovedad);
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
