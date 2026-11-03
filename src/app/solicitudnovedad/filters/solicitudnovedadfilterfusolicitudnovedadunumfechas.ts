import { ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../../app.appglobalinfo';
import { Util } from '../../common/app.utils';
import { Field } from '../../common/baseIUElements';
import { AbstractFilter } from '../../common/abstractFilter';
import { StandardFunctions } from '../../common/standardFunctions';
import { LanguageMng } from '../../common/languageMng';
import { UserFunctions } from '../../common/userFunctions';
import { AbstractPIU } from '../../common/abstractPIU';

/**
 * « Manages the filter F_SolicitudNovedad_NumFechas of class SolicitudNovedad »
 */
export class SolicitudNovedadFilterFuSolicitudNovedaduNumFechas extends AbstractFilter {

    /** Filter variables */
    public vfNumRadicado: Field;
    public vfDesde: Field;
    public vfHasta: Field;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param usrFunc User functions
     */
    constructor(public override appGlobalInfo: AppGlobalInfo,
                public override util: Util,
                public override changeDetectorRef: ChangeDetectorRef,
                public langMng: LanguageMng,
                public stdFun: StandardFunctions, public usrFunc: UserFunctions) {
        super(appGlobalInfo, util, changeDetectorRef);
        this.title = this.langMng.translateText('cls_SolicitudNovedad_filter_F_SolicitudNovedad_NumFechas',
            'Por número y fecha');
        this.filterName = 'F_SolicitudNovedad_NumFechas';

        this.vfNumRadicado = new Field(this.langMng);
        this.vfDesde = new Field(this.langMng);
        this.vfHasta = new Field(this.langMng);
    }

    public override canBeExecuted(): boolean {
        if (!super.canBeExecuted()) {
            return false;
        }

        // Comprobamos que el periodo entre las fechas indicadas o supera el limite
        const diferencia = this.stdFun.daysDifferenceFromDate(this.vfDesde.value, this.vfHasta.value);
        let periodo = 30;
        if (this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes) {
            periodo = this.appGlobalInfo.getLoggedUserInfo().userCache?.periodoConsultaSolicitudes;
        }
        const canExe = diferencia <= periodo;

        if (!canExe) {
            this.util.addErrorMessage('Las fechas introducidas superan el periodo máximo de ' + 
                periodo + ' días permitido. Modifique las fechas para ajustarse al periodo indicado');
        }
        return canExe;
    }

    /**
     * Initialize the filter
     */
    public override initializeComponents(): void {

        this.vfNumRadicado.nameInRequest = 'vfnumradicado';
        this.vfNumRadicado.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_filter_F_SolicitudNovedad_NumFechas_fvar_vfNumRadicado',
            'Nº Radicado');
        this.vfNumRadicado.visible = true;
        this.vfNumRadicado.enabled = true;
        this.vfNumRadicado.mandatory = false;
        this.vfNumRadicado.dataType = Field.dtNat;
        this.vfNumRadicado.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfNumRadicado);

        this.vfDesde.nameInRequest = 'vfdesde';
        this.vfDesde.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_filter_F_SolicitudNovedad_NumFechas_fvar_vfDesde',
            'Desde ');
        this.vfDesde.visible = true;
        this.vfDesde.enabled = true;
        this.vfDesde.mandatory = false;
        this.vfDesde.dataType = Field.dtDate;
        this.vfDesde.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfDesde);

        this.vfHasta.nameInRequest = 'vfhasta';
        this.vfHasta.alias = this.langMng.translateText(
            'cls_SolicitudNovedad_filter_F_SolicitudNovedad_NumFechas_fvar_vfHasta',
            'Hasta');
        this.vfHasta.visible = true;
        this.vfHasta.enabled = true;
        this.vfHasta.mandatory = false;
        this.vfHasta.dataType = Field.dtDate;
        this.vfHasta.assignCSS(this.populationContainer !== undefined);
        this.variables.push(this.vfHasta);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): void {
        const promiseArr: Array<Promise<void>> = [];

        // vfDesde
        const defValvfDesde = new Promise<void>((resolveDefValue) => {
            let rtnFuncvfDesde0: any;
            this.usrFunc.fuGetFechaDesdeVarFiltro().then((res) => {
                rtnFuncvfDesde0 = res;

                this.vfDesde.setValue(this.util.getDate(rtnFuncvfDesde0));
                resolveDefValue();
            });
        });
        promiseArr.push(defValvfDesde);

        // vfHasta
        const defValvfHasta = new Promise<void>((resolveDefValue) => {
            this.vfHasta.setValue(this.stdFun.systemDate());
            resolveDefValue();
        });
        promiseArr.push(defValvfHasta);

        Promise.all(promiseArr).then((results: any[]) => {
            this.initialized = true;
            // Launch query
            if (this.populationContainer instanceof AbstractPIU) {
                const abstractPIU = this.populationContainer as AbstractPIU;
                if (abstractPIU.autoSearch && abstractPIU.activeFilter?.filterName === this.filterName) {
                    this.search();
                }
            } else {
                this.search();
            }
            this.changeDetectorRef.markForCheck();
        });
    }
}
