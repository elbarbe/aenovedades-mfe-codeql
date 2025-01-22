
import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Util } from './app.utils';
import { ModelConstants } from './model.constants';
import { QueryResponse } from './answerRequestInformation';

/**
 * Utility class para gestionar los datos en cache de la aplicación
 */
@Injectable({ providedIn: 'root' })
export class GestionCache {
    constructor(
        private readonly appGlobalInfo: AppGlobalInfo,
        private readonly util: Util
    ) { }

    /**
     * Devuelve el código legal del tipo de identificación recibido
     * @param oidTipoIdent 
     */
    public getCodigoLegalTipoIdentificacion(oidTipoIdent: string): Promise<string> {

        // Si tenemos los datos en la cache
        const tiposIdentString = sessionStorage.getItem('cacheTI');
        if (tiposIdentString) {
            return this.getCodigoLegalTipoIdentificacionAux(oidTipoIdent);
        } else {
            // Los buscamos y guardamos en cache
            const query = this.util.getQueryRequest('nombrecorto', [], '', 999);
            return new Promise<string>((resolve, reject) => {
                this.util.callQuery(ModelConstants.Tipoidentificacion.name, query).then((resp: QueryResponse) => {
                    const lista = [];
                    for (const dato of resp.results) {
                        lista.push({ oid: dato.oid, valor: dato.nombrecorto });
                    }
                    // Lo guardamos en la sessionstorage
                    sessionStorage.setItem('cacheTI', JSON.stringify(lista));
                    return this.getCodigoLegalTipoIdentificacionAux(oidTipoIdent);
                }).catch((err: Error) => {
                    reject(err);
                })
            });
        }
    }

    public getCodigoLegalTipoIdentificacionAux(oidTipoIdent: string): Promise<string> {

        // Ya debemos tener los datos en la sessionStorage
        const tiposIdentString = sessionStorage.getItem('cacheTI');
        if (tiposIdentString) {
            const tipos = JSON.parse(tiposIdentString);
            const ele = tipos.find((tipo: any) => tipo.oid === oidTipoIdent);
            if (ele) {
                return Promise.resolve(ele.valor);
            } else {
                return Promise.reject(new Error('Tipo identificacion no encontrado. ' + oidTipoIdent));
            }
        }
        return Promise.reject(new Error('Tipos de identificacion no cargados'));
    }

    /**
     * Devuelve el Oid (JSON string) del departamento al que corresponde el codigo legal recibido
     * @param codLegalDepartamento
     */
    public getOidDepartamentoPorCodigoLegal(codLegalDepartamento: string): Promise<string> {

        // Si tenemos los datos en la cache ...
        const departamentosString = sessionStorage.getItem('cacheDEP');
        if (departamentosString) {
            return this.getValorPorClaveEnCache('cacheDEP', codLegalDepartamento);
        } else {
            // Los buscamos todos y guardamos en cache
            const query = this.util.getQueryRequest('codigolegal', [], '', 999);
            return new Promise<string>((resolve, reject) => {
                this.util.callQuery(ModelConstants.Departamento.name, query).then((resp: QueryResponse) => {
                    const lista = [];
                    for (const dato of resp.results) {
                        lista.push({ clave: dato.codigolegal, valor: dato.oid });
                    }
                    // Lo guardamos en la sessionstorage
                    sessionStorage.setItem('cacheDEP', JSON.stringify(lista));
                    this.getValorPorClaveEnCache('cacheDEP', codLegalDepartamento).then((valor: string) => {
                        resolve(valor);
                    }).catch((err: Error) => {
                        reject(err);
                    });
                }).catch((err: Error) => {
                    reject(err);
                });
            });
        }
    }

    private getValorPorClaveEnCache(claveCache: string, valorClave: string): Promise<string> {

        // Ya debemos tener los datos en la sessionStorage, que es un array de pares clave-valor
        const valorCache = sessionStorage.getItem(claveCache);
        if (valorCache) {
            const valores = JSON.parse(valorCache);
            const ele = valores.find((ele: any) => ele.clave === valorClave);
            if (ele) {
                return Promise.resolve(ele.valor);
            } else {
                return Promise.reject(new Error('Elemento ' + valorClave + ' no encontrado en ' + claveCache));
            }
        }
        return Promise.reject(new Error('Cache no encontrada ' + claveCache));
    }


    /**
     * Devuelve el Oid (JSON string) del municipio al que corresponde el codigo legal recibido
     * @param codLegal Codigo legal del municipio
     * @returns Oid en formato JSON string
     */
    public getOidMunicipioPorCodigoLegal(codLegal: string): Promise<string> {
        // Buscamos el municipio por codigo legal
        return new Promise<string>((resolve, reject) => {
            let filtro = this.util.getFilter('iF_MunicipioCodigoLegal');
            filtro = this.util.addFilterVariable(filtro, 'vfCodLegal', codLegal);
            const request = this.util.getQueryRequest('codigolegal', [filtro], '', 1);
            this.util.callQuery(ModelConstants.Municipio.name, request).then((queryResponse: QueryResponse) => {
                if (queryResponse.results) {
                    resolve(queryResponse.results[0].oid);
                } else {
                    reject(new Error('Municipio con codigo logal ' + codLegal + ' no encontrado'));
                }
            }).catch((err: Error) => {
                reject(err);
            });
        });
    }

    public existePais(codPais: string): Promise<boolean> {
        // Si tenemos los datos en la cache ...
        const paises = sessionStorage.getItem('cachePAIS');
        if (paises) {
            const valores = JSON.parse(paises);
            const ele = valores.find((ele: any) => ele.clave === codPais);
            if (ele) {
                return Promise.resolve(true);
            } else {
                return Promise.resolve(false);
            }
       } else {
            // Los buscamos todos y guardamos en cache
            const query = this.util.getQueryRequest('codigo', [], '', 999);
            return new Promise<boolean>((resolve, reject) => {
                this.util.callQuery(ModelConstants.Pais.name, query).then((resp: QueryResponse) => {
                    const lista = [];
                    let existe = false;
                    for (const dato of resp.results) {
                        lista.push({ clave: dato.codigo, valor: dato.codigo });
                        if (dato.codigo === codPais) {
                            existe = true;
                        }
                    }
                    // Lo guardamos en la sessionstorage
                    sessionStorage.setItem('cachePAIS', JSON.stringify(lista));
                    resolve(existe);
                }).catch((err: Error) => {
                    reject(err);
                });
            });
        }
    }
}