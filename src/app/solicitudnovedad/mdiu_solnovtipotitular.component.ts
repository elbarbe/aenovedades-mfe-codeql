import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudNovedadIIUuSolNovTipoTitularComponent } from './iiu_solnovtipotitular.component';
import { FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent } from '../familianovedad/mdiu_famnov_d_tipotitular.component';
import { SolicitudNovedadIIUuSolNovContrauTipoTitularComponent } from './iiu_solnovcontra_tipotitular.component';
import { SolicitudNovedadIIUuSolNovObservacionesComponent } from './iiu_solnovobservaciones.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-solicitudnovedad-mdiu-solnovtipotitular',
    templateUrl: './mdiu_solnovtipotitular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudNovedadMDIUuSolNovTipoTitularComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudNovedadIIUuSolNovTipoTitularComponent;

    /** Details */
    /** Detail component 0 */
    public d0: FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SolicitudNovedadIIUuSolNovContrauTipoTitularComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;
    /** Detail component 2 */
    public d2: SolicitudNovedadIIUuSolNovObservacionesComponent;
    /** Detail 2 visible or not */
    public d2Visible = true;

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
    constructor(public override appGlobalInfo: AppGlobalInfo, public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng, public stdFun: StandardFunctions,
                public condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.idXML = 'Clas_1581421428736234UIMaDet_2';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.iuName = ModelConstants.Solicitudnovedad.mdiuusolnovtipotitular;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoTitular',
            'Solicitud de Novedad TipoTitular');
        // Create the details and assign the master detail container
        this.master = new SolicitudNovedadIIUuSolNovTipoTitularComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581421428736234UIMaDet_2Det_1',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581421428736234UIMaDet_2Det_4',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d1 = new SolicitudNovedadIIUuSolNovContrauTipoTitularComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
        }
        this.d2Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581421428736234UIMaDet_2Det_3',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d2 = new SolicitudNovedadIIUuSolNovObservacionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d2.masterDetailContainer = this;
        if (this.d2Visible) {
            this.details.push(this.d2);
        }
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the master and details components
     */
    public override initializeComponents(): void {
        this.master.iuId = this.iuId + 'M';
        this.master.initializeComponents();
        // Subscribe to the selection changed event
        this.master.selectionChanged.subscribe(data => this.processMasterSelectionChanged());
        // Details
        if (this.d0Visible && this.d0 != null) {
            this.d0.order = 0;
            this.d0.iuId = this.iuId + 'D0';
            this.d0.initializeComponents();
            this.d0.title = this.langMng.translateText(
                'cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoTitular_detail_Clas_1581421428736234UIMaDet_2Det_1',
                'Familias');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('FamiliaNovedad',
                this.master.getContext(), null, 'Solicitud', null, 'SolicitudNovedad', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoTitular_detail_Clas_1581421428736234UIMaDet_2Det_4',
                'Contratante');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SolicitudNovedad',
                this.master.getContext(), null, '', null, 'SolicitudNovedad', ''));
        }
        if (this.d2Visible && this.d2 != null) {
            this.d2.order = 2;
            this.d2.iuId = this.iuId + 'D2';
            this.d2.initializeComponents();
            this.d2.title = this.langMng.translateText(
                'cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoTitular_detail_Clas_1581421428736234UIMaDet_2Det_3',
                'Observaciones');
            this.d2.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SolicitudNovedad',
                this.master.getContext(), null, '', null, 'SolicitudNovedad', ''));
        }
        super.initializeComponents();
    }

}
