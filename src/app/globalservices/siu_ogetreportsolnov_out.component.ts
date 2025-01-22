import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { AbstractIU } from '../common/baseIUElements';
import { Field, FieldBlob } from '../common/baseIUElements';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';

@Component({
    selector: 'imes-gs-siu-ogetreportsolnov-out',
    templateUrl: './siu_ogetreportsolnov_out.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GSSIUuOGETREPORTSOLNOVuOutComponent  extends AbstractIU implements OnInit {

    /** Outbound argument oaNombreArchivo */
    public oaNombreArchivo: Field;
    /** Outbound argument oaArchivo */
    public oaArchivo: FieldBlob;

    /** Service request */
    private serviceRequest: any;
    /** Service response */
    private serviceResponse: any;
    /** Context */
    private readonly context: {exchangeInfo: ExchangeInfo} = {exchangeInfo: new ExchangeInfo()};

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param condNavMng Conditinal navigation manager
     */
    constructor(
        protected override appGlobalInfo: AppGlobalInfo,
        protected override util: Util,
        protected override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng,
        protected condNavMng: ConditionalNavigationMng) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.className = ModelConstants.Globalservices.name;
        this.iuName = 'siu_ogetreportsolnov_out';
        this.title = this.langMng.translateText('gs_OGETREPORTSOLNOV',
            'Ver PDF');

        // Create outbound argument components
        this.oaNombreArchivo = new Field(this.langMng);
        this.oaArchivo = new FieldBlob(this.langMng);
    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initialize(): void {
        this.oaNombreArchivo.nameInRequest = 'oanombrearchivo';
        this.oaNombreArchivo.alias = this.langMng.translateText(
            'gs_OGETREPORTSOLNOV_outArg_oaNombreArchivo',
            'Nombre');
        this.oaNombreArchivo.dataType = Field.dtString;
        this.oaNombreArchivo.maxLength = 255;
        this.oaNombreArchivo.enabled = false;
        this.oaNombreArchivo.assignCSS();

        this.oaArchivo.nameInRequest = 'oaarchivo';
        this.oaArchivo.alias = this.langMng.translateText(
            'gs_OGETREPORTSOLNOV_outArg_oaArchivo',
            'oaArchivo');
        this.oaArchivo.dataType = Field.dtBlob;
        this.oaArchivo.enabled = false;
        this.oaArchivo.assignCSS();

        // Get request and response from the exchange information
        this.context.exchangeInfo = this.appGlobalInfo.appExchangeInfo.getExchangeInfoForScenario(this.className, this.iuName);
        if (this.context.exchangeInfo) {
            this.serviceRequest = this.context.exchangeInfo.customData.request;
            this.serviceResponse = this.context.exchangeInfo.customData.response;
            if (this.serviceRequest && this.serviceResponse) {
                this.initializeFromResponse();
            }
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Initialize the scenario using the response information
     */
    public initializeFromResponse(): void {
        this.oaNombreArchivo.value =
            this.serviceResponse[this.oaNombreArchivo.nameInRequest];
        this.oaArchivo.value =
            this.serviceResponse[this.oaArchivo.nameInRequest];
    }

    /**
     * Returns the context information
     */
    public override getContext(): any {
        return this.context;
    }
}
