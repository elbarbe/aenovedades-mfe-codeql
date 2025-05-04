import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Service and queries of class 'FamiliaNovedad'
 */
export class FamiliaNovedadServices extends AbstractServices {

    private tFIRMARTITULARSrvName = 'TFIRMARTITULAR';
    private tSETDIRCORRSrvName = 'TSETDIRCORR';
    private tADDTITULARSrvName = 'TADDTITULAR';
    private tFIRMARNUEVOTITULARSrvName = 'TFIRMARNUEVOTITULAR';
    private tDELETESrvName = 'TDELETE';
    private tCREARMANUALSrvName = 'TCREARMANUAL';
    private tMODIFICARMANUALSrvName = 'TMODIFICARMANUAL';
    private tCREARUSUMANUALSrvName = 'TCREARUSUMANUAL';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'FamiliaNovedad');
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
     * @param oidUsuarioNovedad Oid of related 'UsuarioNovedad' instance using the role 'UsuarioNovedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedUsuarioNovedad(
        oidUsuarioNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidUsuarioNovedad, 'UsuarioNovedad');
    }

    /**
     * Call to the service 'TFIRMARTITULAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     * @param ptuTextoInArg Optional argument 'pt_Texto'
     */
    public tFIRMARTITULAR(
        puthisFamiliaNovedadInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null, ptuTextoInArg: string | null): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null, pt_texto: string | null
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg, pt_texto: ptuTextoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tFIRMARTITULARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TSETDIRCORR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptupuagrDepartamentoInArg Optional argument 'pt_p_agrDepartamento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioInArg Optional argument 'pt_p_agrMunicipio'. Oid of 'Municipio' class
     * @param ptupuatrDireccionCompletaInArg Optional argument 'pt_p_atrDireccionCompleta'
     * @param ptupuatrRuralInArg Mandatory argument 'pt_p_atrRural'
     * @param ptupuatrTelefonoFijoInArg Optional argument 'pt_p_atrTelefonoFijo'
     * @param ptupuatrTelefonoCelularInArg Optional argument 'pt_p_atrTelefonoCelular'
     * @param ptupuatrCorreoElectronicoInArg Optional argument 'pt_p_atrCorreoElectronico'
     */
    public tSETDIRCORR(
        puthisFamiliaNovedadInArg: any, ptupuagrPaisInArg: any, ptupuagrDepartamentoInArg: any, ptupuagrMunicipioInArg: any,
        ptupuatrDireccionCompletaInArg: string | null, ptupuatrRuralInArg: boolean, ptupuatrTelefonoFijoInArg: string | null,
        ptupuatrTelefonoCelularInArg: string | null, ptupuatrCorreoElectronicoInArg: string | null): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_agrpais_oid: any, pt_p_agrdepartamento_json: any, pt_p_agrmunicipio_json: any,
            pt_p_atrdireccioncompleta: string | null, pt_p_atrrural: boolean, pt_p_atrtelefonofijo: string | null,
            pt_p_atrtelefonocelular: string | null, pt_p_atrcorreoelectronico: string | null
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg, pt_p_agrpais_oid: ptupuagrPaisInArg,
            pt_p_agrdepartamento_json: ptupuagrDepartamentoInArg ? JSON.stringify(ptupuagrDepartamentoInArg) : '',
            pt_p_agrmunicipio_json: ptupuagrMunicipioInArg ? JSON.stringify(ptupuagrMunicipioInArg) : '',
            pt_p_atrdireccioncompleta: ptupuatrDireccionCompletaInArg, pt_p_atrrural: ptupuatrRuralInArg,
            pt_p_atrtelefonofijo: ptupuatrTelefonoFijoInArg, pt_p_atrtelefonocelular: ptupuatrTelefonoCelularInArg,
            pt_p_atrcorreoelectronico: ptupuatrCorreoElectronicoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tSETDIRCORRSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TADDTITULAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuagrTipoIdentificacionInArg Mandatory argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuagrDepartamentoNacimientoInArg Optional argument 'pt_p_agrDepartamentoNacimiento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioNacimientoInArg Optional argument 'pt_p_agrMunicipioNacimiento'. Oid of 'Municipio' class
     * @param ptupuatrNumIdentificacionInArg Mandatory argument 'pt_p_atrNumIdentificacion'
     * @param ptupuatrPrimerNombreInArg Optional argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Optional argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuatrFechaNacimientoInArg Optional argument 'pt_p_atrFechaNacimiento'
     * @param ptupuatrGeneroInArg Optional argument 'pt_p_atrGenero'
     * @param ptupuatrIndicadorExtranjeroInArg Mandatory argument 'pt_p_atrIndicadorExtranjero'
     * @param ptupuatrTelefonoFijoInArg Optional argument 'pt_p_atrTelefonoFijo'
     * @param ptupuatrTelefonoCelularInArg Optional argument 'pt_p_atrTelefonoCelular'
     * @param ptupuatrCorreoElectronicoInArg Optional argument 'pt_p_atrCorreoElectronico'
     * @param ptupuagrDepartamentoInArg Mandatory argument 'pt_p_agrDepartamento'. Oid of 'Departamento' class
     * @param ptupuagrMunicipioInArg Mandatory argument 'pt_p_agrMunicipio'. Oid of 'Municipio' class
     * @param ptupuatrDireccionCompletaInArg Mandatory argument 'pt_p_atrDireccionCompleta'
     * @param ptupuatrRuralInArg Mandatory argument 'pt_p_atrRural'
     * @param ptupuCodigoInArg Optional argument 'pt_p_Codigo'
     * @param ptupuagrPaisInArg Optional argument 'pt_p_agrPais'. Oid of 'Pais' class
     * @param ptRazonSocialInArg Optional argument 'ptRazonSocial'
     * @param ptUsuExistenteInArg Optional argument 'ptUsuExistente'. Oid of 'UsuarioNovedad' class
     */
    public tADDTITULAR(
        puthisFamiliaNovedadInArg: any, ptupuagrTipoIdentificacionInArg: any, ptupuagrDepartamentoNacimientoInArg: any,
        ptupuagrMunicipioNacimientoInArg: any, ptupuatrNumIdentificacionInArg: string, ptupuatrPrimerNombreInArg: string | null,
        ptupuatrSegundoNombreInArg: string | null, ptupuatrPrimerApellidoInArg: string | null,
        ptupuatrSegundoApellidoInArg: string | null, ptupuatrFechaNacimientoInArg: Date | null, ptupuatrGeneroInArg: string | null,
        ptupuatrIndicadorExtranjeroInArg: boolean, ptupuatrTelefonoFijoInArg: string | null,
        ptupuatrTelefonoCelularInArg: string | null, ptupuatrCorreoElectronicoInArg: string | null, ptupuagrDepartamentoInArg: any,
        ptupuagrMunicipioInArg: any, ptupuatrDireccionCompletaInArg: string, ptupuatrRuralInArg: boolean,
        ptupuCodigoInArg: number | null, ptupuagrPaisInArg: any, ptRazonSocialInArg: string | null,
        ptUsuExistenteInArg: any): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_agrtipoidentificacion_json: any, pt_p_agrdepartamentonacimiento_json: any,
            pt_p_agrmunicipionacimiento_json: any, pt_p_atrnumidentificacion: string, pt_p_atrprimernombre: string | null,
            pt_p_atrsegundonombre: string | null, pt_p_atrprimerapellido: string | null, pt_p_atrsegundoapellido: string | null,
            pt_p_atrfechanacimiento: string | null, pt_p_atrgenero: string | null, pt_p_atrindicadorextranjero: boolean,
            pt_p_atrtelefonofijo: string | null, pt_p_atrtelefonocelular: string | null, pt_p_atrcorreoelectronico: string | null,
            pt_p_agrdepartamento_json: any, pt_p_agrmunicipio_json: any, pt_p_atrdireccioncompleta: string, pt_p_atrrural: boolean,
            pt_p_codigo: number | null, pt_p_agrpais_oid: any, ptrazonsocial: string | null, ptusuexistente_json: any
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg,
            pt_p_agrtipoidentificacion_json: ptupuagrTipoIdentificacionInArg ? JSON.stringify(ptupuagrTipoIdentificacionInArg) : '',
            pt_p_agrdepartamentonacimiento_json: ptupuagrDepartamentoNacimientoInArg ? JSON.stringify(ptupuagrDepartamentoNacimientoInArg) : '',
            pt_p_agrmunicipionacimiento_json: ptupuagrMunicipioNacimientoInArg ? JSON.stringify(ptupuagrMunicipioNacimientoInArg) : '',
            pt_p_atrnumidentificacion: ptupuatrNumIdentificacionInArg, pt_p_atrprimernombre: ptupuatrPrimerNombreInArg,
            pt_p_atrsegundonombre: ptupuatrSegundoNombreInArg, pt_p_atrprimerapellido: ptupuatrPrimerApellidoInArg,
            pt_p_atrsegundoapellido: ptupuatrSegundoApellidoInArg,
            pt_p_atrfechanacimiento: ptupuatrFechaNacimientoInArg ? JsonUtility.date2Json(ptupuatrFechaNacimientoInArg) : '',
            pt_p_atrgenero: ptupuatrGeneroInArg, pt_p_atrindicadorextranjero: ptupuatrIndicadorExtranjeroInArg,
            pt_p_atrtelefonofijo: ptupuatrTelefonoFijoInArg, pt_p_atrtelefonocelular: ptupuatrTelefonoCelularInArg,
            pt_p_atrcorreoelectronico: ptupuatrCorreoElectronicoInArg,
            pt_p_agrdepartamento_json: ptupuagrDepartamentoInArg ? JSON.stringify(ptupuagrDepartamentoInArg) : '',
            pt_p_agrmunicipio_json: ptupuagrMunicipioInArg ? JSON.stringify(ptupuagrMunicipioInArg) : '',
            pt_p_atrdireccioncompleta: ptupuatrDireccionCompletaInArg, pt_p_atrrural: ptupuatrRuralInArg,
            pt_p_codigo: ptupuCodigoInArg, pt_p_agrpais_oid: ptupuagrPaisInArg, ptrazonsocial: ptRazonSocialInArg,
            ptusuexistente_json: ptUsuExistenteInArg ? JSON.stringify(ptUsuExistenteInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tADDTITULARSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TFIRMARNUEVOTITULAR' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuatrImagenFirmaInArg Optional argument 'pt_p_atrImagenFirma'
     * @param ptupuatrLatitudInArg Optional argument 'pt_p_atrLatitud'
     * @param ptupuatrLongitudInArg Optional argument 'pt_p_atrLongitud'
     * @param ptuTextoInArg Optional argument 'pt_Texto'
     */
    public tFIRMARNUEVOTITULAR(
        puthisFamiliaNovedadInArg: any, ptupuatrImagenFirmaInArg: string | null, ptupuatrLatitudInArg: string | null,
        ptupuatrLongitudInArg: string | null, ptuTextoInArg: string | null): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_atrimagenfirma: string | null, pt_p_atrlatitud: string | null,
            pt_p_atrlongitud: string | null, pt_texto: string | null
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg, pt_p_atrimagenfirma: ptupuatrImagenFirmaInArg,
            pt_p_atrlatitud: ptupuatrLatitudInArg, pt_p_atrlongitud: ptupuatrLongitudInArg, pt_texto: ptuTextoInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tFIRMARNUEVOTITULARSrvName, request).then((response: any) => {
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
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     */
    public tDELETE(
        puthisFamiliaNovedadInArg: any): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg
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
     * Call to the service 'TCREARMANUAL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptupuagrSolicitudInArg Mandatory argument 'pt_p_agrSolicitud'. Oid of 'SolicitudNovedad' class
     * @param ptupuagrTipoIdentificacionInArg Optional argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuatrTitNumidentificacionInArg Mandatory argument 'pt_p_atrTitNumidentificacion'
     * @param ptupuatrTitPrimerNombreInArg Optional argument 'pt_p_atrTitPrimerNombre'
     * @param ptupuatrTitSegundoNombreInArg Optional argument 'pt_p_atrTitSegundoNombre'
     * @param ptupuatrTitPrimerApellidoInArg Optional argument 'pt_p_atrTitPrimerApellido'
     * @param ptupuatrTitSegundoApellidoInArg Optional argument 'pt_p_atrTitSegundoApellido'
     * @param ptupuatrNumFamiliaInArg Mandatory argument 'pt_p_atrNumFamilia'
     * @param ptupuatrTitRazonSocialInArg Optional argument 'pt_p_atrTitRazonSocial'
     */
    public tCREARMANUAL(
        ptupuagrSolicitudInArg: any, ptupuagrTipoIdentificacionInArg: any, ptupuatrTitNumidentificacionInArg: string,
        ptupuatrTitPrimerNombreInArg: string | null, ptupuatrTitSegundoNombreInArg: string | null,
        ptupuatrTitPrimerApellidoInArg: string | null, ptupuatrTitSegundoApellidoInArg: string | null,
        ptupuatrNumFamiliaInArg: number, ptupuatrTitRazonSocialInArg: string | null): Promise<void> {
        const request: {
            pt_p_agrsolicitud_oid: any, pt_p_agrtipoidentificacion_json: any, pt_p_atrtitnumidentificacion: string,
            pt_p_atrtitprimernombre: string | null, pt_p_atrtitsegundonombre: string | null, pt_p_atrtitprimerapellido: string | null,
            pt_p_atrtitsegundoapellido: string | null, pt_p_atrnumfamilia: number, pt_p_atrtitrazonsocial: string | null
        } = {
            pt_p_agrsolicitud_oid: ptupuagrSolicitudInArg,
            pt_p_agrtipoidentificacion_json: ptupuagrTipoIdentificacionInArg ? JSON.stringify(ptupuagrTipoIdentificacionInArg) : '',
            pt_p_atrtitnumidentificacion: ptupuatrTitNumidentificacionInArg, pt_p_atrtitprimernombre: ptupuatrTitPrimerNombreInArg,
            pt_p_atrtitsegundonombre: ptupuatrTitSegundoNombreInArg, pt_p_atrtitprimerapellido: ptupuatrTitPrimerApellidoInArg,
            pt_p_atrtitsegundoapellido: ptupuatrTitSegundoApellidoInArg, pt_p_atrnumfamilia: ptupuatrNumFamiliaInArg,
            pt_p_atrtitrazonsocial: ptupuatrTitRazonSocialInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARMANUALSrvName, request).then((response: any) => {
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
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuNumFamiliaInArg Mandatory argument 'pt_p_NumFamilia'
     * @param ptupuTitNumidentificacionInArg Mandatory argument 'pt_p_TitNumidentificacion'
     * @param ptupuTitPrimerNombreInArg Optional argument 'pt_p_TitPrimerNombre'
     * @param ptupuTitSegundoNombreInArg Optional argument 'pt_p_TitSegundoNombre'
     * @param ptupuTitPrimerApellidoInArg Optional argument 'pt_p_TitPrimerApellido'
     * @param ptupuTitSegundoApellidoInArg Optional argument 'pt_p_TitSegundoApellido'
     * @param ptupuTitRazonSocialInArg Optional argument 'pt_p_TitRazonSocial'
     * @param ptTipoIdentificacionInArg Mandatory argument 'ptTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     */
    public tMODIFICARMANUAL(
        puthisFamiliaNovedadInArg: any, ptupuNumFamiliaInArg: number, ptupuTitNumidentificacionInArg: string,
        ptupuTitPrimerNombreInArg: string | null, ptupuTitSegundoNombreInArg: string | null,
        ptupuTitPrimerApellidoInArg: string | null, ptupuTitSegundoApellidoInArg: string | null,
        ptupuTitRazonSocialInArg: string | null, ptTipoIdentificacionInArg: any): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_numfamilia: number, pt_p_titnumidentificacion: string,
            pt_p_titprimernombre: string | null, pt_p_titsegundonombre: string | null, pt_p_titprimerapellido: string | null,
            pt_p_titsegundoapellido: string | null, pt_p_titrazonsocial: string | null, pttipoidentificacion_json: any
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg, pt_p_numfamilia: ptupuNumFamiliaInArg,
            pt_p_titnumidentificacion: ptupuTitNumidentificacionInArg, pt_p_titprimernombre: ptupuTitPrimerNombreInArg,
            pt_p_titsegundonombre: ptupuTitSegundoNombreInArg, pt_p_titprimerapellido: ptupuTitPrimerApellidoInArg,
            pt_p_titsegundoapellido: ptupuTitSegundoApellidoInArg, pt_p_titrazonsocial: ptupuTitRazonSocialInArg,
            pttipoidentificacion_json: ptTipoIdentificacionInArg ? JSON.stringify(ptTipoIdentificacionInArg) : ''
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tMODIFICARMANUALSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREARUSUMANUAL' in the backend
     * Promise is resolved if service execution is successful and returns void.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param puthisFamiliaNovedadInArg Mandatory argument 'p_thisFamiliaNovedad'. Oid of 'FamiliaNovedad' class
     * @param ptupuagrTipoIdentificacionInArg Optional argument 'pt_p_agrTipoIdentificacion'. Oid of 'TipoIdentificacion' class
     * @param ptupuagrParentescoInArg Optional argument 'pt_p_agrParentesco'. Oid of 'Parentesco' class
     * @param ptupuatrNumIdentificacionInArg Mandatory argument 'pt_p_atrNumIdentificacion'
     * @param ptupuatrPrimerNombreInArg Optional argument 'pt_p_atrPrimerNombre'
     * @param ptupuatrSegundoNombreInArg Optional argument 'pt_p_atrSegundoNombre'
     * @param ptupuatrPrimerApellidoInArg Optional argument 'pt_p_atrPrimerApellido'
     * @param ptupuatrSegundoApellidoInArg Optional argument 'pt_p_atrSegundoApellido'
     * @param ptupuatrFechaNacimientoInArg Optional argument 'pt_p_atrFechaNacimiento'
     * @param ptupuatrGeneroInArg Optional argument 'pt_p_atrGenero'
     */
    public tCREARUSUMANUAL(
        puthisFamiliaNovedadInArg: any, ptupuagrTipoIdentificacionInArg: any, ptupuagrParentescoInArg: any,
        ptupuatrNumIdentificacionInArg: string, ptupuatrPrimerNombreInArg: string | null, ptupuatrSegundoNombreInArg: string | null,
        ptupuatrPrimerApellidoInArg: string | null, ptupuatrSegundoApellidoInArg: string | null,
        ptupuatrFechaNacimientoInArg: Date | null, ptupuatrGeneroInArg: string | null): Promise<void> {
        const request: {
            p_thisfamilianovedad_oid: any, pt_p_agrtipoidentificacion_json: any, pt_p_agrparentesco_json: any,
            pt_p_atrnumidentificacion: string, pt_p_atrprimernombre: string | null, pt_p_atrsegundonombre: string | null,
            pt_p_atrprimerapellido: string | null, pt_p_atrsegundoapellido: string | null, pt_p_atrfechanacimiento: string | null,
            pt_p_atrgenero: string | null
        } = {
            p_thisfamilianovedad_oid: puthisFamiliaNovedadInArg,
            pt_p_agrtipoidentificacion_json: ptupuagrTipoIdentificacionInArg ? JSON.stringify(ptupuagrTipoIdentificacionInArg) : '',
            pt_p_agrparentesco_json: ptupuagrParentescoInArg ? JSON.stringify(ptupuagrParentescoInArg) : '',
            pt_p_atrnumidentificacion: ptupuatrNumIdentificacionInArg, pt_p_atrprimernombre: ptupuatrPrimerNombreInArg,
            pt_p_atrsegundonombre: ptupuatrSegundoNombreInArg, pt_p_atrprimerapellido: ptupuatrPrimerApellidoInArg,
            pt_p_atrsegundoapellido: ptupuatrSegundoApellidoInArg,
            pt_p_atrfechanacimiento: ptupuatrFechaNacimientoInArg ? JsonUtility.date2Json(ptupuatrFechaNacimientoInArg) : '',
            pt_p_atrgenero: ptupuatrGeneroInArg
        };
        return new Promise<void> ((resolve, reject) => {
             this.callService(this.tCREARUSUMANUALSrvName, request).then((response: any) => {
                resolve();
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
