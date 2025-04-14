import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AbstractMDIU } from '../common/abstractMDIU';
import { LanguageMng } from '../common/languageMng';
import { ModelConstants } from '../common/model.constants';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { SolicitudNovedadIIUuSolNovTipoContratoComponent } from './iiu_solnovtipocontrato.component';
import { SolicitudNovedadIIUuSolNovContratanteComponent } from './iiu_solnovcontratante.component';
import { SolicitudNovedadIIUuSolNovObservacionesComponent } from './iiu_solnovobservaciones.component';

import { UserFunctions } from '../common/userFunctions';

@Component({
    selector: 'imes-solicitudnovedad-mdiu-solnovtipocontrato',
    templateUrl: './mdiu_solnovtipocontrato.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolicitudNovedadMDIUuSolNovTipoContratoComponent extends AbstractMDIU implements OnInit {

    /** Master */
    public master: SolicitudNovedadIIUuSolNovTipoContratoComponent;

    /** Details */
    /** Detail component 0 */
    public d0: SolicitudNovedadIIUuSolNovContratanteComponent;
    /** Detail 0 visible or not */
    public d0Visible = true;
    /** Detail component 1 */
    public d1: SolicitudNovedadIIUuSolNovObservacionesComponent;
    /** Detail 1 visible or not */
    public d1Visible = true;

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
        this.idXML = 'Clas_1581421428736234UIMaDet_1';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.iuName = ModelConstants.Solicitudnovedad.mdiuusolnovtipocontrato;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoContrato',
            'Solicitud de Novedad Tipo Contrato');
        // Create the details and assign the master detail container
        this.master = new SolicitudNovedadIIUuSolNovTipoContratoComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.master.masterDetailContainer = this;
        this.masterAbstract = this.master;
        this.d0Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581421428736234UIMaDet_1Det_1',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d0 = new SolicitudNovedadIIUuSolNovContratanteComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d0.masterDetailContainer = this;
        if (this.d0Visible) {
            this.details.push(this.d0);
        }
        this.d1Visible = this.appGlobalInfo.getLoggedUserInfo().isDetailVisible(this.idXML, 'Clas_1581421428736234UIMaDet_1Det_2',
            ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.d1 = new SolicitudNovedadIIUuSolNovObservacionesComponent(appGlobalInfo, util, changeDetectorRef, langMng, stdFun,
            condNavMng, usrFunc);
        this.d1.masterDetailContainer = this;
        if (this.d1Visible) {
            this.details.push(this.d1);
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
                'cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoContrato_detail_Clas_1581421428736234UIMaDet_1Det_1',
                'Contratante');
            this.d0.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SolicitudNovedad',
                this.master.getContext(), null, '', null, 'SolicitudNovedad', ''));
        }
        if (this.d1Visible && this.d1 != null) {
            this.d1.order = 1;
            this.d1.iuId = this.iuId + 'D1';
            this.d1.initializeComponents();
            this.d1.title = this.langMng.translateText(
                'cls_SolicitudNovedad_mdiu_MDIU_SolNovTipoContrato_detail_Clas_1581421428736234UIMaDet_1Det_2',
                'Observaciones');
            this.d1.initializeFromExchangeInfo(this.util.createExchangeInfoNavigationFromMasterToDetail('SolicitudNovedad',
                this.master.getContext(), null, '', null, 'SolicitudNovedad', ''));
        }
        super.initializeComponents();
    }

}
