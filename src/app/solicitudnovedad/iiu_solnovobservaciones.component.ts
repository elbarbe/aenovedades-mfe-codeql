import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudNovedadSIUuregistrarObservacionesComponent } from './siu_registrarobservaciones.component';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_SolNovObservaciones of SolicitudNovedad »
 */
export class SolicitudNovedadIIUuSolNovObservacionesComponent extends AbstractIIU {

    /** Display Set elements */
    public dseObservacions: Field;

    /** Associated service */
    public asrv: SolicitudNovedadSIUuregistrarObservacionesComponent;

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
        this.idXML = 'Clas_1581421428736234UIInst_3';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.classAlias = this.langMng.translateText('cls_SolicitudNovedad',
            'Solicitud de Novedad');
        this.supplementaryInfoAtt.push('drvnumradicadostr');
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_iiu_IIU_SolNovObservaciones',
            'Observaciones');
        this.queryURL = '/api/SolicitudNovedadApi/GetPopulationDynamic';

        // Associated service
        this.asrv = new SolicitudNovedadSIUuregistrarObservacionesComponent(appGlobalInfo,
            util, changeDetectorRef, langMng, stdFun, condNavMng, usrFunc);
        this.asrv.queryContainer = this;
        this.associatedService = this.asrv;

        this.dseObservacions = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseObservacions.nameInRequest = 'observacions';
        this.dseObservacions.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovObservaciones_item_Clas_1581421428736234CjtoVis_4ICtjoVis_3',
            'Observaciones');
        this.dseObservacions.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_4ICtjoVis_3', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseObservacions.enabled = false;
        this.dseObservacions.mandatory = false;
        this.dseObservacions.dataType = Field.dtString;
        this.dseObservacions.maxLength = 900;
        this.dseObservacions.assignCSS();
        this.fields.push(this.dseObservacions);


        // Associated service
        this.asrv.initializeComponents();
    }
}
