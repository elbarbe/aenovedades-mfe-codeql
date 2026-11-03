import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldBlob, FieldDefinedSelection, FieldOVLense, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
import { BHGestorAtomicUtil, RespuestaGestorAtomic } from '../bhcallutils/bhgestoratomicutil';
import { DocumentoNovedadServices } from './documentonovedad.services';
@Component({
    selector: 'imes-documentonovedad-siu-tcrearato',
    templateUrl: './siu_tcrearato.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoNovedadSIUuTCREARATOComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public ptupuatrDescripcion: Field;
    public ptupuatrTipo: FieldDefinedSelection;
    public ptupuExtension: Field;
    public ptUsuario: FieldOVPreload;
    public ptSolicitud: FieldOVLense;
    public ptIdDocGestor: Field;
    public ptNombre: Field;
    public pfFichero: FieldBlob;
    public ptNumSolicitud: Field;
    public ptNumIdentUsuario: Field;

    private file: any;
    private docSrv: DocumentoNovedadServices;

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
        private gestorUtil: BHGestorAtomicUtil,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1582535933952300Ser_23UIServ_1';
        this.className = ModelConstants.Documentonovedad.name;
        this.iuName = ModelConstants.Documentonovedad.siuutcrearato;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.serviceName = 'TCREARATO';
        this.title = this.langMng.translateText('cls_DocumentoNovedad_svc_TCREARATO',
            'Subir documento');

        // Create inbound argument components
        this.ptupuatrDescripcion = new Field(this.langMng);
        this.ptupuatrTipo = new FieldDefinedSelection(this.langMng);
        this.ptupuExtension = new Field(this.langMng);
        this.ptUsuario = new FieldOVPreload(this.langMng);
        this.ptSolicitud = new FieldOVLense(this.langMng);
        this.ptIdDocGestor = new Field(this.langMng);
        this.ptNombre = new Field(this.langMng);
        this.pfFichero = new FieldBlob(this.langMng);
        this.ptNumSolicitud = new Field(this.langMng);
        this.ptNumIdentUsuario = new Field(this.langMng);

        // Nos suscribimos al evento de cambio del fichero
        this.pfFichero.fileLoadComplete.subscribe( (data: any) => this.processLoadFileComplete(data));
        this.docSrv = new DocumentoNovedadServices(this.appGlobalInfo, this.util);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    private processLoadFileComplete(data: {success: boolean, message: string, file: any}): void {
        // Nos guardamos el fichero
        if (data.file) {
            this.file = data.file;
        } else {
            this.file = null;
        }
    }

    public override saveChanges(): void {

        // Comprobamos que tengamos seleccinado tan solo 1 fichero
        if (!this.file) {
            this.util.addErrorMessage('Debe seleccionar un archivo');
            return;
        }

        this.setShowWait(true);
        this.gestorUtil.subirArchivo(this.file,
            this.ptNombre.value,
            this.ptupuatrTipo.value == 2,
            this.ptNumIdentUsuario.value,
            this.ptNumSolicitud.value).then( (respuesta: RespuestaGestorAtomic) => {

                this.setShowWait(false);

                if (!respuesta.exito) {
                    this.util.addErrorMessage(respuesta.textoError);
                } else {
                    this.setShowWait(true);
                    this.changeDetectorRef.markForCheck();
                    this.docSrv.tCREARATO(this.ptupuatrDescripcion.value,
                        this.ptupuatrTipo.value,
                        respuesta.extensionArchivo,
                        this.ptUsuario.getSingleValue(),
                        this.ptSolicitud.getSingleValue(),
                        respuesta.idGestor,
                        respuesta.nombreFichero,
                        null,null,null).then( () => {
                            this.processCancel(true);
                        }).catch( (err: Error) => {
                            this.util.addErrorMessage(err);
                            this.setShowWait(false);
                            this.changeDetectorRef.markForCheck();
                        }
                    );
                }
                this.changeDetectorRef.markForCheck();
            }).catch( (err: Error) => {
                this.util.addErrorMessage(err);
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
            });
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.ptupuatrDescripcion.nameInRequest = 'pt_p_atrdescripcion';
        this.ptupuatrDescripcion.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_pt_p_atrDescripcion',
            'Descripción');
        this.ptupuatrDescripcion.mandatory = false;
        this.ptupuatrDescripcion.dataType = Field.dtString;
        this.ptupuatrDescripcion.maxLength = 150;
        this.ptupuatrDescripcion.assignCSS();
        this.fields.push(this.ptupuatrDescripcion);

        this.ptupuatrTipo.nameInRequest = 'pt_p_atrtipo';
        this.ptupuatrTipo.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_pt_p_atrTipo',
            'Tipo');
        this.ptupuatrTipo.mandatory = false;
        this.ptupuatrTipo.dataType = Field.dtNat;
        this.ptupuatrTipo.options = DefinedSelections.DS_TIPODOCUMENTOG;
        this.ptupuatrTipo.assignCSS();
        this.fields.push(this.ptupuatrTipo);

        this.ptupuExtension.nameInRequest = 'pt_p_extension';
        this.ptupuExtension.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_pt_p_Extension',
            'Extensión');
        this.ptupuExtension.mandatory = false;
        this.ptupuExtension.dataType = Field.dtString;
        this.ptupuExtension.maxLength = 15;
        this.ptupuExtension.assignCSS();
        this.fields.push(this.ptupuExtension);

        this.ptUsuario.nameInRequest = 'ptusuario';
        this.ptUsuario.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptUsuario',
            'Usuario');
        this.ptUsuario.mandatory = false;
        this.ptUsuario.dataType = ModelConstants.Usuarionovedad.name;
        this.ptUsuario.maxLength = 210;
        this.ptUsuario.assignCSS();
        this.fields.push(this.ptUsuario);

        this.ptSolicitud.nameInRequest = 'ptsolicitud';
        this.ptSolicitud.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptSolicitud',
            'Solicitud');
        this.ptSolicitud.mandatory = true;
        this.ptSolicitud.dataType = ModelConstants.Solicitudnovedad.name;
        this.ptSolicitud.oidFields = Array(1);
        this.ptSolicitud.oidFieldsTypes = [Field.dtAuto];
        this.ptSolicitud.assignCSS();
        this.fields.push(this.ptSolicitud);

        this.ptIdDocGestor.nameInRequest = 'ptiddocgestor';
        this.ptIdDocGestor.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptIdDocGestor',
            'ptIdDocGestor');
        this.ptIdDocGestor.mandatory = true;
        this.ptIdDocGestor.dataType = Field.dtString;
        this.ptIdDocGestor.maxLength = 255;
        this.ptIdDocGestor.assignCSS();
        this.fields.push(this.ptIdDocGestor);

        this.ptNombre.nameInRequest = 'ptnombre';
        this.ptNombre.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptNombre',
            'ptNombre');
        this.ptNombre.mandatory = true;
        this.ptNombre.dataType = Field.dtString;
        this.ptNombre.maxLength = 255;
        this.ptNombre.assignCSS();
        this.fields.push(this.ptNombre);

        this.pfFichero.nameInRequest = 'pffichero';
        this.pfFichero.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_pfFichero',
            'Fichero');
        this.pfFichero.mandatory = false;
        this.pfFichero.dataType = Field.dtBlob;
        this.pfFichero.assignCSS();
        this.fields.push(this.pfFichero);

        this.ptNumSolicitud.nameInRequest = 'ptnumsolicitud';
        this.ptNumSolicitud.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptNumSolicitud',
            'Num Radicado');
        this.ptNumSolicitud.mandatory = false;
        this.ptNumSolicitud.dataType = Field.dtInt;
        this.ptNumSolicitud.assignCSS();
        this.fields.push(this.ptNumSolicitud);

        this.ptNumIdentUsuario.nameInRequest = 'ptnumidentusuario';
        this.ptNumIdentUsuario.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TCREARATO_inArg_ptNumIdentUsuario',
            'Num. Identificación');
        this.ptNumIdentUsuario.mandatory = false;
        this.ptNumIdentUsuario.dataType = Field.dtString;
        this.ptNumIdentUsuario.maxLength = 30;
        this.ptNumIdentUsuario.assignCSS();
        this.fields.push(this.ptNumIdentUsuario);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrTipo
            const defValptupuatrTipo = new Promise<void>((resolveDefValue) => {
                this.ptupuatrTipo.setValue(2);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrTipo);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'Usuario') {
                this.ptUsuario.setValue(lastRoleOid);
                this.executeDependecyRulesptusuario('SetValue', true);
                this.ptUsuario.enabled = false;
                this.executeDependecyRulesptusuario('SetEnabled', true);
            }
            if (lastRole === 'Solicitud') {
                this.ptSolicitud.setValue(lastRoleOid);
                this.setOidFieldsValueptSolicitud();
                this.executeDependecyRulesptsolicitud('SetValue', true);
                this.ptSolicitud.enabled = false;
                this.executeDependecyRulesptsolicitud('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of field ptUsuario
     */
    private loadPreloadptusuario(): void {

        if (this.ptSolicitud.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('DocumentoNovedad_TCREARATO_ptUsuario_NavFilter0');
            this.util.searchPreload('UsuarioNovedad', 'IC_UsuarioNovedad', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptUsuario.loadPreload(response.results);
                    } else {
                        this.ptUsuario.loadPreload([]);
                    }
                    if (this.ptUsuario.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptusuario('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptUsuario.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptUsuario.getSelectedInstances().length > 0) {
                this.ptUsuario.cleanPreload();
                this.executeDependecyRulesptusuario('SetValue', true);
            } else {
                this.ptUsuario.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'ptSolicitud'.toLowerCase()) {
            this.ptSolicitud.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueptSolicitud();
            this.executeDependecyRulesptsolicitud('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for pt_p_atrTipo argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrtipo(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrTipo();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrTipo();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrTipo argument
     */
    private executeDependecyRules1ptupuatrTipo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrTipoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrTipo argument
     */
    private executeDependecyRules1ptupuatrTipoActions(): void {
        // v <> NULL AND v = 1 AND ptNumIdentUsuario <> NULL
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 1) && !this.util.isNull(this.ptNumIdentUsuario.value)) {
            // ptNombre.SetValue( "DOCIDENTIFICACION" + ptNumIdentUsuario )
            this.ptNombre.setValue('DOCIDENTIFICACION' + this.ptNumIdentUsuario.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrTipo argument
     */
    private executeDependecyRules2ptupuatrTipo(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrTipoActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrTipo argument
     */
    private executeDependecyRules2ptupuatrTipoActions(): void {
        // v <> NULL AND v = 2 AND ptNumSolicitud <> NULL
        if (!this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 2) &&
            !this.util.isNull(this.util.getInt(this.ptNumSolicitud.value))) {
            // ptNombre.SetValue( "DOCSOLICITUD" + IntToStr( ptNumSolicitud ) + "_" +
            // IntToStr( getYear( systemDate() ) ) +
            // IntToStr( getMonth( systemDate() ) ) +
            // IntToStr( getDay( systemDate() ) ) +
            // IntToStr( getHour( systemTime( ) )) +
            // IntToStr( getMinute( systemTime(  ) )) +
            // IntToStr( getSecond( systemTime(  ) )) )
            this.ptNombre.setValue('DOCSOLICITUD' + this.stdFun.intToStr(this.util.getInt(this.ptNumSolicitud.value)) + '_' +
                this.stdFun.intToStr(this.stdFun.getYear(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getMonth(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getDay(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getHour(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getMinute(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getSecond(this.stdFun.systemtime())));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrTipo argument
     */
    public onptupuatrtipoChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrtipo('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptusuario(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptUsuario.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptUsuario();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptUsuario argument
     */
    private executeDependecyRules1ptUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptUsuario,
                'numidentificacion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptUsuario argument
     */
    private executeDependecyRules1ptUsuarioActions(): void {
        const varptusuario = this.getFirstInstanceFromCache(this.ptUsuario);
        // v <> NULL
        if (varptusuario && !this.util.isNull(varptusuario)) {
            // ptNumIdentUsuario.SetValue( v.numidentificacion )
            this.ptNumIdentUsuario.setValue(varptusuario.get('numidentificacion'));
            this.executeDependecyRulesptnumidentusuario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptUsuario argument
     */
    private executeDependecyRules2ptUsuario(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptUsuario,
                'id_UsuarioNovedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptUsuarioActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptUsuario argument
     */
    private executeDependecyRules2ptUsuarioActions(): void {
        const varptusuario = this.getFirstInstanceFromCache(this.ptUsuario);
        // v = NULL
        if (varptusuario && this.util.isNull(varptusuario)) {
            // ptNumIdentUsuario.SetValue( NULL )
            this.ptNumIdentUsuario.setValue(null);
            this.executeDependecyRulesptnumidentusuario('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptUsuario argument
     */
    public onptusuarioChange(): void {
        this.executeDependecyRulesptusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptsolicitud(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptsolicitud();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptusuario();
        }
        if ('SetValue' === event && this.ptSolicitud.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptSolicitud();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptSolicitud();
        }
        // Rule 3
        if ('SetValue' === event) {
            this.executeDependecyRules3ptSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the ptSolicitud argument
     */
    private setSuppInfoptsolicitud(): void {

        const displaySetIC = 'DrvNumRadicadoStr';
        let numberMissingSupInfo = 0;
        for (const value of this.ptSolicitud.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueptSolicitud();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptSolicitud.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Solicitudnovedad.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.setOidFieldsValueptSolicitud();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for ptSolicitud argument
     */
    private executeDependecyRules1ptSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptSolicitud,
                'numradicado');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptSolicitud argument
     */
    private executeDependecyRules1ptSolicitudActions(): void {
        const varptsolicitud = this.getFirstInstanceFromCache(this.ptSolicitud);
        // v <> NULL
        if (varptsolicitud && !this.util.isNull(varptsolicitud)) {
            // ptSolicitud.SetVisible( FALSE )
            this.ptSolicitud.visible = false;
            // ptNumSolicitud.SetValue( v.NumRadicado )
            this.ptNumSolicitud.setValue(this.util.getInt(varptsolicitud.get('numradicado')));
            this.executeDependecyRulesptnumsolicitud('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for ptSolicitud argument
     */
    private executeDependecyRules2ptSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptSolicitud,
                'novedad.reqdocpersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for ptSolicitud argument
     */
    private executeDependecyRules2ptSolicitudActions(): void {
        const varptsolicitud = this.getFirstInstanceFromCache(this.ptSolicitud);
        // v <> NULL AND v.novedad.reqdocpersona = TRUE
        if (varptsolicitud && !this.util.isNull(varptsolicitud) &&
            this.util.valueEquals(this.util.getBool(varptsolicitud.get('novedad.reqdocpersona')), true)) {
            // ptUsuario.SetVisible( TRUE )
            this.ptUsuario.visible = true;
            // ptUsuario.SetMandatory( TRUE )
            this.ptUsuario.mandatory = true;
            // pt_p_atrTipo.SetVisible( TRUE )
            this.ptupuatrTipo.visible = true;
            // pt_p_atrTipo.SetMandatory( TRUE )
            this.ptupuatrTipo.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 3 for ptSolicitud argument
     */
    private executeDependecyRules3ptSolicitud(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptSolicitud,
                'novedad.reqdocpersona');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules3ptSolicitudActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 3 for ptSolicitud argument
     */
    private executeDependecyRules3ptSolicitudActions(): void {
        const varptsolicitud = this.getFirstInstanceFromCache(this.ptSolicitud);
        // v <> NULL AND v.novedad.reqdocpersona = FALSE
        if (varptsolicitud && !this.util.isNull(varptsolicitud) &&
            this.util.valueEquals(this.util.getBool(varptsolicitud.get('novedad.reqdocpersona')), false)) {
            // ptUsuario.SetVisible( FALSE )
            this.ptUsuario.visible = false;
            // ptUsuario.SetMandatory( FALSE )
            this.ptUsuario.mandatory = false;
            // ptUsuario.SetValue( NULL )
            this.ptUsuario.setValue(null);
            this.executeDependecyRulesptusuario('SetValue', true);
            // pt_p_atrTipo.SetVisible( FALSE )
            this.ptupuatrTipo.visible = false;
            // pt_p_atrTipo.SetMandatory( FALSE )
            this.ptupuatrTipo.mandatory = false;
            // pt_p_atrTipo.SetValue( 2 )
            this.ptupuatrTipo.setValue(2);
            this.executeDependecyRulesptupuatrtipo('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of ptSolicitud lense argument
    */
    private setOidFieldsValueptSolicitud(): void {
        if (this.ptSolicitud.getSelectedInstances().length > 0) {
            if (this.ptSolicitud.getSelectedInstances().length > 1) {
                this.ptSolicitud.oidFields = [null];
                this.ptSolicitud.editorsEnabled = false;
                this.ptSolicitud.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.ptSolicitud.getSelectedInstances().length.toString());
            } else {
                this.ptSolicitud.editorsEnabled = true;
                this.ptSolicitud.oidFields[0] = this.ptSolicitud.getSelectedInstances()[0].oid.id;
                this.ptSolicitud.supplementaryInfo = this.ptSolicitud.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.ptSolicitud.oidFields = Array(1);
            this.ptSolicitud.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the ptSolicitud lense argument
     */
    public onptsolicitudChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.ptSolicitud.oidFields) {
            if (this.util.isNull(field)) {
                fieldsHasValue = false;
                break;
            }
        }

        this.ptSolicitud.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id: this.ptSolicitud.oidFields[0]
            };
            this.ptSolicitud.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Solicitudnovedad.name, oid,
                'DrvNumRadicadoStr');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.ptSolicitud.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Solicitudnovedad.name, value.oid)) {
                        this.ptSolicitud.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.ptSolicitud.alias));
                        this.ptSolicitud.cleanSelectedInstances();
                        this.ptSolicitud.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesptsolicitud('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean ptSolicitud argument value
     */
    public cleanptsolicitud(): void {
        this.clearValidationMessages();
        this.ptSolicitud.clean();
        this.ptSolicitud.oidFields = Array(1);
        this.executeDependecyRulesptsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptNumSolicitud argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptnumsolicitud(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptNumSolicitud();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptNumSolicitud argument
     */
    private executeDependecyRules1ptNumSolicitud(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptNumSolicitudActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptNumSolicitud argument
     */
    private executeDependecyRules1ptNumSolicitudActions(): void {
        // v <> NULL AND pt_p_atrTipo <> NULL AND pt_p_atrTipo = 2
        if (!this.util.isNull(this.util.getInt(this.ptNumSolicitud.value)) &&
            !this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 2)) {
            // ptNombre.SetValue( "DOCSOLICITUD" + IntToStr( v ) + "_" +
            // IntToStr( getYear( systemDate() ) ) +
            // IntToStr( getMonth( systemDate() ) ) +
            // IntToStr( getDay( systemDate() ) ) +
            // IntToStr( getHour( systemTime( ) )) +
            // IntToStr( getMinute( systemTime(  ) )) +
            // IntToStr( getSecond( systemTime(  ) )) )
            this.ptNombre.setValue('DOCSOLICITUD' + this.stdFun.intToStr(this.util.getInt(this.ptNumSolicitud.value)) + '_' +
                this.stdFun.intToStr(this.stdFun.getYear(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getMonth(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getDay(this.stdFun.systemDate())) +
                this.stdFun.intToStr(this.stdFun.getHour(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getMinute(this.stdFun.systemtime())) +
                this.stdFun.intToStr(this.stdFun.getSecond(this.stdFun.systemtime())));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptNumSolicitud argument
     */
    public onptnumsolicitudChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptnumsolicitud('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptNumIdentUsuario argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptnumidentusuario(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptNumIdentUsuario();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptNumIdentUsuario argument
     */
    private executeDependecyRules1ptNumIdentUsuario(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptNumIdentUsuarioActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptNumIdentUsuario argument
     */
    private executeDependecyRules1ptNumIdentUsuarioActions(): void {
        // v <> NULL AND pt_p_atrTipo <> NULL AND pt_p_atrTipo = 1
        if (!this.util.isNull(this.ptNumIdentUsuario.value) && !this.util.isNull(this.util.getInt(this.ptupuatrTipo.value)) &&
            this.util.valueEquals(this.util.getInt(this.ptupuatrTipo.value), 1)) {
            // ptNombre.SetValue( "DOCIDENTIFICACION" + v )
            this.ptNombre.setValue('DOCIDENTIFICACION' + this.ptNumIdentUsuario.value);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptNumIdentUsuario argument
     */
    public onptnumidentusuarioChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptnumidentusuario('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('ptSolicitud'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptSolicitud.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_SolicitudNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
    }
}
