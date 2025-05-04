import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ModelConstants } from '../common/model.constants';
import { AbstractIIU } from '../common/abstractIIU';
import { Field } from '../common/baseIUElements';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';

/**
 * « Implements IIU IIU_SolNovContra_TipoTitular of SolicitudNovedad »
 */
export class SolicitudNovedadIIUuSolNovContrauTipoTitularComponent extends AbstractIIU {

    /** Display Set elements */
    public dseContraDrvIdentificacion: Field;
    public dseContraDrvNombreCompleto: Field;

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
        this.idXML = 'Clas_1581421428736234UIInst_7';
        this.className = ModelConstants.Solicitudnovedad.name;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'Gestor', 'MesaDeApoyo']));
        this.title = this.langMng.translateText('cls_SolicitudNovedad_iiu_IIU_SolNovContra_TipoTitular',
            'Contratante');
        this.queryURL = '/api/SolicitudNovedadApi/GetPopulationDynamic';

        this.dseContraDrvIdentificacion = new Field(this.langMng);
        this.dseContraDrvNombreCompleto = new Field(this.langMng);
    }

    /**
     * Initialize the display set elements
     */
    public override initializeDisplaySet(): void {
        this.dseContraDrvIdentificacion.nameInRequest = 'contradrvidentificacion';
        this.dseContraDrvIdentificacion.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovContra_TipoTitular_item_Clas_1581421428736234CjtoVis_8ICtjoVis_1',
            'Identificación');
        this.dseContraDrvIdentificacion.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_8ICtjoVis_1', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContraDrvIdentificacion.enabled = false;
        this.dseContraDrvIdentificacion.mandatory = false;
        this.dseContraDrvIdentificacion.dataType = Field.dtString;
        this.dseContraDrvIdentificacion.maxLength = 70;
        this.dseContraDrvIdentificacion.assignCSS();
        this.fields.push(this.dseContraDrvIdentificacion);

        this.dseContraDrvNombreCompleto.nameInRequest = 'contradrvnombrecompleto';
        this.dseContraDrvNombreCompleto.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_ds_DS_SolNovContra_TipoTitular_item_Clas_1581421428736234CjtoVis_8ICtjoVis_2',
            'Nombre completo');
        this.dseContraDrvNombreCompleto.visible = this.appGlobalInfo.getLoggedUserInfo().isAttributeVisible(this.idXML,
            'Clas_1581421428736234CjtoVis_8ICtjoVis_2', ['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor', 'MesaDeApoyo']);
        this.dseContraDrvNombreCompleto.enabled = false;
        this.dseContraDrvNombreCompleto.mandatory = false;
        this.dseContraDrvNombreCompleto.dataType = Field.dtString;
        this.dseContraDrvNombreCompleto.maxLength = 250;
        this.dseContraDrvNombreCompleto.assignCSS();
        this.fields.push(this.dseContraDrvNombreCompleto);

    }
}
