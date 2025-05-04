import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob, FieldOVLense } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
@Component({
    selector: 'imes-familianovedad-siu-tfirmartitular',
    templateUrl: './siu_tfirmartitular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTFIRMARTITULARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFamiliaNovedad: FieldOVLense;
    public ptupuatrImagenFirma: FieldBlob;
    public ptupuatrLatitud: Field;
    public ptupuatrLongitud: Field;
    public ptuTexto: Field;

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
        this.idXML = 'Clas_1581424574464890Ser_9UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutfirmartitular;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TFIRMARTITULAR';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TFIRMARTITULAR',
            'Firma titular');

        // Create inbound argument components
        this.puthisFamiliaNovedad = new FieldOVLense(this.langMng);
        this.ptupuatrImagenFirma = new FieldBlob(this.langMng);
        this.ptupuatrLatitud = new Field(this.langMng);
        this.ptupuatrLongitud = new Field(this.langMng);
        this.ptuTexto = new Field(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFamiliaNovedad.nameInRequest = 'p_thisfamilianovedad';
        this.puthisFamiliaNovedad.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TFIRMARTITULAR_inArg_p_thisFamiliaNovedad',
            'Familia');
        this.puthisFamiliaNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFamiliaNovedad.mandatory = true;
        this.puthisFamiliaNovedad.dataType = ModelConstants.Familianovedad.name;
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.puthisFamiliaNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisFamiliaNovedad.assignCSS();
        this.fields.push(this.puthisFamiliaNovedad);

        this.ptupuatrImagenFirma.nameInRequest = 'pt_p_atrimagenfirma';
        this.ptupuatrImagenFirma.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TFIRMARTITULAR_inArg_pt_p_atrImagenFirma',
            'Firma');
        this.ptupuatrImagenFirma.mandatory = false;
        this.ptupuatrImagenFirma.dataType = Field.dtBlob;
        this.ptupuatrImagenFirma.assignCSS();
        this.fields.push(this.ptupuatrImagenFirma);

        this.ptupuatrLatitud.nameInRequest = 'pt_p_atrlatitud';
        this.ptupuatrLatitud.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TFIRMARTITULAR_inArg_pt_p_atrLatitud',
            'Latitud');
        this.ptupuatrLatitud.mandatory = false;
        this.ptupuatrLatitud.dataType = Field.dtString;
        this.ptupuatrLatitud.maxLength = 25;
        this.ptupuatrLatitud.assignCSS();
        this.fields.push(this.ptupuatrLatitud);

        this.ptupuatrLongitud.nameInRequest = 'pt_p_atrlongitud';
        this.ptupuatrLongitud.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TFIRMARTITULAR_inArg_pt_p_atrLongitud',
            'Longitud');
        this.ptupuatrLongitud.mandatory = false;
        this.ptupuatrLongitud.dataType = Field.dtString;
        this.ptupuatrLongitud.maxLength = 25;
        this.ptupuatrLongitud.assignCSS();
        this.fields.push(this.ptupuatrLongitud);

        this.ptuTexto.nameInRequest = 'pt_texto';
        this.ptuTexto.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TFIRMARTITULAR_inArg_pt_Texto',
            'Aviso');
        this.ptuTexto.mandatory = false;
        this.ptuTexto.dataType = Field.dtText;
        this.ptuTexto.assignCSS();
        this.fields.push(this.ptuTexto);

        navigator.geolocation.getCurrentPosition( (pos: any) => {
            if (pos?.coords) {
                this.ptupuatrLatitud.value = pos.coords.latitude;
                this.ptupuatrLongitud.value = pos.coords.longitude;
            }
        });
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_Texto
            const defValptuTexto = new Promise<void>((resolveDefValue) => {
                let rtnFuncptuTexto0: any;
                this.usrFunc.fu_GetTextoAvisoFirma(1).then((res) => {
                    rtnFuncptuTexto0 = res;

                    this.ptuTexto.setValue(rtnFuncptuTexto0);
                    resolveDefValue();
                });
            });
            promiseArr.push(defValptuTexto);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['FamiliaNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFamiliaNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', true);
            this.puthisFamiliaNovedad.enabled = false;
            this.executeDependecyRulesputhisfamilianovedad('SetEnabled', true);
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFamiliaNovedad'.toLowerCase()) {
            this.puthisFamiliaNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFamiliaNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisfamilianovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisfamilianovedad();
        }
        if ('SetValue' === event && this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisFamiliaNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFamiliaNovedad argument
     */
    private setSuppInfoputhisfamilianovedad(): void {

        const displaySetIC = 'NumFamilia';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Familianovedad.name,
                            value.oid, displaySetIC, [Field.dtNat]);
                    }
                }
                this.setOidFieldsValueputhisFamiliaNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFamiliaNovedad,
                'id_FamiliaNovedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisFamiliaNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedadActions(): void {
        const varputhisfamilianovedad = this.getFirstInstanceFromCache(this.puthisFamiliaNovedad);
        // v <> NULL
        if (varputhisfamilianovedad && !this.util.isNull(varputhisfamilianovedad)) {
            // p_thisFamiliaNovedad.SetVisible( FALSE )
            this.puthisFamiliaNovedad.visible = false;
            // pt_Texto.SetActive( FALSE )
            this.ptuTexto.enabled = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisFamiliaNovedad lense argument
    */
    private setOidFieldsValueputhisFamiliaNovedad(): void {
        if (this.puthisFamiliaNovedad.getSelectedInstances().length > 0) {
            if (this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
                this.puthisFamiliaNovedad.oidFields = [null];
                this.puthisFamiliaNovedad.editorsEnabled = false;
                this.puthisFamiliaNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisFamiliaNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisFamiliaNovedad.editorsEnabled = true;
                this.puthisFamiliaNovedad.oidFields[0] = this.puthisFamiliaNovedad.getSelectedInstances()[0].oid.id_familianovedad;
                this.puthisFamiliaNovedad.supplementaryInfo = this.puthisFamiliaNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisFamiliaNovedad.oidFields = Array(1);
            this.puthisFamiliaNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisFamiliaNovedad lense argument
     */
    public onputhisfamilianovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisFamiliaNovedad.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisFamiliaNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_familianovedad: this.puthisFamiliaNovedad.oidFields[0]
            };
            this.puthisFamiliaNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, oid,
                'NumFamilia');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisFamiliaNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Familianovedad.name, value.oid)) {
                        this.puthisFamiliaNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisFamiliaNovedad.alias));
                        this.puthisFamiliaNovedad.cleanSelectedInstances();
                        this.puthisFamiliaNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisFamiliaNovedad argument value
     */
    public cleanputhisfamilianovedad(): void {
        this.clearValidationMessages();
        this.puthisFamiliaNovedad.clean();
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFamiliaNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFamiliaNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FamiliaNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
