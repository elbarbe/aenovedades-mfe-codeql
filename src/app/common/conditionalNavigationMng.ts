import { Injectable } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { CacheDependencyRules, InstanceCache } from './app.cachedependencyrules';
import { ExchangeInfo } from './app.exchangeinfo';
import { ModelConstants } from './model.constants';
import { Util } from './app.utils';
import { UserFunctions } from './userFunctions';
import { StandardFunctions } from './standardFunctions';

/**
 * « Conditional navigation manager »
 * Handles all conditional navigation defined in the model
 */
@Injectable({providedIn: 'root'})
export class ConditionalNavigationMng {

    /** Cache for queries */
    private queriesCache: CacheDependencyRules;

    constructor(private readonly appGlobalInfo: AppGlobalInfo, private readonly util: Util, private readonly stdFun: StandardFunctions,
                private readonly usrFunc: UserFunctions) {
        this.queriesCache = new CacheDependencyRules(this.appGlobalInfo, this.util);
     }

    /**
     * Process the conditional navigation
     * @param className Class name
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    public processConditionalNavigation(className: string, serviceName: string, request: any, response: any, previousContext: any,
                                        comeBackContext: any): boolean {

        this.appGlobalInfo.appExchangeInfo.clearConditionalNavigation();

        switch (className.toLowerCase()) {
            case 'ProteccionDatos'.toLowerCase():
                return this.processCondNavprotecciondatos(serviceName, request, response, previousContext, comeBackContext);
            case 'SolicitudNovedad'.toLowerCase():
                return this.processCondNavsolicitudnovedad(serviceName, request, response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class ProteccionDatos
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavprotecciondatos(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'TCREARSOLNOVEDAD') {
            return this.condNavProteccionDatosTCREARSOLNOVEDAD(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TCREARSOLNOVEDADEXCEPCION') {
            return this.condNavProteccionDatosTCREARSOLNOVEDADEXCEPCION(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }

    /**
     * Process the conditional navigation defined in class SolicitudNovedad
     * @param serviceName Executed service
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private processCondNavsolicitudnovedad(
        serviceName: string, request: any, response: any, previousContext: any, comeBackContext: any): boolean {
        if (serviceName === 'dummyNavegarAModificar') {
            return this.condNavSolicitudNovedaddummyNavegarAModificar(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TCREAR') {
            return this.condNavSolicitudNovedadTCREAR(request,
                response, previousContext, comeBackContext);
        }
        if (serviceName === 'TCREAREXCEPCION') {
            return this.condNavSolicitudNovedadTCREAREXCEPCION(request,
                response, previousContext, comeBackContext);
        }
        return false;
    }


    /**
     * Manages the conditional navigation of service TCREARSOLNOVEDAD of class ProteccionDatos
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavProteccionDatosTCREARSOLNOVEDAD(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                ModelConstants.Solicitudnovedad.siuutcrear, previousContext, comeBackContext);
            // pt_p_agrProteccionDatos
            exchInfo.customData.pt_p_agrprotecciondatos = this.util.oidBuilder.buildOidProteccionDatos(response.ps_thispd.identificador);
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREARSOLNOVEDADEXCEPCION of class ProteccionDatos
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavProteccionDatosTCREARSOLNOVEDADEXCEPCION(
        request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        let exchInfo: ExchangeInfo;
        if (this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin'])) {
            exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                ModelConstants.Solicitudnovedad.siuutcrearexcepcion, previousContext, comeBackContext);
            // pt_p_agrProteccionDatos
            exchInfo.customData.pt_p_agrprotecciondatos = this.util.oidBuilder.buildOidProteccionDatos(response.ps_thispd.identificador);
            this.util.navigateTo(exchInfo);
        }
        return true;
    }


    /**
     * Manages the conditional navigation of service dummyNavegarAModificar of class SolicitudNovedad
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicitudNovedaddummyNavegarAModificar(
        request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.p_thissolicitudnovedad_oid) {
            this.queriesCache.addQueryInstance(ModelConstants.Solicitudnovedad.name, request.p_thissolicitudnovedad_oid,
                'Novedad.TipoNovedad.Tipo');
        }
        this.queriesCache.searchAll().then(() => {
        let varputhissolicitudnovedad!: InstanceCache;
        if (request.p_thissolicitudnovedad_oid) {
            varputhissolicitudnovedad = this.queriesCache.getInstance(ModelConstants.Solicitudnovedad.name,
                    request.p_thissolicitudnovedad_oid);
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // p_thisSolicitudNovedad.Novedad.TipoNovedad.Tipo = 0
            if (this.util.valueEquals(this.util.getInt(varputhissolicitudnovedad.get('Novedad.TipoNovedad.Tipo')), 0) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipocontrato, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitudnovedad_oid];
                this.util.navigateTo(exchInfo);
            }
            // p_thisSolicitudNovedad.Novedad.TipoNovedad.Tipo = 1
            if (!conditionFulfilled &&
                this.util.valueEquals(this.util.getInt(varputhissolicitudnovedad.get('Novedad.TipoNovedad.Tipo')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipotitular, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitudnovedad_oid];
                this.util.navigateTo(exchInfo);
            }
            if (!conditionFulfilled && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor',
                'Afiliaciones', 'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipousuario, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    request.p_thissolicitudnovedad_oid];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREAR of class SolicitudNovedad
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicitudNovedadTCREAR(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.pttiponovedad_json) {
            this.queriesCache.addQueryInstance(ModelConstants.Tiponovedad.name, JSON.parse(request.pttiponovedad_json),
                'Tipo');
        }
        this.queriesCache.searchAll().then(() => {
        let varpttiponovedad!: InstanceCache;
        if (request.pttiponovedad_json) {
            varpttiponovedad = this.queriesCache.getInstance(ModelConstants.Tiponovedad.name, JSON.parse(request.pttiponovedad_json));
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // ptTipoNovedad.Tipo = 0
            if (this.util.valueEquals(this.util.getInt(varpttiponovedad.get('Tipo')), 0) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipocontrato, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }
            // ptTipoNovedad.Tipo = 1
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varpttiponovedad.get('Tipo')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipotitular, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }
            if (!conditionFulfilled && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor',
                'Afiliaciones', 'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipousuario, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }


    /**
     * Manages the conditional navigation of service TCREAREXCEPCION of class SolicitudNovedad
     * @param request Service request
     * @param response Service response
     * @param previousContext Previous context
     * @param comeBackContext Comeback context
     */
    private condNavSolicitudNovedadTCREAREXCEPCION(request: any, response: any, previousContext: any, comeBackContext: any): boolean {

        if (request.pttiponovedad_json) {
            this.queriesCache.addQueryInstance(ModelConstants.Tiponovedad.name, JSON.parse(request.pttiponovedad_json),
                'Tipo');
        }
        this.queriesCache.searchAll().then(() => {
        let varpttiponovedad!: InstanceCache;
        if (request.pttiponovedad_json) {
            varpttiponovedad = this.queriesCache.getInstance(ModelConstants.Tiponovedad.name, JSON.parse(request.pttiponovedad_json));
        }

            let conditionFulfilled = false;
            let exchInfo: ExchangeInfo;
            // ptTipoNovedad.Tipo = 0
            if (this.util.valueEquals(this.util.getInt(varpttiponovedad.get('Tipo')), 0) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipocontrato, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }
            // ptTipoNovedad.Tipo = 1
            if (!conditionFulfilled && this.util.valueEquals(this.util.getInt(varpttiponovedad.get('Tipo')), 1) &&
                this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor', 'Afiliaciones', 'Gestor',
                'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipotitular, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }
            if (!conditionFulfilled && this.appGlobalInfo.getLoggedUserInfo().isAgentOneOf(['Admin', 'SuperAdmin', 'Asesor',
                'Afiliaciones', 'Gestor', 'MesaDeApoyo'])) {
                conditionFulfilled = true;
                exchInfo = this.util.createExchangeInfoFromCondNavigation(ModelConstants.Solicitudnovedad.name,
                    ModelConstants.Solicitudnovedad.mdiuusolnovtipousuario, previousContext, comeBackContext);
                exchInfo.selectedOidsClassName = ModelConstants.Solicitudnovedad.name;
                exchInfo.selectedOids = [
                    this.util.oidBuilder.buildOidSolicitudNovedad(response.oasolicitud.id)];
                this.util.navigateTo(exchInfo);
            }

            if (!conditionFulfilled) {
                this.util.navigateComeBack(comeBackContext);
            }

        });
        return true;
    }
}
