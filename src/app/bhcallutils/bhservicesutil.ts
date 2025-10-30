import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Util } from '../common/app.utils';
import { Injectable } from '@angular/core';
import { ErrorInformation, RequestError } from '../common/answerRequestInformation';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { GestionCache } from '../common/gestionCache';
import { formatDate } from '@angular/common';
/**
 * Utility class for Contract Api REST service
 */
@Injectable({ providedIn: 'root' })
export class BHServicesUtil {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly appGlobalInfo: AppGlobalInfo,
        private readonly util: Util,
        private gestionCache: GestionCache
    ) { }

    /**
     * Devuelve los coantratos asociados de la persona recibida
     * @param tipoIdentificacion Nombre corto del tipo de identificación
     * @param numIdentificacion Numero de identificacion
     * @param numSolicitud Numero de solicitud
     * @returns Array con los contratos recibidos, que es el contenido de 'coverFamilyResponse'
     */
    public consultarContratosAsociadosDePersona(tipoIdentificacion: string, numIdentificacion: string, numSolicitud: string): Promise<any[]> {

        return new Promise<any[]>((resolve, reject) => {

            this.consultarContratosDePersonaAux('/api/bhcall/consultarContratosAsociadosDePersona', tipoIdentificacion, numIdentificacion, numSolicitud).then((response: any) => {
                if (response.coverResponse?.coverFamilyResponse) {
                    resolve(response.coverResponse.coverFamilyResponse);
                } else {
                    resolve([]);
                }
            }).catch((err: Error) => {
                reject(err);
            });

        });
    }

    /**
     * Devuelve si la persona tiene EPS Sanitas o no
     * @param tipoIdentificacion 
     * @param numIdentificacion 
     * @param numSolicitud 
     * @returns 
     */
    public tieneEPSSanitas(tipoIdentificacion: string, numIdentificacion: string, numSolicitud: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.consultarContratosDePersonaAux('/api/bhcall/consultarContratoDePersona', tipoIdentificacion, numIdentificacion, numSolicitud).then((response: any) => {
                resolve(response.tieneEPSSanitas);
            }).catch((err: Error) => {
                resolve(false);
            });
        });
    }

    private consultarContratosDePersonaAux(endPoint: string, tipoIdentificacion: string, numIdentificacion: string, numSolicitud: string): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + endPoint;

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "tipoIdentificacion": tipoIdentificacion,
            "numeroIdentificacion": numIdentificacion,
            "numSolicitud": numSolicitud
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                {
                    next: (res: any) => {
                        if (res.body && res.body.exito) {
                            resolve(res.body);
                        } else {
                            const errorInfo = new ErrorInformation(false, '', res.body.textoError, '', []);
                            reject(errorInfo);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    /**
     * Devuelve la información de un contrato
     * @param codigoLegalProducto 
     * @param codigoLegalPlan 
     * @param numContrato 
     * @param numSolicitud 
     * @returns 
     */
    public consultarContrato(codigoLegalProducto: string, codigoLegalPlan: string, numContrato: string, numSolicitud: string): Promise<any> {
        return this.consultarContratoAux('/api/bhcall/consultarContrato', codigoLegalProducto, codigoLegalPlan, numContrato, numSolicitud);
    }

    /**
     * Devuelve la información de un contrato sin que sea el último válido
     * @param codigoLegalProducto 
     * @param codigoLegalPlan 
     * @param numContrato 
     * @param numSolicitud 
     * @returns 
     */
    public consultarContratoNoLastValid(codigoLegalProducto: string, codigoLegalPlan: string, numContrato: string, numSolicitud: string): Promise<any> {
        return this.consultarContratoAux('/api/bhcall/consultarContratoNoLastValid', codigoLegalProducto, codigoLegalPlan, numContrato, numSolicitud);
    }

    private consultarContratoAux(endPoint: string, codigoLegalProducto: string, codigoLegalPlan: string, numContrato: string, numSolicitud: string): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + endPoint;

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "codigoLegalProducto": codigoLegalProducto,
            "codigoLegalPlan": codigoLegalPlan,
            "numContrato": numContrato,
            "numSolicitud": numSolicitud
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                {
                    next: (res: any) => {
                        if (res.body && res.body.exito) {
                            if (res.body.coverResponse.coverFamilyResponse || res.body.coverResponse.coverResponse) {
                                resolve(res.body.coverResponse);
                            } else {
                                const errorInfo = new ErrorInformation(false, '', 'El contrato indicado no existe', '', []);
                                reject(errorInfo);
                            }
                        } else {
                            const errorInfo = new ErrorInformation(false, '', res.body.textoError, '', []);
                            reject(errorInfo);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    /**
     * Devuelve la lista de contratos en los que la persona es beneficiario
     * @param nombreCortoTipoIdentificacion 
     * @param numeroIdentificacion 
     * @param numSolicitud 
     * @returns 
     */
    public consultarBeneficiario(nombreCortoTipoIdentificacion: string, numeroIdentificacion: string, numSolicitud: string): Promise<string[]> {

        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/bhcall/consultarBeneficiario';

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "tipoIdentificacion": nombreCortoTipoIdentificacion,
            "numeroIdentificacion": numeroIdentificacion,
            "numSolicitud": numSolicitud
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                {
                    next: (res: any) => {
                        if (res.body && res.body.exito) {
                            resolve(this.formarListaContratosParaBeneficiario(res.body));
                        } else {
                            const errorInfo = new ErrorInformation(false, '', res.body.textoError, '', []);
                            reject(errorInfo);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    private formarListaContratosParaBeneficiario(response: any): string[] {
        // Tratamos los de coverageHeader
        const listaContratos: string[] = [];

        if (response.coverageHeaderResponse) {
            const mapaContratos: Map<string, any> = new Map<string, any>();
            for (const contrato of response.coverageHeaderResponse.data) {
                if (contrato.coverage && contrato.coverage.length > 0) {

                    const clave = BHServicesUtil.getValorElementoPorClave(contrato.insurancePlan?.identifier, 'type', 'CODIGO_PRODUCTO', 'value') +
                        '-' + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'PLAN', 'value');

                    const bene = contrato.coverage[0];
                    const estatus = bene?.status?.code;
                    const finVigencia = bene?.period?.end;

                    // SOlo nos interesan los que tengan estado HABILITADO o NO HABILITADO
                    if (estatus === 'NO HABILITADO') {
                        // Los no habilitados, tan solo si su fecha es mayor de otro que ya exista
                        const contratoExistente = mapaContratos.get(clave);
                        if (contratoExistente && 'NO HABILITADO' === contratoExistente.coverage[0].status?.code &&
                            finVigencia > contratoExistente.coverage[0].period?.end) {
                            mapaContratos.set(clave, contrato);
                        }
                    }

                    if (estatus === 'HABILITADO') {
                        // Los habilitados, los metemos directamente
                        mapaContratos.set(clave, contrato);
                    }
                }
            }

            for (const contrato of mapaContratos.values()) {
                let linea = BHServicesUtil.getValorElementoPorClave(contrato.insurancePlan?.identifier, 'type', 'NOMBRE_PRODUCTO', 'value');
                linea += " " + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'NOMBRE_PLAN', 'value');
                linea += " " + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'CONTRATO', 'value');
                let fechaString = "";
                if (contrato.coverage[0].period?.end) {
                    fechaString = formatDate(contrato.coverage[0].period?.end, 'dd/MM/yyyy', 'es-ES');
                }
                const estadoString = contrato.coverage[0].status?.code;
                if (estadoString) {
                    linea += " " + estadoString;
                    if ("NO HABILITADO" === estadoString) {
                        linea += " " + fechaString;
                    }
                    listaContratos.push(linea);
                }
            }
        }

        if (response.coverResponse?.coverFamilyResponse) {
            const mapaContratos: Map<string, any> = new Map<string, any>();
            for (const contrato of response.coverResponse.coverFamilyResponse) {
                const clave = BHServicesUtil.getValorElementoPorClave(contrato.insurancePlan?.identifier, 'type', 'CODIGO_PRODUCTO', 'value') +
                    '-' + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'PLAN', 'value');

                const estatus = contrato.contract?.status;
                const finVigencia = contrato.applies?.end;


                // SOlo nos interesan los que tengan estado HABILITADO o NO HABILITADO
                if (estatus === 'NO HABILITADO') {
                    // Los no habilitados, tan solo si su fecha es mayor de otro que ya exista
                    const contratoExistente = mapaContratos.get(clave);
                    if (contratoExistente && 'NO HABILITADO' === contratoExistente.contract?.status &&
                        finVigencia > contratoExistente.applies?.end) {
                        mapaContratos.set(clave, contrato);
                    }
                }

                if (estatus === 'HABILITADO') {
                    // Los habilitados, los metemos directamente
                    mapaContratos.set(clave, contrato);
                }
            }

            for (const contrato of mapaContratos.values()) {
                let linea = BHServicesUtil.getValorElementoPorClave(contrato.insurancePlan?.identifier, 'type', 'NOMBRE_PRODUCTO', 'value');
                linea += " " + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'NOMBRE_PLAN', 'value');
                linea += " " + BHServicesUtil.getValorElementoPorClave(contrato.contract?.identifier, 'type', 'CONTRATO', 'value');
                let fechaString = "";
                if (contrato.applies?.end) {
                    fechaString = formatDate(contrato.applies?.end, 'dd/MM/yyyy', 'es-ES');
                }
                const estadoString = contrato.contract?.status;
                if (estadoString) {
                    linea += " " + estadoString;
                    if ("NO HABILITADO" === estadoString) {
                        linea += " " + fechaString;
                    }
                    listaContratos.push(linea);
                }
            }
        }
        return listaContratos;
    }

    /**
     * Busca a una persona jurídica
     * @param oidTipoIdentificacion 
     * @param numeroIdentificacion 
     * @param numSolicitud 
     * @returns 
     */
    public buscarPersonaJuridicaPorOidTipoIdent(oidTipoIdentificacion: string, numeroIdentificacion: string, numSolicitud: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.gestionCache.getCodigoLegalTipoIdentificacion(oidTipoIdentificacion).then((nombreCorto: string) => {
                this.buscarPersonaJuridica(nombreCorto, numeroIdentificacion, numSolicitud).then((respuesta: any) => {
                    resolve(respuesta);
                }).catch((err: Error) => {
                    reject(err);
                })
            }).catch((err: Error) => {
                reject(err);
            })
        });
    }

    /**
     * Busca a una persona jurídica
     * @param nombreCortoTipoIdentificacion 
     * @param numeroIdentificacion 
     * @param numSolicitud 
     * @returns 
     */
    public buscarPersonaJuridica(nombreCortoTipoIdentificacion: string, numeroIdentificacion: string, numSolicitud: string): Promise<any> {

        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/bhcall/consultarPersonaJuridica';

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "tipoIdentificacion": nombreCortoTipoIdentificacion,
            "numeroIdentificacion": numeroIdentificacion,
            "numSolicitud": numSolicitud
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                {
                    next: (res: any) => {
                        if (res.body && res.body.exito) {
                            resolve(res.body);
                        } else {
                            const errorInfo = new ErrorInformation(false, '', res.body.textoError, '', []);
                            reject(errorInfo);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    /**
     * Busca a una persona
     * @param oidTipoIdentificacion 
     * @param numeroIdentificacion 
     * @param numSolicitud 
     * @returns 
     */
    public buscarPersonaPorOidTipoIdent(oidTipoIdentificacion: string, numeroIdentificacion: string, numSolicitud: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.gestionCache.getCodigoLegalTipoIdentificacion(oidTipoIdentificacion).then((nombreCorto: string) => {
                this.buscarPersona(nombreCorto, numeroIdentificacion, numSolicitud).then((respuesta: any) => {
                    resolve(respuesta);
                }).catch((err: Error) => {
                    reject(err);
                })
            }).catch((err: Error) => {
                reject(err);
            })
        });
    }

    /**
     * Llama al backend para recuperar los datos de la persona indicada
     * @param nombreCortoTipoIdentificacion  Nombre corto del tipo de identificación
     * @param numeroIdentificacion  Numero de indentificación
     * @param numSolicitud Número de solicitud, para guardar en el log
     * @returns Los datos de la persona, si existe
     */
    public buscarPersona(nombreCortoTipoIdentificacion: string, numeroIdentificacion: string, numSolicitud: string): Promise<any> {

        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/bhcall/consultarPersona';

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "tipoIdentificacion": nombreCortoTipoIdentificacion,
            "numeroIdentificacion": numeroIdentificacion,
            "numSolicitud": numSolicitud
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                {
                    next: (res: any) => {
                        if (res.body && res.body.exito) {
                            resolve(res.body);
                        } else {
                            const errorInfo = new ErrorInformation(false, '', res.body.textoError, '', []);
                            reject(errorInfo);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    /**
     * Devuelve el valor del campo del primer elemento que cumpla la condicion. 
     * Para localizar al elemento se utilizan los valores de dos campos (clave y clave2) y se compara utilizando un include con valorCalve y valorClave2.
     * Si el elemento no tiene valor en el campo indicado, se busca el siguiente
     * @param array Array 
     * @param clave Clave del campo a utilizar para comparar 
     * @param valorClave Valor de comparación para la clave (por include)
     * @param clave2 Segunda clave del campo a utilizar para comparar 
     * @param valorClave2 Valor de comparación para la segunda clave (por include)
     * @param campo Campo a devolver
     * @returns 
     */
    public static getValorElementoPor2Claves(array: any[], clave: string, valorClave: string, clave2: string, valorClave2: string, campo: string): any {
        if (array && clave && clave2 && campo) {
            const elemento = array.find((el: any) => el[clave] && el[clave].includes(valorClave) &&
                el[clave2] && el[clave2].includes(valorClave2) &&
                el[campo]);
            if (elemento && elemento[campo]) {
                return elemento[campo];
            }
        }
        return undefined;
    }

    /**
     * Devuelve el primer elemento del array que tenga en el campo de la clave el valor indicado y tenga valor
     * @param array Array 
     * @param clave Clave del campo a utilizar para comparar 
     * @param valorClave Valor de comparación (por include)
     * @param campo Campo a devolver, se comprueba que tenga valor
     * @returns 
     */
    public static getValorElementoPorClave(array: any[], clave: string, valorClave: string, campo: string): any {
        if (array && clave && campo) {
            const elemento = array.find((el: any) => el[clave] && el[clave].includes(valorClave) && el[campo]);
            return elemento ? elemento[campo] : undefined;
        }
        return undefined;
    }

    /**
     * Devuelve el elemento del array que tenga en el campo indicado como clave el valor recibido
     * @param array Array
     * @param clave Nombre del camop clave
     * @param valorClave Valor de comparación (por include)
     * @returns 
     */
    public static getElemento(array: any[], clave: string, valorClave: string): any {
        if (array && clave) {
            return array.find((el: any) => el[clave] && el[clave].includes(valorClave));
        }
        return undefined;
    }

    /**
     * Devuelve la lista de Compañias (Productos) que están configurados para cancelación de contratos
     * @returns 
     */
    public consultarCompanyasReactivacionContratos(): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/consultarCompanyasReactivacionContratos";

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        return new Promise<any>((resolve, reject) => {
            this.httpClient.get(url, options).subscribe(
                    {
                    next: (res: any) => {
                        if (res.body) {
                            resolve(res.body);
                        } else {
                            resolve(null);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }

    /**
     * Devuelve la lista de Planes (todos) que están configurados para cancelación de contratos
     * @returns 
     */
    public consultarPlanesReactivacionContratos(): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/consultarPlanesReactivacionContratos";

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        return new Promise<any>((resolve, reject) => {
            this.httpClient.get(url, options).subscribe(
                    {
                    next: (res: any) => {
                        if (res.body) {
                            resolve(res.body);
                        } else {
                            resolve(null);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }    

    /**
     * Devuelve el contrato, si existe, con la información de reactivación de contratos
     * @returns 
     */
    public consultarContratoParaReactivacion(codProducto: string, codPlan: string, numContrato: string): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/consultarContratoParaReactivacion";

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "codProducto": codProducto,
            "codPlan": codPlan,
            "numContrato": numContrato
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                    {
                    next: (res: any) => {
                        if (res.body) {
                            resolve(res.body);
                        } else {
                            resolve(null);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }    

    /**
     * Invoca al servicio apra crear una eractivación de contrato
     * @param codProducto Producto
     * @param codPlan Plan
     * @param numContrato Contrato
     * @param valor Valor a pagar
     * @param modificar True si se trata de una modificación, false si es creación
     * @returns 
     */
    public crearModificarReactivacionContrato(codProducto: string, codPlan: string, numContrato: string, valor: number, modificar: boolean): Promise<any> {
        let url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/crearSolicitudReactivacionContrato";
        if (modificar) {
            url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/modificarSolicitudReactivacionContrato";
        }

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "codProducto": codProducto,
            "codPlan": codPlan,
            "numContrato": numContrato,
            "valorPagar": valor
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                    {
                    next: (res: any) => {
                        if (res.body) {
                            resolve(res.body);
                        } else {
                            resolve(null);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }


    public eliminarSolicitudReactivacionContrato(codProducto: string, codPlan: string, numContrato: string): Promise<any> {
        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + "/api/bhcall/eliminarSolicitudReactivacionContrato";

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const peticion = {
            "codProducto": codProducto,
            "codPlan": codPlan,
            "numContrato": numContrato
        };
        return new Promise<any>((resolve, reject) => {
            this.httpClient.post(url, peticion, options).subscribe(
                    {
                    next: (res: any) => {
                        if (res.body) {
                            resolve(res.body);
                        } else {
                            resolve(null);
                        }
                    },
                    error: (msg: any) => {
                        const errorInfo = new RequestError(msg);
                        errorInfo.messageId = 'app_BACKENDUNKNOWNERROR';
                        reject(errorInfo);
                    }
                }
            )
        });
    }
}
