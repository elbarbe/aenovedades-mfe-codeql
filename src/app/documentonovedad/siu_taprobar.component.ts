import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldOVLenseSearch } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-documentonovedad-siu-taprobar',
    templateUrl: './siu_taprobar.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoNovedadSIUuTAPROBARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisDocumentoNovedad: FieldOVLenseSearch;
    public ptupuatrObservacions: Field;

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
        this.idXML = 'Clas_1582535933952300Ser_10UIServ_1';
        this.className = ModelConstants.Documentonovedad.name;
        this.iuName = ModelConstants.Documentonovedad.siuutaprobar;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TAPROBAR';
        this.title = this.langMng.translateText('cls_DocumentoNovedad_svc_TAPROBAR',
            'Aprobar');

        // Create inbound argument components
        this.puthisDocumentoNovedad = new FieldOVLenseSearch(this.langMng, this.util);
        this.ptupuatrObservacions = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisDocumentoNovedad.nameInRequest = 'p_thisdocumentonovedad';
        this.puthisDocumentoNovedad.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TAPROBAR_inArg_p_thisDocumentoNovedad',
            'Documento');
        this.puthisDocumentoNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisDocumentoNovedad.mandatory = true;
        this.puthisDocumentoNovedad.dataType = ModelConstants.Documentonovedad.name;
        this.puthisDocumentoNovedad.maxLength = 255;
        this.puthisDocumentoNovedad.assignCSS();
        this.fields.push(this.puthisDocumentoNovedad);

        this.ptupuatrObservacions.nameInRequest = 'pt_p_atrobservacions';
        this.ptupuatrObservacions.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TAPROBAR_inArg_pt_p_atrObservacions',
            'Observaciones');
        this.ptupuatrObservacions.mandatory = false;
        this.ptupuatrObservacions.dataType = Field.dtString;
        this.ptupuatrObservacions.maxLength = 999;
        this.ptupuatrObservacions.assignCSS();
        this.fields.push(this.ptupuatrObservacions);
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['DocumentoNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisDocumentoNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.executeDependecyRulesputhisdocumentonovedad('SetValue', true);
            this.puthisDocumentoNovedad.enabled = false;
            this.executeDependecyRulesputhisdocumentonovedad('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisDocumentoNovedad'.toLowerCase()) {
            this.puthisDocumentoNovedad.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesputhisdocumentonovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisDocumentoNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisdocumentonovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisdocumentonovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisDocumentoNovedad argument
     */
    private setSuppInfoputhisdocumentonovedad(): void {

        const displaySetIC = 'Nombre';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisDocumentoNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Documentonovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.puthisDocumentoNovedad.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisDocumentoNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Documentonovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.puthisDocumentoNovedad.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }
    /**
     * Process the change in the p_thisDocumentoNovedad lense search argument
     */
    public onputhisdocumentonovedadChange(): void {
        this.executeLenseSearch(this.puthisDocumentoNovedad, ModelConstants.Documentonovedad.name, 'IC_DocumentoNovedad',
            []).then( (foundInstances: number) => {
            if (foundInstances === -1) {
                this.cleanputhisdocumentonovedad();
            }
            if (foundInstances === 1) {
                this.processputhisdocumentonovedadSelected(0);
            }
            this.changeDetectorRef.markForCheck();
        });
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the p_thisDocumentoNovedad lense search argument
     */
    public processputhisdocumentonovedadSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.puthisDocumentoNovedad.searchResults.length > index) {
            selectedInstance = this.puthisDocumentoNovedad.searchResults[index];
        }
        // Clean the result list
        this.puthisDocumentoNovedad.searchResults = [];
        if (selectedInstance) {
            if (!this.puthisDocumentoNovedad.allowMultiSelect) {
                this.puthisDocumentoNovedad.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.puthisDocumentoNovedad.addInstances(selectedInstance);
        }
        this.executeDependecyRulesputhisdocumentonovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the p_thisDocumentoNovedad lense search argument
     */
    public cleanputhisdocumentonovedad(): void {
        this.clearValidationMessages();
        this.puthisDocumentoNovedad.clean();
        this.executeDependecyRulesputhisdocumentonovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisDocumentoNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisDocumentoNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_DocumentoNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
