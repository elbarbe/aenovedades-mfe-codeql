import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'DocumentoNovedad'
 */
export class DocumentoNovedadServices extends AbstractServices {

    private descargarDocumentoATOSrvName = 'descargarDocumentoATO';
    private tAPROBARSrvName = 'TAPROBAR';
    private tDEVOLVERSrvName = 'TDEVOLVER';
    private tCREARATOSrvName = 'TCREARATO';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'DocumentoNovedad');
    }

    /**
     * @param oidSolicitud Oid of related 'SolicitudNovedad' instance using the role 'Solicitud'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitud(
        oidSolicitud: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitud, 'Solicitud');
    }

    /**
     * @param oidUsuario Oid of related 'UsuarioNovedad' instance using the role 'Usuario'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuario(
        oidUsuario: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuario, 'Usuario');
    }

    /**
     * @param oidLogEstadoDocNov Oid of related 'LogEstadoDocNov' instance using the role 'LogEstadoDocNov'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedLogEstadoDocNov(
        oidLogEstadoDocNov: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidLogEstadoDocNov, 'LogEstadoDocNov');
    }

    /**
     * Call to the service 'descargarDocumentoATO' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoNovedadInArg Mandatory argument 'p_thisDocumentoNovedad'. Oid of 'DocumentoNovedad' class
     */
    public descargarDocumentoATO(
        puthisDocumentoNovedadInArg: any):
        Promise<{
            oaurldescarga: string
        }> {
        const request: {
            p_thisdocumentonovedad_oid: any
        } = {
            p_thisdocumentonovedad_oid: puthisDocumentoNovedadInArg
        };
        return new Promise<{
            oaurldescarga: string
        }> ((resolve, reject) => {
            this.callService(this.descargarDocumentoATOSrvName, request).then((response: any) => {
                resolve({
                    oaurldescarga: response.oaurldescarga
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TAPROBAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoNovedadInArg Mandatory argument 'p_thisDocumentoNovedad'. Oid of 'DocumentoNovedad' class
     * @param ptupuatrObservacionsInArg Optional argument 'pt_p_atrObservacions'
     */
    public tAPROBAR(
        puthisDocumentoNovedadInArg: any, ptupuatrObservacionsInArg: string | null): Promise<void> {
        const request: {
            p_thisdocumentonovedad_oid: any, pt_p_atrobservacions: string | null
        } = {
            p_thisdocumentonovedad_oid: puthisDocumentoNovedadInArg, pt_p_atrobservacions: ptupuatrObservacionsInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tAPROBARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDEVOLVER' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisDocumentoNovedadInArg Mandatory argument 'p_thisDocumentoNovedad'. Oid of 'DocumentoNovedad' class
     * @param ptupuatrObservacionsInArg Optional argument 'pt_p_atrObservacions'
     */
    public tDEVOLVER(
        puthisDocumentoNovedadInArg: any, ptupuatrObservacionsInArg: string | null): Promise<void> {
        const request: {
            p_thisdocumentonovedad_oid: any, pt_p_atrobservacions: string | null
        } = {
            p_thisdocumentonovedad_oid: puthisDocumentoNovedadInArg, pt_p_atrobservacions: ptupuatrObservacionsInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDEVOLVERSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREARATO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuatrDescripcionInArg Optional argument 'pt_p_atrDescripcion'
     * @param ptupuatrTipoInArg Optional argument 'pt_p_atrTipo'
     * @param ptupuExtensionInArg Optional argument 'pt_p_Extension'
     * @param ptUsuarioInArg Optional argument 'ptUsuario'. Oid of 'UsuarioNovedad' class
     * @param ptSolicitudInArg Mandatory argument 'ptSolicitud'. Oid of 'SolicitudNovedad' class
     * @param ptIdDocGestorInArg Mandatory argument 'ptIdDocGestor'
     * @param ptNombreInArg Mandatory argument 'ptNombre'
     * @param pfFicheroInArg Optional argument 'pfFichero'
     * @param ptNumSolicitudInArg Optional argument 'ptNumSolicitud'
     * @param ptNumIdentUsuarioInArg Optional argument 'ptNumIdentUsuario'
     */
    public tCREARATO(
        ptupuatrDescripcionInArg: string | null, ptupuatrTipoInArg: number | null, ptupuExtensionInArg: string | null,
        ptUsuarioInArg: any, ptSolicitudInArg: any, ptIdDocGestorInArg: string, ptNombreInArg: string, pfFicheroInArg: string | null,
        ptNumSolicitudInArg: number | null, ptNumIdentUsuarioInArg: string | null): Promise<void> {
        const request: {
            pt_p_atrdescripcion: string | null, pt_p_atrtipo: number | null, pt_p_extension: string | null, ptusuario_json: any,
            ptsolicitud_oid: any, ptiddocgestor: string, ptnombre: string, pffichero: string | null, ptnumsolicitud: number | null,
            ptnumidentusuario: string | null
        } = {
            pt_p_atrdescripcion: ptupuatrDescripcionInArg, pt_p_atrtipo: ptupuatrTipoInArg, pt_p_extension: ptupuExtensionInArg,
            ptusuario_json: ptUsuarioInArg ? JSON.stringify(ptUsuarioInArg) : '', ptsolicitud_oid: ptSolicitudInArg,
            ptiddocgestor: ptIdDocGestorInArg, ptnombre: ptNombreInArg, pffichero: pfFicheroInArg,
            ptnumsolicitud: ptNumSolicitudInArg, ptnumidentusuario: ptNumIdentUsuarioInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARATOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
