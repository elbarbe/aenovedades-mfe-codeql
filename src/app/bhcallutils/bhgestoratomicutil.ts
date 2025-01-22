import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Util } from '../common/app.utils';
import { Injectable } from '@angular/core';
import { ErrorInformation } from '../common/answerRequestInformation';
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
@Injectable({providedIn: 'root'})
export class BHGestorAtomicUtil {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly appGlobalInfo: AppGlobalInfo,
        private readonly util: Util
    ) { }

    public subirArchivo(file: File, nombreDocAsignado: string, esDocSolicitud: boolean, numIdentificacion: string, numSolicitud: string): Promise<RespuestaGestorAtomic> {

        // Comprobaciones previas
        if (!environment.bhservicesinfo || !environment.bhservicesinfo.documental) {
            return Promise.reject(new Error('Configuracion servicio documental no encontrada'));
        }else if (environment.bhservicesinfo && environment.bhservicesinfo.documental &&
            !environment.bhservicesinfo.documental.url) {
            return Promise.reject(new Error('URL servicio documental no encontrada'));
        } else {

            let idFolder = environment.bhservicesinfo.documental.idfolder_docidentificacion;
            let docClass = environment.bhservicesinfo.documental.documentClass_docidentificacion
            if (esDocSolicitud) {
                idFolder = environment.bhservicesinfo.documental.idfolder_docsolicitud;
                docClass = environment.bhservicesinfo.documental.documentClass_docsolicitud
            }

            return this.subirFichero(file, nombreDocAsignado, idFolder, docClass, numIdentificacion, numSolicitud);
        }
    }

    private subirFichero(file: File, nombreDocAsignado: string,
        idFolder: string, documentClass: string, numIdentificacion: string, numSolicitud: string): Promise<any> {

        return new Promise<any>((resolve, reject) => {

            // 1. Obtenermos el Token del servicio del gestor
            const param = {
                pftipo: 'ATOMIC'
            }
            this.util.callUserFunctionInBackEnd('fuGetTkn', param, true).then( (token: any) => {

                if (token) {
                    // Llamar al REST de Contract Api
                    this.subirFicheroAux(token, file, nombreDocAsignado, idFolder, documentClass, numIdentificacion, numSolicitud).then( (response: any) => {
                        resolve(response);
                    }).catch( (err: Error) => {
                        reject(err);
                    });
                } else {
                    reject( new Error('Estamos teniendo fallas técnicas. C-INT-DOC0100'));
                }
            }).catch( (err: ErrorInformation) => {
                reject(err);
            });

        });
    }

    private subirFicheroAux(token: string, file: File, nombreDocAsignado: string,
        idFolder: string, documentClass: string, numIdentificacion: string, numSolicitud: string): Promise<RespuestaGestorAtomic> {

        return new Promise<RespuestaGestorAtomic>((resolve, reject) => {

            const respuesta:  RespuestaGestorAtomic = {
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
            // Comprobamos si la extension del archivo es una de las permitidas
            // if (conf.extensionesValidas && 
            //         conf.extensionesValidas.toUpperCase().indexOf(extensionFichero.toUpperCase()) < 0 ){
            //     alert("Tan solo se permiten archivos con la extensión " + conf.extensionesValidas);
            //     return;
            // }

            // Comprobamos el tamanyo del archivo
            let fileMB = file.size / 1048576;
            if (this.appGlobalInfo.getLoggedUserInfo().userCache.sizeAdjuntos &&
                parseFloat(this.appGlobalInfo.getLoggedUserInfo().userCache.sizeAdjuntos) < fileMB){
                
                    reject( new Error('El tamaño del archivo excede los ' +
                        this.appGlobalInfo.getLoggedUserInfo().userCache.sizeAdjuntos + ' Mb'))
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
                values: any} = { 
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
            if (numSolicitud) {
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
                    
                    this.guardarResultadoLlamadaAlGestor(fechaHoraEjecucion,
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
                    
                    this.guardarResultadoLlamadaAlGestor(fechaHoraEjecucion,
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
                respuesta.tiempoEjecucion = ( fin - inicio );

                respuesta.textoError = "Error (1001): " + error.message;

                this.guardarResultadoLlamadaAlGestor(fechaHoraEjecucion,
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

    private guardarResultadoLlamadaAlGestor(fechaHora: Date, peticion: string, respuesta: string, numSolicitud: string, textoError: string, tiempoEjecucion: number, usuario: string): void {

        const url = this.appGlobalInfo.APPCONSTANTS.BASE_URL + '/api/LogLlamadasBHApi/create_instanceAsync';

        let headers = new HttpHeaders();
        if (this.appGlobalInfo.getLoggedUserInfo().token) {
            headers = headers.set('Authorization', 'Bearer ' + this.appGlobalInfo.getLoggedUserInfo().token);
        }
        headers = headers.set('API-Version', this.appGlobalInfo.apiVersion);
        const responseType = 'json';
        const options = { headers, observe: 'response' as 'body',  responseType: 'json' as 'json', withCredentials: true };

        const request = {
            'p_atrcapacidad': 'Carga',
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
            next:(res:any)=> {},
            error:(res:any)=> {}
        });
    }    
}
