import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-protecciondatos-siu-tcrearsolnovedadexcepcion',
    templateUrl: './siu_tcrearsolnovedadexcepcion.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptTexto: Field;

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
        this.idXML = 'Clas_1432207097856829Ser_15UIServ_1';
        this.className = ModelConstants.Protecciondatos.name;
        this.iuName = ModelConstants.Protecciondatos.siuutcrearsolnovedadexcepcion;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin']));
        this.serviceName = 'TCREARSOLNOVEDADEXCEPCION';
        this.title = this.langMng.translateText('cls_ProteccionDatos_svc_TCREARSOLNOVEDADEXCEPCION',
            'Nueva solicitud novedad excepción');

        // Create inbound argument components
        this.ptTexto = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptTexto.nameInRequest = 'pttexto';
        this.ptTexto.alias = this.langMng.translateText(
            'cls_ProteccionDatos_svc_TCREARSOLNOVEDADEXCEPCION_inArg_ptTexto',
            'Texto');
        this.ptTexto.mandatory = false;
        this.ptTexto.dataType = Field.dtText;
        this.ptTexto.assignCSS();
        this.ptTexto.addCSSClass('avisoProDatos');
        this.fields.push(this.ptTexto);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // ptTexto
            const defValptTexto = new Promise<void>((resolveDefValue) => {
                let rtnFuncptTexto0: any;
                this.usrFunc.fu_GetTextoProteccionDatos().then((res) => {
                    rtnFuncptTexto0 = res;

                    this.ptTexto.setValue(rtnFuncptTexto0);
                    resolveDefValue();
                });
            });
            promiseArr.push(defValptTexto);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }
}
