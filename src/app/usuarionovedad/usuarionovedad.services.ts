import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * « Service and queries of class 'UsuarioNovedad' »
 */
export class UsuarioNovedadServices extends AbstractServices {

    private modificarSUNumMesesSrvName = 'modificarSUNumMeses';
    private cambiarExcluidoSrvName = 'cambiarExcluido';
    private cambiarROSrvName = 'cambiarRO';
    private cambiarPSSrvName = 'cambiarPS';
    private cambiarASSrvName = 'cambiarAS';
    private tDELETESrvName = 'TDELETE';
    private tCAMBIARPARENTESCOSrvName = 'TCAMBIARPARENTESCO';
    private tCAMBIARTIPOIDENTSrvName = 'TCAMBIARTIPOIDENT';
    private tMODIFICARMANUALSrvName = 'TMODIFICARMANUAL';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'UsuarioNovedad');
    }

    /**
     * @param oidFamiliaNovedad Oid of related 'FamiliaNovedad' instance using the role 'FamiliaNovedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedFamiliaNovedad(
        oidFamiliaNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidFamiliaNovedad, 'FamiliaNovedad');
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
     * Call to the service 'modificarSUNumMeses' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param puSUNumMesesInArg Optional argument 'p_SUNumMeses'
     */
    public modificarSUNumMeses(
        puthisUsuarioNovedadInArg: any, puSUNumMesesInArg: number | null): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, p_sunummeses: number | null
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, p_sunummeses: puSUNumMesesInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.modificarSUNumMesesSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'cambiarExcluido' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param prExcluidoInArg Mandatory argument 'prExcluido'
     */
    public cambiarExcluido(
        puthisUsuarioNovedadInArg: any, prExcluidoInArg: boolean): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, prexcluido: boolean
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, prexcluido: prExcluidoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.cambiarExcluidoSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'cambiarRO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param prContratarInArg Mandatory argument 'prContratar'
     */
    public cambiarRO(
        puthisUsuarioNovedadInArg: any, prContratarInArg: boolean): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, prcontratar: boolean
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, prcontratar: prContratarInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.cambiarROSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'cambiarPS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param pProrrogaInArg Mandatory argument 'pProrroga'
     */
    public cambiarPS(
        puthisUsuarioNovedadInArg: any, pProrrogaInArg: boolean): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, pprorroga: boolean
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, pprorroga: pProrrogaInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.cambiarPSSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'cambiarAS' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param pActivacionInArg Mandatory argument 'pActivacion'
     */
    public cambiarAS(
        puthisUsuarioNovedadInArg: any, pActivacionInArg: boolean): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, pactivacion: boolean
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, pactivacion: pActivacionInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.cambiarASSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TDELETE' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     */
    public tDELETE(
        puthisUsuarioNovedadInArg: any): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tDELETESrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCAMBIARPARENTESCO' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param ptupuevcParentescoInArg Mandatory argument 'pt_p_evcParentesco'. Oid of 'Parentesco' class
     */
    public tCAMBIARPARENTESCO(
        puthisUsuarioNovedadInArg: any, ptupuevcParentescoInArg: any): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, pt_p_evcparentesco_json: any
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg,
            pt_p_evcparentesco_json: ptupuevcParentescoInArg ? JSON.stringify(ptupuevcParentescoInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCAMBIARPARENTESCOSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCAMBIARTIPOIDENT' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param ptupuevcTipoIdentificacionInArg Mandatory argument 'pt_p_evcTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuNumIdentificacionCDInArg Mandatory argument 'pt_p_NumIdentificacionCD'
     */
    public tCAMBIARTIPOIDENT(
        puthisUsuarioNovedadInArg: any, ptupuevcTipoIdentificacionInArg: any, ptupuNumIdentificacionCDInArg: string): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, pt_p_evctipoidentificacion_json: any, pt_p_numidentificacioncd: string
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg,
            pt_p_evctipoidentificacion_json: ptupuevcTipoIdentificacionInArg ? JSON.stringify(ptupuevcTipoIdentificacionInArg) : '',
            pt_p_numidentificacioncd: ptupuNumIdentificacionCDInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCAMBIARTIPOIDENTSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TMODIFICARMANUAL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisUsuarioNovedadInArg Mandatory argument 'p_thisUsuarioNovedad'. Oid of 'UsuarioNovedad' class
     * @param ptupuNumIdentificacionInArg Mandatory argument 'pt_p_NumIdentificacion'
     * @param ptupuPrimerNombreInArg Optional argument 'pt_p_PrimerNombre'
     * @param ptupuSegundoNombreInArg Optional argument 'pt_p_SegundoNombre'
     * @param ptupuPrimerApellidoInArg Optional argument 'pt_p_PrimerApellido'
     * @param ptupuSegundoApellidoInArg Optional argument 'pt_p_SegundoApellido'
     * @param ptupuGeneroInArg Optional argument 'pt_p_Genero'
     * @param ptupuFechaNacimientoInArg Optional argument 'pt_p_FechaNacimiento'
     * @param ptTipoIdentificacionInArg Mandatory argument 'ptTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptParentescoInArg Mandatory argument 'ptParentesco'. Oid of 'Parentesco' class
     */
    public tMODIFICARMANUAL(
        puthisUsuarioNovedadInArg: any, ptupuNumIdentificacionInArg: string, ptupuPrimerNombreInArg: string | null,
        ptupuSegundoNombreInArg: string | null, ptupuPrimerApellidoInArg: string | null, ptupuSegundoApellidoInArg: string | null,
        ptupuGeneroInArg: string | null, ptupuFechaNacimientoInArg: Date | null, ptTipoIdentificacionInArg: any,
        ptParentescoInArg: any): Promise<void> {
        const request: {
            p_thisusuarionovedad_oid: any, pt_p_numidentificacion: string, pt_p_primernombre: string | null,
            pt_p_segundonombre: string | null, pt_p_primerapellido: string | null, pt_p_segundoapellido: string | null,
            pt_p_genero: string | null, pt_p_fechanacimiento: string | null, pttipoidentificacion_json: any, ptparentesco_json: any
        } = {
            p_thisusuarionovedad_oid: puthisUsuarioNovedadInArg, pt_p_numidentificacion: ptupuNumIdentificacionInArg,
            pt_p_primernombre: ptupuPrimerNombreInArg, pt_p_segundonombre: ptupuSegundoNombreInArg,
            pt_p_primerapellido: ptupuPrimerApellidoInArg, pt_p_segundoapellido: ptupuSegundoApellidoInArg,
            pt_p_genero: ptupuGeneroInArg,
            pt_p_fechanacimiento: ptupuFechaNacimientoInArg ? JsonUtility.date2Json(ptupuFechaNacimientoInArg) : '',
            pttipoidentificacion_json: ptTipoIdentificacionInArg ? JSON.stringify(ptTipoIdentificacionInArg) : '',
            ptparentesco_json: ptParentescoInArg ? JSON.stringify(ptParentescoInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARMANUALSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
