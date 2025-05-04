import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'SolicitudNovedad'
 */
export class SolicitudNovedadServices extends AbstractServices {

    private modificarNumMesesSrvName = 'modificarNumMeses';
    private modificarNuevoNombreSrvName = 'modificarNuevoNombre';
    private registrarObservacionesSrvName = 'registrarObservaciones';
    private dummyNavegarAModificarSrvName = 'dummyNavegarAModificar';
    private tCREARSrvName = 'TCREAR';
    private tADDFAMILIASrvName = 'TADDFAMILIA';
    private tMARCARCOMPLETADASrvName = 'TMARCARCOMPLETADA';
    private tCHGNUEVAPERIODICIDADSrvName = 'TCHGNUEVAPERIODICIDAD';
    private tCREAREXCEPCIONSrvName = 'TCREAREXCEPCION';
    private tFIRMARSrvName = 'TFIRMAR';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'SolicitudNovedad');
    }

    /**
     * Call to the filter 'F_SolicitudNovedad_NumFechas' in the backend
     * @param displaySetItems Attributes
     * @param orderCriteria Oreder criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     * @param vfNumRadicadoVar Variable vfNumRadicado
     * @param vfDesdeVar Variable vfDesde
     * @param vfHastaVar Variable vfHasta
     */
    public queryByFilterFuSolicitudNovedaduNumFechas(
        displaySetItems: string, orderCriteria: string, instancesPerPage: number, pageNumber: number,
        vfNumRadicadoVar: number | null, vfDesdeVar: Date | null, vfHastaVar: Date | null): Promise<QueryResponse> {
        const filter = this.util.getFilter('F_SolicitudNovedad_NumFechas');
        this.util.addFilterVariable(filter, 'vfnumradicado', vfNumRadicadoVar);
        this.util.addFilterVariable(filter, 'vfdesde', JsonUtility.date2Json(vfDesdeVar));
        this.util.addFilterVariable(filter, 'vfhasta', JsonUtility.date2Json(vfHastaVar));
        return this.queryByFilter(displaySetItems, orderCriteria, instancesPerPage, pageNumber, filter);
    }

    /**
     * @param oidProteccionDatos Oid of related 'ProteccionDatos' instance using the role 'ProteccionDatos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedProteccionDatos(
        oidProteccionDatos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidProteccionDatos, 'ProteccionDatos');
    }

    /**
     * @param oidFamilias Oid of related 'FamiliaNovedad' instance using the role 'Familias'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFamilias(
        oidFamilias: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFamilias, 'Familias');
    }

    /**
     * @param oidDocumentos Oid of related 'DocumentoNovedad' instance using the role 'Documentos'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedDocumentos(
        oidDocumentos: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidDocumentos, 'Documentos');
    }

    /**
     * Call to the service 'modificarNumMeses' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param puSCNumMesesInArg Mandatory argument 'p_SCNumMeses'
     */
    public modificarNumMeses(
        puthisSolicitudNovedadInArg: any, puSCNumMesesInArg: number): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, p_scnummeses: number
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg, p_scnummeses: puSCNumMesesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarNumMesesSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'modificarNuevoNombre' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param puContraNuevaRazonSocialInArg Mandatory argument 'p_ContraNuevaRazonSocial'
     */
    public modificarNuevoNombre(
        puthisSolicitudNovedadInArg: any, puContraNuevaRazonSocialInArg: string): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, p_contranuevarazonsocial: string
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg, p_contranuevarazonsocial: puContraNuevaRazonSocialInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarNuevoNombreSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'registrarObservaciones' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param puObservacionesInArg Optional argument 'p_Observaciones'
     */
    public registrarObservaciones(
        puthisSolicitudNovedadInArg: any, puObservacionesInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, p_observaciones: string | null
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg, p_observaciones: puObservacionesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.registrarObservacionesSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'dummyNavegarAModificar' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     */
    public dummyNavegarAModificar(
        puthisSolicitudNovedadInArg: any): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.dummyNavegarAModificarSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAR' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrPlanInArg Mandatory argument 'pt_p_agrPlan'. Oid of 'Planes' class
     * @param ptupuagrNovedadInArg Mandatory argument 'pt_p_agrNovedad'. Oid of 'Novedad' class
     * @param ptupuagrCausalInArg Optional argument 'pt_p_agrCausal'. Oid of 'Causal' class
     * @param ptupuatrFechaVigenciaInArg Mandatory argument 'pt_p_atrFechaVigencia'
     * @param ptupuatrNumContratoInArg Mandatory argument 'pt_p_atrNumContrato'
     * @param ptProductoInArg Mandatory argument 'ptProducto'. Oid of 'Productos' class
     * @param ptTipoNovedadInArg Mandatory argument 'ptTipoNovedad'. Oid of 'TipoNovedad' class
     * @param ptupuagrProteccionDatosInArg Mandatory argument 'pt_p_agrProteccionDatos'. Oid of 'ProteccionDatos' class
     */
    public tCREAR(
        ptupuagrPlanInArg: any, ptupuagrNovedadInArg: any, ptupuagrCausalInArg: any, ptupuatrFechaVigenciaInArg: Date,
        ptupuatrNumContratoInArg: string, ptProductoInArg: any, ptTipoNovedadInArg: any, ptupuagrProteccionDatosInArg: any):
        Promise<{
            oasolicitud: any
        }> {
        const request: {
            pt_p_agrplan_json: any, pt_p_agrnovedad_json: any, pt_p_agrcausal_json: any, pt_p_atrfechavigencia: string,
            pt_p_atrnumcontrato: string, ptproducto_json: any, pttiponovedad_json: any, pt_p_agrprotecciondatos_oid: any
        } = {
            pt_p_agrplan_json: ptupuagrPlanInArg ? JSON.stringify(ptupuagrPlanInArg) : '',
            pt_p_agrnovedad_json: ptupuagrNovedadInArg ? JSON.stringify(ptupuagrNovedadInArg) : '',
            pt_p_agrcausal_json: ptupuagrCausalInArg ? JSON.stringify(ptupuagrCausalInArg) : '',
            pt_p_atrfechavigencia: ptupuatrFechaVigenciaInArg ? JsonUtility.date2Json(ptupuatrFechaVigenciaInArg) : '',
            pt_p_atrnumcontrato: ptupuatrNumContratoInArg, ptproducto_json: ptProductoInArg ? JSON.stringify(ptProductoInArg) : '',
            pttiponovedad_json: ptTipoNovedadInArg ? JSON.stringify(ptTipoNovedadInArg) : '',
            pt_p_agrprotecciondatos_oid: ptupuagrProteccionDatosInArg
        };
        return new Promise<{
            oasolicitud: any
        }> ((resolve, reject) => {
            this.callService(this.tCREARSrvName, request).then((response: any) => {
                resolve({
                    oasolicitud: response.oasolicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDFAMILIA' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param ptNumFamiliaInArg Mandatory argument 'ptNumFamilia'
     */
    public tADDFAMILIA(
        puthisSolicitudNovedadInArg: any, ptNumFamiliaInArg: number): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, ptnumfamilia: number
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg, ptnumfamilia: ptNumFamiliaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDFAMILIASrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMARCARCOMPLETADA' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     */
    public tMARCARCOMPLETADA(
        puthisSolicitudNovedadInArg: any):
        Promise<{
            oanumerr: number
        }> {
        const request: {
            p_thissolicitudnovedad_oid: any
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg
        };
        return new Promise<{
            oanumerr: number
        }> ((resolve, reject) => {
            this.callService(this.tMARCARCOMPLETADASrvName, request).then((response: any) => {
                resolve({
                    oanumerr: response.oanumerr
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCHGNUEVAPERIODICIDAD' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param ptPeriodicidadInArg Mandatory argument 'ptPeriodicidad'. Oid of 'Periodicidad' class
     */
    public tCHGNUEVAPERIODICIDAD(
        puthisSolicitudNovedadInArg: any, ptPeriodicidadInArg: any): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, ptperiodicidad_json: any
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg,
            ptperiodicidad_json: ptPeriodicidadInArg ? JSON.stringify(ptPeriodicidadInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCHGNUEVAPERIODICIDADSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREAREXCEPCION' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrPlanInArg Mandatory argument 'pt_p_agrPlan'. Oid of 'Planes' class
     * @param ptupuagrNovedadInArg Mandatory argument 'pt_p_agrNovedad'. Oid of 'Novedad' class
     * @param ptupuagrCausalInArg Optional argument 'pt_p_agrCausal'. Oid of 'Causal' class
     * @param ptupuatrFechaVigenciaInArg Mandatory argument 'pt_p_atrFechaVigencia'
     * @param ptupuatrNumContratoInArg Mandatory argument 'pt_p_atrNumContrato'
     * @param ptProductoInArg Mandatory argument 'ptProducto'. Oid of 'Productos' class
     * @param ptTipoNovedadInArg Mandatory argument 'ptTipoNovedad'. Oid of 'TipoNovedad' class
     * @param ptupuagrProteccionDatosInArg Mandatory argument 'pt_p_agrProteccionDatos'. Oid of 'ProteccionDatos' class
     * @param puagrMotivoExcepcionInArg Mandatory argument 'p_agrMotivoExcepcion'. Oid of 'MotivoExcepcionSolNov' class
     * @param puatrFechaIniExcepcionInArg Mandatory argument 'p_atrFechaIniExcepcion'
     * @param puatrFechaFinExcepcionInArg Mandatory argument 'p_atrFechaFinExcepcion'
     */
    public tCREAREXCEPCION(
        ptupuagrPlanInArg: any, ptupuagrNovedadInArg: any, ptupuagrCausalInArg: any, ptupuatrFechaVigenciaInArg: Date,
        ptupuatrNumContratoInArg: string, ptProductoInArg: any, ptTipoNovedadInArg: any, ptupuagrProteccionDatosInArg: any,
        puagrMotivoExcepcionInArg: any, puatrFechaIniExcepcionInArg: Date, puatrFechaFinExcepcionInArg: Date):
        Promise<{
            oasolicitud: any
        }> {
        const request: {
            pt_p_agrplan_json: any, pt_p_agrnovedad_json: any, pt_p_agrcausal_json: any, pt_p_atrfechavigencia: string,
            pt_p_atrnumcontrato: string, ptproducto_json: any, pttiponovedad_json: any, pt_p_agrprotecciondatos_oid: any,
            p_agrmotivoexcepcion_json: any, p_atrfechainiexcepcion: string, p_atrfechafinexcepcion: string
        } = {
            pt_p_agrplan_json: ptupuagrPlanInArg ? JSON.stringify(ptupuagrPlanInArg) : '',
            pt_p_agrnovedad_json: ptupuagrNovedadInArg ? JSON.stringify(ptupuagrNovedadInArg) : '',
            pt_p_agrcausal_json: ptupuagrCausalInArg ? JSON.stringify(ptupuagrCausalInArg) : '',
            pt_p_atrfechavigencia: ptupuatrFechaVigenciaInArg ? JsonUtility.date2Json(ptupuatrFechaVigenciaInArg) : '',
            pt_p_atrnumcontrato: ptupuatrNumContratoInArg, ptproducto_json: ptProductoInArg ? JSON.stringify(ptProductoInArg) : '',
            pttiponovedad_json: ptTipoNovedadInArg ? JSON.stringify(ptTipoNovedadInArg) : '',
            pt_p_agrprotecciondatos_oid: ptupuagrProteccionDatosInArg,
            p_agrmotivoexcepcion_json: puagrMotivoExcepcionInArg ? JSON.stringify(puagrMotivoExcepcionInArg) : '',
            p_atrfechainiexcepcion: puatrFechaIniExcepcionInArg ? JsonUtility.date2Json(puatrFechaIniExcepcionInArg) : '',
            p_atrfechafinexcepcion: puatrFechaFinExcepcionInArg ? JsonUtility.date2Json(puatrFechaFinExcepcionInArg) : ''
        };
        return new Promise<{
            oasolicitud: any
        }> ((resolve, reject) => {
            this.callService(this.tCREAREXCEPCIONSrvName, request).then((response: any) => {
                resolve({
                    oasolicitud: response.oasolicitud
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TFIRMAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisSolicitudNovedadInArg Mandatory argument 'p_thisSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     * @param ptuTextoInArg Optional argument 'pt_Texto'
     */
    public tFIRMAR(
        puthisSolicitudNovedadInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null, ptuTextoInArg: string | null): Promise<void> {
        const request: {
            p_thissolicitudnovedad_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null, pt_texto: string | null
        } = {
            p_thissolicitudnovedad_oid: puthisSolicitudNovedadInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg, pt_texto: ptuTextoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tFIRMARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
