import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { AccNavItem } from '../common/queryIUElements';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

export class SolicitudNovedadIIUuSolNovContratanteComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContraDrvIdentificacion: Field;
    public dseContraDrvNombreCompleto: Field;
    public dseContraNuevaRazonSocial: Field;

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
        this.idXML = 'Clas_1581421428736234UIInst_2';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_iiu_IIU_SolNovContratante',
            'Contratante');
        this.queryURL = '/api/SolicitudNovedadApi/GetPopulationDynamic';

        this.dseContraDrvIdentificacion = new Field(this.langMng);
        this.dseContraDrvNombreCompleto = new Field(this.langMng);
        this.dseContraNuevaRazonSocial = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContraDrvIdentificacion.nameInRequest = 'contradrvidentificacion';
        this.dseContraDrvIdentificacion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovContratante_item_Clas_1581421428736234CjtoVis_3ICtjoVis_11',
            'Identificación');
        this.dseContraDrvIdentificacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_3ICtjoVis_11', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContraDrvIdentificacion.enabled = false;
        this.dseContraDrvIdentificacion.mandatory = false;
        this.dseContraDrvIdentificacion.dataType = Field.dtString;
        this.dseContraDrvIdentificacion.maxLength = 70;
        this.dseContraDrvIdentificacion.assignCSS();
        this.fields.push(this.dseContraDrvIdentificacion);

        this.dseContraDrvNombreCompleto.nameInRequest = 'contradrvnombrecompleto';
        this.dseContraDrvNombreCompleto.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovContratante_item_Clas_1581421428736234CjtoVis_3ICtjoVis_10',
            'Nombre completo');
        this.dseContraDrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_3ICtjoVis_10', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContraDrvNombreCompleto.enabled = false;
        this.dseContraDrvNombreCompleto.mandatory = false;
        this.dseContraDrvNombreCompleto.dataType = Field.dtString;
        this.dseContraDrvNombreCompleto.maxLength = 250;
        this.dseContraDrvNombreCompleto.assignCSS();
        this.fields.push(this.dseContraDrvNombreCompleto);

        this.dseContraNuevaRazonSocial.nameInRequest = 'contranuevarazonsocial';
        this.dseContraNuevaRazonSocial.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovContratante_item_Clas_1581421428736234CjtoVis_3ICtjoVis_1',
            'Nueva Razón Social');
        this.dseContraNuevaRazonSocial.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_3ICtjoVis_1', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContraNuevaRazonSocial.enabled = false;
        this.dseContraNuevaRazonSocial.mandatory = false;
        this.dseContraNuevaRazonSocial.dataType = Field.dtString;
        this.dseContraNuevaRazonSocial.maxLength = 200;
        this.dseContraNuevaRazonSocial.assignCSS();
        this.fields.push(this.dseContraNuevaRazonSocial);

    }

    /**
     * Initialize the action items
     */
    public override initializeActions(): void {
        let accItem: AccNavItem;
        accItem = new AccNavItem();
        accItem.id = 0;
        accItem.idXML = 'Clas_1581421428736234AccOfer_1ElemAcc_1';
        accItem.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_act_A_SolNovContratante_item_Clas_1581421428736234AccOfer_1ElemAcc_1',
            'Nueva razón social');
        accItem.nounVerb = true;
        accItem.multiSelection = false;
        accItem.agents = [ModelConstants.Admin.name, ModelConstants.Superadmin.name, ModelConstants.Asesor.name,
            ModelConstants.Mesadeapoyo.name];
        accItem.targetClass = ModelConstants.Solicitudnovedad.name;
        accItem.targetUI = ModelConstants.Solicitudnovedad.siuumodificarnuevonombre;
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['novedad.aliasnovedad'] });
        accItem.preconditionAttributes.push(
            { agents: [],
              attributes: ['tipoidentcontratante.nit'] });
        this.actions.push(accItem);

    }

    /**
     * Evaluate in advance the associated service preconditions to the action element
     * @param actionId Action element identification
     * @param rows Rows to be check
     */
    public override checkPreconditionInAdvanceForRows(actionId: number, rows: any[]): boolean {
        let isEnabled = true;
        for (const row of rows) {
            if (actionId === 0) {
                isEnabled = this.checkPrecondicionInAdvanceNum0(row);
            }
        }
        return isEnabled;
    }

    /**
     * Evaluate in advance the preconditions of the action element number 0
     * @param row Instance data
     */
    private checkPrecondicionInAdvanceNum0(row: any): boolean {
        // Novedad.AliasNovedad = "CR"
        if (!(this.util.valueEquals(this.getRowData(row, 'novedad-aliasnovedad'), 'CR'))) {
            return false;
        }
        // TipoIdentContratante.NIT = true
        if (!(this.util.valueEquals(this.util.getBool(this.getRowData(row, 'tipoidentcontratante-nit')), true))) {
            return false;
        }
        return true;
    }
}
