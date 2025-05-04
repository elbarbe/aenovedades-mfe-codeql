import { AbstractServices } from '../common/abstractServices';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from '../common/app.utils';
import { ErrorInformation } from '../common/answerRequestInformation';
import { JsonUtility } from '../common/jsonUtility';

/**
 * Global services
 */
export class GlobalServicesServices extends AbstractServices {

    private oGETREPORTSOLNOVSrvName = 'OGETREPORTSOLNOV';

    constructor(
        protected override readonly appGlobalInfo: AppGlobalInfo,
        protected override readonly util: Util) {
        super(appGlobalInfo, util, 'GlobalServices');
    }

    /**
     * Call to the service 'OGETREPORTSOLNOV' in the backend
     * Promise is resolved if service execution is successful and returns its outbound arguments in a JSON object.
     * If service fails, promise is rejected and returned an instance of ErrorInformation
     * @param ptSolicitudNovedadInArg Mandatory argument 'ptSolicitudNovedad'. Oid of 'SolicitudNovedad' class
     */
    public oGETREPORTSOLNOV(
        ptSolicitudNovedadInArg: any):
        Promise<ErrorInformation | {
            oaruta: string,
            oanombrearchivo: string,
            oaarchivo: string
        }> {
        const request: {
            ptsolicitudnovedad_oid: any
        } = {
            ptsolicitudnovedad_oid: ptSolicitudNovedadInArg
        };
        return new Promise<ErrorInformation | {
            oaruta: string,
            oanombrearchivo: string,
            oaarchivo: string
        }> ((resolve, reject) => {
            this.callService(this.oGETREPORTSOLNOVSrvName, request).then((response: any) => {
                resolve({
                    oaruta: response.oaruta,
                    oanombrearchivo: response.oanombrearchivo,
                    oaarchivo: response.oaarchivo
                });
            }).catch( (errorInfo: ErrorInformation) => {
                reject(errorInfo);
            });
        });
    }
}
