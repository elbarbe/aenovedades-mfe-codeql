import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { DisplaySetItem, AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractPIU } from '../common/abstractPIU';
import { DefinedSelections } from '../common/definedSelection';
import { Field } from '../common/baseIUElements';
import { LanguageMng } from '../common/languageMng';
import { StandardFunctions } from '../common/standardFunctions';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

import { DocumentoNovedadServices } from './documentonovedad.services';

@Component({
    selector: 'imes-documentonovedad-piu-documentonovedad',
    templateUrl: './piu_documentonovedad.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentoNovedadPIUuDocumentoNovedadComponent extends AbstractPIU implements OnInit {
    /** Constants for display set item aliases */
    private readonly dsfechasubida = 'Fecha subida';
    private readonly dsusuarioddrvidentificacion = 'Identificación Usuario';
    private readonly dsusuarioddrvnombrecompleto = 'Nombre Usuario';
    private readonly dstipo = 'Tipo';
    private readonly dsestado = 'Estado';
    private readonly dsnombre = 'Nombre Archivo';
    private readonly dsdescripcion = 'Descripción';

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
        this.idXML = 'Clas_1582535933952300UIPobCl_1';
        this.className = ModelConstants.Documentonovedad.name;
        this.iuName = ModelConstants.Documentonovedad.piuudocumentonovedad;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_DocumentoNovedad_piu_PIU_DocumentoNovedad',
            'Documentos');
        this.queryURL = '/api/DocumentoNovedadApi/GetPopulationDynamic';
        this.paginationInClient = false;
    }

    /**
     * It is the main component. Process the initial actions
     */
    public ngOnInit(): void {
        this.myngOnInit();
    }

    public override doAction(actionId: number): void {

        const action = this.getActionById(actionId);
        if (action.targetClass === ModelConstants.Documentonovedad.name &&
            action.targetUI === ModelConstants.Documentonovedad.siuudescargardocumentoato) {
            // Llamamos al servicio
            const docSrv = new DocumentoNovedadServices(this.appGlobalInfo, this.util);
            this.setShowWait(true);
            docSrv.descargarDocumentoATO(this.getSelectedOids()[0]).then( ( respuesta: {oaurldescarga: string}) => {
                this.setShowWait(false);
                if (respuesta && respuesta.oaurldescarga) {
                    window.open(respuesta.oaurldescarga, '_blank');
                }
                this.changeDetectorRef.markForCheck();
            }).catch( (err: Error) => {
                this.setShowWait(false);
                this.util.addErrorMessage(err);
                this.changeDetectorRef.markForCheck();
            });

        } else {
            super.doAction(actionId);
        }
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        let dsItem: DisplaySetItem;

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_5';
        dsItem.name = 'fechasubida';
        dsItem.field = 'fechasubida';
        dsItem.type = Field.dtDatetime;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_5',
            this.dsfechasubida);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_8';
        dsItem.name = 'usuario.drvidentificacion';
        dsItem.field = 'usuario-drvidentificacion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 70;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_8',
            this.dsusuarioddrvidentificacion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_2';
        dsItem.name = 'usuario.drvnombrecompleto';
        dsItem.field = 'usuario-drvnombrecompleto';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 210;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_2',
            this.dsusuarioddrvnombrecompleto);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_1';
        dsItem.name = 'tipo';
        dsItem.field = 'tipo';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_1',
            this.dstipo);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_TIPODOCUMENTOG;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_4';
        dsItem.name = 'estado';
        dsItem.field = 'estado';
        dsItem.type = Field.dtNat;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_4',
            this.dsestado);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.options = DefinedSelections.DS_ESTADODOCSOLNOV;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_6';
        dsItem.name = 'nombre';
        dsItem.field = 'nombre';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 255;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_6',
            this.dsnombre);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        dsItem.linkIndex = 1;
        dsItem.linkIsAction = true;
        this.displaySet.push(dsItem);

        dsItem = new DisplaySetItem();
        dsItem.idXML = 'Clas_1582535933952300CjtoVis_1ICtjoVis_3';
        dsItem.name = 'descripcion';
        dsItem.field = 'descripcion';
        dsItem.type = Field.dtString;
        dsItem.maxLength = 150;
        dsItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_ds_DS_DocumentoNovedad_item_Clas_1582535933952300CjtoVis_1ICtjoVis_3',
            this.dsdescripcion);
        dsItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        this.displaySet.push(dsItem);
    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1582535933952300AccOfer_2ElemAcc_2';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_act_A_DocumentoNovedadMFE_item_Clas_1582535933952300AccOfer_2ElemAcc_2',
            'Subir documento');
        accItem.nounVerb = false;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentonovedad.name;
        accItem.targetUI = ModelConstants.Documentonovedad.siuutcrearato;

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 1;
        accItem.idXML = 'Clas_1582535933952300AccOfer_2ElemAcc_4';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_act_A_DocumentoNovedadMFE_item_Clas_1582535933952300AccOfer_2ElemAcc_4',
            'Previsualizar');
        accItem.nounVerb = true;
        accItem.multiSelection = true;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentonovedad.name;
        accItem.targetUI = ModelConstants.Documentonovedad.siuudescargardocumentoato;
        accItem.setNoShowProperties('descargarDocumentoATO', 'p_thisdocumentonovedad_oid', '', false);

        accItem.showInDefault = false;
        accItem.styleClass = 'accEditGrid';
        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 2;
        accItem.idXML = 'Clas_1582535933952300AccOfer_2ElemAcc_5';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_act_A_DocumentoNovedadMFE_item_Clas_1582535933952300AccOfer_2ElemAcc_5',
            'Aprobar');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentonovedad.name;
        accItem.targetUI = ModelConstants.Documentonovedad.siuutaprobar;
        accItem.setShowInModalProperties('imes-documentonovedad-siu-taprobar',
            this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TAPROBAR',
            'Aprobar'));

        this.actions.push(accItem);

        accItem = new AccNavItem();
        accItem.id = 3;
        accItem.idXML = 'Clas_1582535933952300AccOfer_2ElemAcc_6';
        accItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_act_A_DocumentoNovedadMFE_item_Clas_1582535933952300AccOfer_2ElemAcc_6',
            'Devolver');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Documentonovedad.name;
        accItem.targetUI = ModelConstants.Documentonovedad.siuutdevolver;
        accItem.setShowInModalProperties('imes-documentonovedad-siu-tdevolver',
            this.langMng.translateText(
            'cls_DocumentoNovedad_svc_TDEVOLVER',
            'Devolver'));

        this.actions.push(accItem);

    }

    /**
     * Initialize the navigation items
     */
    public override initializeNavigations(): void {
        let navItem: AccNavItem;
        navItem = new AccNavItem();
        navItem.id = 0;
        navItem.idXML = 'Clas_1582535933952300NavOfer_1ElemNav_1';
        navItem.alias = this.langMng.translateText(
            'cls_DocumentoNovedad_nav_N_DocumentoNovedad_item_Clas_1582535933952300NavOfer_1ElemNav_1',
            'Detalles');
        navItem.nounVerb = true;
        navItem.multiSelection = false;
        navItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Afiliaciones.name, ModelConstants.Gestor.name, ModelConstants.Mesadeapoyo.name];
        navItem.targetClass = ModelConstants.Logestadodocnov.name;
        navItem.targetUI = ModelConstants.Logestadodocnov.piuulogestadodocnov;
        navItem.rolePath = 'DocumentoNovedad';
        this.navigations.push(navItem);

    }

    /**
     * Initialize the order criterias
     */
    public override initializeOrderCriterias(): void {
        this.orderCriteria = '';
    }
}
