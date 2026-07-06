import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Util } from '../common/app.utils';
import { Injectable } from '@angular/core';
import { ErrorInformation, RequestError } from '../common/answerRequestInformation';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { environment } from 'src/environments/environment';

export interface RespuestaGestorAtomic {
    exito: boolean;
    textoError: string;
    request: string;
    response: string;
    tiempoEjecucion: number;
    nombreFichero: string;
    extensionArchivo: string;
    idGestor: string;
}

/**
 * Utility class for Contract Api REST service
 */
@Injectable({ providedIn: 'root' })
export class BHGestorAtomicUtil {

    public MSG_ERROR_GEN = 'Estamos presentando fallas técnicas. Pruebe de nuevo pasados unos minutos';

    constructor(
        private readonly httpClient: HttpClient,
        private readonly appGlobalInfo: AppGlobalInfo,
        private readonly util: Util
    ) { }

    /**
     * Invoca el servicio del gestor para descargar el archivo y lo abre en una nueva ventana del navegador
     * @param tkn Token Bearer a utilizar en la llamada el gestor
     * @param url Url de descarga 
     * @param numSolicitud Número de solicitud
     * @returns 
     */
    public descargarArchivo(tkn: string, url: string, numSolicitud: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            let headers = new HttpHeaders();
            headers = headers.set('Authorization', 'Bearer ' + tkn);
            const responseType = 'json';
            const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json'};
            const startTime = new Date();
            this.httpClient.get(url, options).subscribe(
                {
                    next: (res: any) => {
                        const endTime = new Date();
                        const elapsedTime = endTime.getTime() - startTime.getTime();

                        // Comprobamos si ha habido algún error. Estrcutura de la response:
                        // { fileName: string;
                        //     base64: string;
                        //     error: string;
                        //     status: string
                        // }
                        const body = res.body;
                        if (body && body.error) {
                            this.guardarResultadoLlamadaAlGestor('Descarga', startTime, url, JSON.stringify(body),
                                numSolicitud, body.error, elapsedTime, this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName'));

                            reject(new ErrorInformation(true, '901', this.MSG_ERROR_GEN + ' - C-901', '', []));
                        } else {
                            if (body && body.fileName && body.base64) {
                                // Abrimos el nueva ventana el documento
                                this.util.openInNewWindow(body.base64, body.fileName);
                                // Quitamos los datos del archivo para guardar en el log
                                body.base64 = '';
                                this.guardarResultadoLlamadaAlGestor('Descarga', startTime, url, JSON.stringify(body),
                                    numSolicitud, '', elapsedTime,
                                    this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName'));

                                resolve();
                            } else {
                                body.base64 = '';
                                this.guardarResultadoLlamadaAlGestor('Descarga', startTime, url, JSON.stringify(body),
                                    numSolicitud, 'Campos faltantes en la respuesta del gestor: fileName o base64', elapsedTime,
                                    this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName'));

                                reject(new ErrorInformation(true, '902', this.MSG_ERROR_GEN + ' - C-902', '', []));
                            }
                        }
                    },
                    error: (msg: any) => {
                        const endTime = new Date();
                        const elapsedTime = endTime.getTime() - startTime.getTime();
                        this.guardarResultadoLlamadaAlGestor('Descarga', startTime, url, JSON.stringify(msg),
                            numSolicitud, msg.message, elapsedTime, this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName'));

                        reject(new ErrorInformation(true, '900', this.MSG_ERROR_GEN + ' - C-900', '', []));
                    }
                }
            );
        });
    }

    /**
     * Sube el archivo al gestor documental
     * @param file Archivo a subir
     * @param nombreDocAsignado Nombre del archivo
     * @param esDocSolicitud Indica si el archivo es un documento de solicitud o de identificación
     * @param numIdentificacion Número de identificacion de la persona asociada al documento
     * @param numSolicitud Número de solicitud
     * @returns 
     */
    public subirArchivo(file: File, nombreDocAsignado: string, esDocSolicitud: boolean, numIdentificacion: string, numSolicitud: string): Promise<RespuestaGestorAtomic> {

        // Comprobaciones previas
        if (!environment.bhservicesinfo || !environment.bhservicesinfo.documental) {
            return Promise.reject(new Error('Configuracion servicio documental no encontrada'));
        } else if (environment.bhservicesinfo && environment.bhservicesinfo.documental &&
            !environment.bhservicesinfo.documental.url) {
            return Promise.reject(new Error('URL servicio documental no encontrada'));
        } else {

            let idFolder = environment.bhservicesinfo.documental.idfolder_docidentificacion;
            let docClass = environment.bhservicesinfo.documental.documentClass_docidentificacion
            if (esDocSolicitud) {
                idFolder = environment.bhservicesinfo.documental.idfolder_docsolicitud;
                docClass = environment.bhservicesinfo.documental.documentClass_docsolicitud
            }

            return this.subirFichero(file, nombreDocAsignado, idFolder, docClass, numIdentificacion, numSolicitud, esDocSolicitud);
        }
    }

    private subirFichero(file: File, nombreDocAsignado: string,
        idFolder: string, documentClass: string, numIdentificacion: string, numSolicitud: string, esDocSolicitud: boolean): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            // 1. Obtenermos el Token del servicio del gestor
            const param = {
                pftipo: 'ATOMIC'
            }
            this.util.callUserFunctionInBackEnd('fuGetTkn', param, true).then((token: any) => {

                if (token) {
                    // Llamar al REST de Contract Api
                    this.subirFicheroAux(token, file, nombreDocAsignado, idFolder, documentClass, numIdentificacion, numSolicitud, esDocSolicitud).then((response: any) => {
                        resolve(response);
                    }).catch((err: Error) => {
                        reject(err);
                    });
                } else {
                    reject(new Error('Estamos teniendo fallas técnicas. C-INT-DOC0100'));
                }
            }).catch((err: ErrorInformation) => {
                reject(err);
            });

        });
    }

    private subirFicheroAux(token: string, file: File, nombreDocAsignado: string,
        idFolder: string, documentClass: string, numIdentificacion: string, numSolicitud: string, esDocSolicitud: boolean): Promise<RespuestaGestorAtomic> {

        return new Promise<RespuestaGestorAtomic>((resolve, reject) => {

            const respuesta: RespuestaGestorAtomic = {
                exito: true,
                textoError: '',
                request: '',
                response: '',
                tiempoEjecucion: 0,
                nombreFichero: '',
                extensionArchivo: '',
                idGestor: ''
            };

            // Extraemos la extension del archivo
            const nombreFichero = file.name;
            const extensionFichero = nombreFichero.split(".").pop();

            // 1. Validaciones 
            // Comprobamos si la extension del archivo es una de las permitidas (pdf tif jpg bmp)
            if (!extensionFichero || 'pdf tif jpg bmp'.indexOf(extensionFichero.toLowerCase()) < 0) {
                reject(new Error('Tan solo se permiten archivos con la extensión pdf tif jpg  y bmp'));
                return;
            }

            // Comprobamos el tamanyo del archivo
            let fileMB = file.size / 1048576;
            const tamanyoMax = this.appGlobalInfo.getLoggedUserInfo().userCache?.sizeAdjuntos ?
                this.appGlobalInfo.getLoggedUserInfo().userCache?.sizeAdjuntos : 5;
            if (parseFloat(tamanyoMax) < fileMB) {
                reject(new Error('El tamaño del archivo excede los ' + tamanyoMax + ' Mb'))
                return;
            }

            let tituloDocumento = nombreDocAsignado + "." + extensionFichero;

            // const datosArchivo = { 
            //     idFolder: idFolder, 
            //     documentClass: documentClass, 
            //     values: { 
            //         DocumentTitle: tituloDocumento,
            //         NumeroDocumentoIdentidad: '',
            //         NumeroSolicitud: ''
            //     }
            // };
            const datosArchivo: {
                idFolder: string,
                documentClass: string,
                values: any
            } = {
                idFolder: idFolder,
                documentClass: documentClass,
                values: {
                    DocumentTitle: tituloDocumento
                }
            };

            // Dependiendo de los datos recibidos añadimos la propiedad 
            if (numIdentificacion) {
                datosArchivo.values.NumeroDocumentoIdentidad = numIdentificacion as string;
            }
            if (numSolicitud && esDocSolicitud) {
                datosArchivo.values.NumeroSolicitud = String(numSolicitud);
            }

            // body
            const miform = new FormData();
            miform.append("data", JSON.stringify(datosArchivo));

            miform.append("file", file);
            const settings = {
                "url": environment.bhservicesinfo.documental.url,
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Authorization": "Bearer " + token
                },
                "processData": false,
                "mimeType": "multipart/form-data",
                "contentType": false,
                "data": miform
            };

            // Asignamos valor al campo de la request
            respuesta.request = JSON.stringify(datosArchivo);
            respuesta.nombreFichero = nombreDocAsignado;
            respuesta.extensionArchivo = extensionFichero ? extensionFichero : '';

            // Tomamos tiempo
            const fechaHoraEjecucion = new Date();
            let inicio = Date.now();

            // Llamamos ...				
            fetch(environment.bhservicesinfo.documental.url, {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + token
                },
                body: miform,
            })
                .then((response) => response.json()).then((datos: any) => {


                    /* Ejemplo de respuesta con exito
                    {
                            "reason": "Created",
                            "path": "/document",
                            "code": 201,
                            "response": "{800B188D-0000-C817-A888-A8E4229B8B61}",
                            "timestamp": "2024-01-17T15:30:26.017+00:00",
                            "status": "CREATED"
                    } 
    
                    Ejemplo de respuesta con error
                    {
                        "timestamp": "2024-01-17T15:40:30.871+00:00",
                        "status": 500,
                        "error": "Internal Server Error",
                        "path": "/document"
                    }		          
                */
                    const fin = Date.now();
                    respuesta.tiempoEjecucion = (fin - inicio) / 1000;
                    respuesta.response = JSON.stringify(datos);

                    // Comprobamos si ha ido bien la llamada
                    if (datos.response) {
                        // Ha ido bien ...

                        // Asignamos valor al argumento Id del gestor
                        respuesta.idGestor = datos.response;

                        this.guardarResultadoLlamadaAlGestor('Carga', fechaHoraEjecucion,
                            respuesta.request,
                            respuesta.response,
                            numSolicitud,
                            '',
                            respuesta.tiempoEjecucion,
                            this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName')
                        )
                        resolve(respuesta);

                    } else {
                        // Ha habido algún error
                        respuesta.exito = false;
                        let errorMsg = "";
                        if (datos.status) {
                            errorMsg += datos.status;
                        }
                        if (datos.error) {
                            errorMsg += " " + datos.error;
                        }
                        respuesta.textoError = errorMsg;

                        this.guardarResultadoLlamadaAlGestor('Carga', fechaHoraEjecucion,
                            respuesta.request,
                            JSON.stringify(datos),
                            numSolicitud,
                            respuesta.textoError,
                            respuesta.tiempoEjecucion,
                            this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName')
                        )
                        resolve(respuesta);
                    }
                })
                .catch((error: any) => {

                    let fin = Date.now();
                    respuesta.exito = false;
                    respuesta.tiempoEjecucion = (fin - inicio);

                    respuesta.textoError = "Error (1001): " + error.message;

                    this.guardarResultadoLlamadaAlGestor('Carga', fechaHoraEjecucion,
                        respuesta.request,
                        '',
                        numSolicitud,
                        error.message,
                        respuesta.tiempoEjecucion,
                        this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('userName')
                    );
                    resolve(respuesta);
                });

        });
    }

    private guardarResultadoLlamadaAlGestor(capacidad: string, fechaHora: Date, peticion: string, respuesta: string, numSolicitud: string, textoError: string, tiempoEjecucion: number, usuario: string): void {

        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/LogLlamadasBHApi/create_instanceAsync';

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body', responseType: 'json' as 'json', withCredentials: true };

        const request = {
            'p_atrcapacidad': capacidad,
            'p_atrfechahora': fechaHora,
            'p_atrpeticion': peticion,
            'p_atrrespuesta': respuesta,
            'p_atrservicio': 'GestorDocumental',
            'p_atrsolicitud': numSolicitud,
            'p_atrtextoerror': textoError,
            'p_atrtiempoejecucion': tiempoEjecucion,
            'p_atrtiposervicio': 'REST Service',
            'p_atrusuario': usuario
        };
        this.httpClient.post(url, request, options).subscribe({
            next: (res: any) => { },
            error: (res: any) => { }
        });
    }
}
