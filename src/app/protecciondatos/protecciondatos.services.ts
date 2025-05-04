import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation, QueryResponse } from '../common/answerRequestInformation';

/**
 * Service and queries of class 'ProteccionDatos'
 */
export class ProteccionDatosServices extends AbstractServices {

    private tCREARSOLNOVEDADSrvName = 'TCREARSOLNOVEDAD';
    private tCREARSOLNOVEDADEXCEPCIONSrvName = 'TCREARSOLNOVEDADEXCEPCION';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'ProteccionDatos');
    }

    /**
     * @param oidSolicitudNovedad Oid of related 'SolicitudNovedad' instance using the role 'SolicitudNovedad'
     * @param displaySetItems Attributes
     * @param orderCriteria Order criteria name
     * @param instancesPerPage Elements per page
     * @param pageNumber Page number
     */
    public queryByRelatedSolicitudNovedad(
        oidSolicitudNovedad: any, displaySetItems: string, orderCriteria: string,
        instancesPerPage: number, pageNumber: number): Promise<QueryResponse> {
        return this.queryByRelated(displaySetItems, orderCriteria, instancesPerPage, pageNumber,
            oidSolicitudNovedad, 'SolicitudNovedad');
    }

    /**
     * Call to the service 'TCREARSOLNOVEDAD' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptTextoInArg Optional argument 'ptTexto'
     */
    public tCREARSOLNOVEDAD(
        ptTextoInArg: string | null):
        Promise<{
            ps_thispd: any
        }> {
        const request: {
            pttexto: string | null
        } = {
            pttexto: ptTextoInArg
        };
        return new Promise<{
            ps_thispd: any
        }> ((resolve, reject) => {
            this.callService(this.tCREARSOLNOVEDADSrvName, request).then((response: any) => {
                resolve({
                    ps_thispd: response.ps_thispd
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }

    /**
     * Call to the service 'TCREARSOLNOVEDADEXCEPCION' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptTextoInArg Optional argument 'ptTexto'
     */
    public tCREARSOLNOVEDADEXCEPCION(
        ptTextoInArg: string | null):
        Promise<{
            ps_thispd: any
        }> {
        const request: {
            pttexto: string | null
        } = {
            pttexto: ptTextoInArg
        };
        return new Promise<{
            ps_thispd: any
        }> ((resolve, reject) => {
            this.callService(this.tCREARSOLNOVEDADEXCEPCIONSrvName, request).then((response: any) => {
                resolve({
                    ps_thispd: response.ps_thispd
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
