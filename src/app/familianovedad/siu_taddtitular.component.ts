import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppGlobalInfo } from '../app.appglobalinfo';
import { Field, FieldDefinedSelection, FieldOVLense, FieldOVLenseSearch, FieldOVPreload } from '../common/baseIUElements';
import { AbstractServiceIU } from '../common/abstractSIU';
import { ExchangeInfo } from '../common/app.exchangeinfo';
import { ModelConstants } from '../common/model.constants';
import { Util } from '../common/app.utils';
import { DefinedSelections } from '../common/definedSelection';
import { StandardFunctions } from '../common/standardFunctions';
import { LanguageMng } from '../common/languageMng';
import { ConditionalNavigationMng } from '../common/conditionalNavigationMng';
import { UserFunctions } from '../common/userFunctions';
import { BHServicesUtil } from '../bhcallutils/bhservicesutil';
import { GestionCache } from '../common/gestionCache';

@Component({
    selector: 'imes-familianovedad-siu-taddtitular',
    templateUrl: './siu_taddtitular.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FamiliaNovedadSIUuTADDTITULARComponent extends AbstractServiceIU implements OnInit {
    /** Fields */
    public puthisFamiliaNovedad: FieldOVLense;
    public ptupuagrTipoIdentificacion: FieldOVPreload;
    public ptupuagrDepartamentoNacimiento: FieldOVPreload;
    public ptupuagrMunicipioNacimiento: FieldOVPreload;
    public ptupuatrNumIdentificacion: Field;
    public ptupuatrPrimerNombre: Field;
    public ptupuatrSegundoNombre: Field;
    public ptupuatrPrimerApellido: Field;
    public ptupuatrSegundoApellido: Field;
    public ptupuatrFechaNacimiento: Field;
    public ptupuatrGenero: FieldDefinedSelection;
    public ptupuatrIndicadorExtranjero: FieldDefinedSelection;
    public ptupuatrTelefonoFijo: Field;
    public ptupuatrTelefonoCelular: Field;
    public ptupuatrCorreoElectronico: Field;
    public ptupuagrDepartamento: FieldOVPreload;
    public ptupuagrMunicipio: FieldOVPreload;
    public ptupuatrDireccionCompleta: Field;
    public ptupuatrRural: FieldDefinedSelection;
    public ptupuCodigo: Field;
    public ptupuagrPais: FieldOVLenseSearch;
    public ptRazonSocial: Field;
    public ptUsuExistente: FieldOVPreload;

    /**
     * Component constructor
     * @param appGlobalInfo Application Global Information
     * @param util Navigation utils
     * @param changeDetectorRef Angular module
     * @param langMng Language manager
     * @param stdFun Standard functions
     * @param condNavMng Conditional manager
     * @param usrFunc User functions
     */
    constructor(
        public override appGlobalInfo: AppGlobalInfo, public override util: Util, public override changeDetectorRef: ChangeDetectorRef,
        public langMng: LanguageMng, public stdFun: StandardFunctions,
        public override condNavMng: ConditionalNavigationMng, public usrFunc: UserFunctions,
        private bhServicesUtil: BHServicesUtil, private gestionCache: GestionCache) {
        super(appGlobalInfo, util, changeDetectorRef, condNavMng);
        this.idXML = 'Clas_1581424574464890Ser_20UIServ_1';
        this.className = ModelConstants.Familianovedad.name;
        this.iuName = ModelConstants.Familianovedad.siuutaddtitular;
        this.setUserVisibility(this.appGlobalInfo.getLoggedUserInfo().isIUVisible(this.idXML, ['Admin', 'SuperAdmin', 'Asesor',
            'Afiliaciones', 'MesaDeApoyo']));
        this.serviceName = 'TADDTITULAR';
        this.title = this.langMng.translateText('cls_FamiliaNovedad_svc_TADDTITULAR',
            'Indicar nuevo titular');

        // Create inbound argument components
        this.puthisFamiliaNovedad = new FieldOVLense(this.langMng);
        this.ptupuagrTipoIdentificacion = new FieldOVPreload(this.langMng);
        this.ptupuagrDepartamentoNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipioNacimiento = new FieldOVPreload(this.langMng);
        this.ptupuatrNumIdentificacion = new Field(this.langMng);
        this.ptupuatrPrimerNombre = new Field(this.langMng);
        this.ptupuatrSegundoNombre = new Field(this.langMng);
        this.ptupuatrPrimerApellido = new Field(this.langMng);
        this.ptupuatrSegundoApellido = new Field(this.langMng);
        this.ptupuatrFechaNacimiento = new Field(this.langMng);
        this.ptupuatrGenero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrIndicadorExtranjero = new FieldDefinedSelection(this.langMng);
        this.ptupuatrTelefonoFijo = new Field(this.langMng);
        this.ptupuatrTelefonoCelular = new Field(this.langMng);
        this.ptupuatrCorreoElectronico = new Field(this.langMng);
        this.ptupuagrDepartamento = new FieldOVPreload(this.langMng);
        this.ptupuagrMunicipio = new FieldOVPreload(this.langMng);
        this.ptupuatrDireccionCompleta = new Field(this.langMng);
        this.ptupuatrRural = new FieldDefinedSelection(this.langMng);
        this.ptupuCodigo = new Field(this.langMng);
        this.ptupuagrPais = new FieldOVLenseSearch(this.langMng);
        this.ptRazonSocial = new Field(this.langMng);
        this.ptUsuExistente = new FieldOVPreload(this.langMng);

    }

    public ngOnInit(): void {
        this.myngOnInit();
    }

    private buscarPersonaenCORE(): void {

            	// Si el usuario no puede ver los datos básicos de persona, no hacemos nada
    	if (!this.appGlobalInfo.getLoggedUserInfo().getValorDeCache('verDBasicosPersona')) {
    		return;
    	}
        // Comprobamos que tengamos el tipo y el numero
        const tipo = this.ptupuagrTipoIdentificacion.getSelectedInstances();
        if (tipo && tipo.length === 1 && this.ptupuatrNumIdentificacion.value) {
            this.buscarPersonaenCOREAux(tipo[0].jsonOID);
        }
    }

    private buscarPersonaenCOREAux(oidJSONTipoIdentificacion: string): void {

        // Recuperamos los datos necesarios para tratar los datos
        this.limpiarCampos();
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion, 'nit');
        this.addQueryInstanceFromField(this.puthisFamiliaNovedad, 'Solicitud.NumRadicado');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            const varTipoIdent = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
            const esNit = varTipoIdent.get('nit');
            const varputhissolicitud = this.getFirstInstanceFromCache(this.puthisFamiliaNovedad);
            const numSol = varputhissolicitud.get('Solicitud.NumRadicado');
            if (!esNit) {
                this.bhServicesUtil.buscarPersonaPorOidTipoIdent(oidJSONTipoIdentificacion, this.ptupuatrNumIdentificacion.value, numSol).then (( datosPersona: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (datosPersona?.basicData) {
                    this.cargarPersonaNaturalDesdeCORE(datosPersona);
                } else {
                    this.util.addErrorMessage('La persona no existe');
                    this.limpiarCampos();
                }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.limpiarCampos();
                    this.setShowWait(false);
                    this.util.addErrorMessage(err);
                });
            }
        });
    }    
    
    private limpiarCampos(): void {
        this.ptupuagrDepartamentoNacimiento.clean();
        this.ptupuagrMunicipioNacimiento.clean();
        this.ptupuagrMunicipioNacimiento.cleanPreload();
        this.ptupuatrPrimerNombre.clean();
        this.ptupuatrSegundoNombre.clean();
        this.ptupuatrPrimerApellido.clean();
        this.ptupuatrSegundoApellido.clean();
        this.ptupuatrFechaNacimiento.clean();
        this.ptupuatrGenero.clean();
        this.ptupuatrIndicadorExtranjero.value = false;
        this.ptupuatrTelefonoFijo.clean();
        this.ptupuatrTelefonoCelular.clean();
        this.ptupuatrCorreoElectronico.clean();
        this.ptupuagrDepartamento.clean();
        this.ptupuagrMunicipio.clean();
        this.ptupuagrMunicipio.cleanPreload();
        this.ptupuatrDireccionCompleta.clean();
        this.ptupuatrRural.value = false;
        this.ptupuCodigo.clean();
        this.ptupuagrPais.clean();
        this.ptRazonSocial.clean();
    }

    private cargarPersonaNaturalDesdeCORE(datosPersona: any): void {

        this.setShowWait(true);

        // Codigo del CORE
        this.ptupuCodigo.value = datosPersona.basicData.id;

        // Nombre
        
        this.ptupuatrPrimerNombre.value = datosPersona?.basicData?.name?.name?.firstName;
        this.ptupuatrSegundoNombre.value = datosPersona?.basicData?.name?.name?.secondName;
        this.ptupuatrPrimerApellido.value = datosPersona?.basicData?.name?.name?.firstFamily;
        this.ptupuatrSegundoApellido.value = datosPersona?.basicData?.name?.name?.secondFamily;
        this.ptupuatrFechaNacimiento.value = this.util.getDate(datosPersona?.basicData?.birthDate);
        this.ptupuatrGenero.value = datosPersona?.basicData?.gender;

        if (datosPersona?.basicData?.foreign) {
            this.ptupuatrIndicadorExtranjero.value = true;
        } else {
            this.ptupuatrIndicadorExtranjero.value = false;
        }

        this.ptupuatrTelefonoFijo.value = BHServicesUtil.getValorElementoPor2Claves(datosPersona?.contact?.telecom, 
                'system', 'TELEFONO_CONTACTO_PRINCIPAL', 
                'use', 'RESIDENCIAL', 
                'value');
        this.ptupuatrTelefonoCelular.value = BHServicesUtil.getValorElementoPorClave(datosPersona?.contact?.telecom, 'system', 'CELULAR_CONTACTO_PRINCIPAL', 'value');
        this.ptupuatrCorreoElectronico.value = BHServicesUtil.getValorElementoPorClave(datosPersona?.contact?.telecom, 'system', 'CORREO_ELECTRONICO', 'value');


        // Ciudad de nacimiento
        if (datosPersona?.basicData?.extension && datosPersona?.basicData?.extension.length > 0) {
            const valueAddress = datosPersona?.basicData?.extension[0].valueAddress;
            if (valueAddress) {
                // Tenemos los codigos legales de departamento y municipio
                const codLegalDep = valueAddress?.state?.code;
                const codLegalMun = valueAddress?.city?.code;
                if (codLegalDep) {
                    this.notifyCallToTheBackEnd();
                    this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then( (oidDep: string) => {
                        this.notifyAnswerFromToTheBackEnd();
                        // Asignamos el valor el argumento y precargamos los municipios
                        this.ptupuagrDepartamentoNacimiento.setValue(JSON.parse(oidDep));
                        this.loadPreloadptupuagrmunicipionacimiento();
                        if (codLegalMun) {
                            // Buscamos el municipio por codigo legal
                            this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then ((oidMun: string) => {
                                this.notifyAnswerFromToTheBackEnd();
                                this.ptupuagrMunicipioNacimiento.setValue(JSON.parse(oidMun));
                            }).catch( (err: Error) => {
                                this.notifyAnswerFromToTheBackEnd();
                                this.util.addErrorMessage(err);
                            });
                        }
                    });
                }
            }
        }

        // Direccion residencial
        const direccionResidencia = BHServicesUtil.getElemento(datosPersona?.contact?.address, 'use', 'RESIDENCIAL');
        if (direccionResidencia) {
            this.ptupuatrDireccionCompleta.value = direccionResidencia.text;
            this.ptupuatrRural.value = false;
            // Tenemos los codigos legales de departamento y municipio
            const codLegalDep = direccionResidencia?.state?.code;
            const codLegalMun = direccionResidencia.city?.code;
            const codPais = direccionResidencia.country?.code;

            if (codLegalDep) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.getOidDepartamentoPorCodigoLegal(codLegalDep).then( (oidDep: string) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento y precargamos los municipios
                    this.ptupuagrDepartamento.setValue(JSON.parse(oidDep));
                    this.loadPreloadptupuagrmunicipio();
                    if (codLegalMun) {
                        // Buscamos el municipio por codigo legal
                        this.gestionCache.getOidMunicipioPorCodigoLegal(codLegalMun).then ((oidMun: string) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.ptupuagrMunicipio.setValue(JSON.parse(oidMun));
                        }).catch( (err: Error) => {
                            this.notifyAnswerFromToTheBackEnd();
                            this.util.addErrorMessage(err);
                        });
                    }
                });
            }
            // Pais
            if (codPais) {
                this.notifyCallToTheBackEnd();
                this.gestionCache.existePais(codPais).then((existePais: boolean) => {
                    this.notifyAnswerFromToTheBackEnd();
                    // Asignamos el valor el argumento
                    if (existePais) {
                        this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(codPais));
                    }
                }).catch( (err: Error) => {
                    this.notifyAnswerFromToTheBackEnd();
                    this.util.addErrorMessage(err);
                });
            }
        }
    }

    /**
     * Initialize the component using default values
     */
    public override initializeComponents(): void {

        this.puthisFamiliaNovedad.nameInRequest = 'p_thisfamilianovedad';
        this.puthisFamiliaNovedad.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_p_thisFamiliaNovedad',
            'Familia');
        this.puthisFamiliaNovedad.visible = this.queryContainer == null ||
            this.queryContainer.className !== this.className;
        this.puthisFamiliaNovedad.mandatory = true;
        this.puthisFamiliaNovedad.dataType = ModelConstants.Familianovedad.name;
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.puthisFamiliaNovedad.oidFieldsTypes = ['autonumerico'];
        this.puthisFamiliaNovedad.assignCSS();
        this.fields.push(this.puthisFamiliaNovedad);

        this.ptupuagrTipoIdentificacion.nameInRequest = 'pt_p_agrtipoidentificacion';
        this.ptupuagrTipoIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrTipoIdentificacion',
            'Tipo identificación');
        this.ptupuagrTipoIdentificacion.mandatory = true;
        this.ptupuagrTipoIdentificacion.dataType = ModelConstants.Tipoidentificacion.name;
        this.ptupuagrTipoIdentificacion.maxLength = 170;
        this.ptupuagrTipoIdentificacion.assignCSS();
        this.fields.push(this.ptupuagrTipoIdentificacion);

        this.ptupuagrDepartamentoNacimiento.nameInRequest = 'pt_p_agrdepartamentonacimiento';
        this.ptupuagrDepartamentoNacimiento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrDepartamentoNacimiento',
            'Departamento nacimiento');
        this.ptupuagrDepartamentoNacimiento.mandatory = false;
        this.ptupuagrDepartamentoNacimiento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamentoNacimiento.maxLength = 150;
        this.ptupuagrDepartamentoNacimiento.assignCSS();
        this.fields.push(this.ptupuagrDepartamentoNacimiento);

        this.ptupuagrMunicipioNacimiento.nameInRequest = 'pt_p_agrmunicipionacimiento';
        this.ptupuagrMunicipioNacimiento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrMunicipioNacimiento',
            'Municipio nacimiento');
        this.ptupuagrMunicipioNacimiento.mandatory = false;
        this.ptupuagrMunicipioNacimiento.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipioNacimiento.maxLength = 150;
        this.ptupuagrMunicipioNacimiento.assignCSS();
        this.fields.push(this.ptupuagrMunicipioNacimiento);

        this.ptupuatrNumIdentificacion.nameInRequest = 'pt_p_atrnumidentificacion';
        this.ptupuatrNumIdentificacion.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrNumIdentificacion',
            'Nº Identificación');
        this.ptupuatrNumIdentificacion.mandatory = true;
        this.ptupuatrNumIdentificacion.dataType = Field.dtString;
        this.ptupuatrNumIdentificacion.maxLength = 60;
        this.ptupuatrNumIdentificacion.assignCSS();
        this.fields.push(this.ptupuatrNumIdentificacion);

        this.ptupuatrPrimerNombre.nameInRequest = 'pt_p_atrprimernombre';
        this.ptupuatrPrimerNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrPrimerNombre',
            'Primer nombre');
        this.ptupuatrPrimerNombre.mandatory = false;
        this.ptupuatrPrimerNombre.dataType = Field.dtString;
        this.ptupuatrPrimerNombre.maxLength = 50;
        this.ptupuatrPrimerNombre.assignCSS();
        this.fields.push(this.ptupuatrPrimerNombre);

        this.ptupuatrSegundoNombre.nameInRequest = 'pt_p_atrsegundonombre';
        this.ptupuatrSegundoNombre.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrSegundoNombre',
            'Segundo nombre');
        this.ptupuatrSegundoNombre.mandatory = false;
        this.ptupuatrSegundoNombre.dataType = Field.dtString;
        this.ptupuatrSegundoNombre.maxLength = 50;
        this.ptupuatrSegundoNombre.assignCSS();
        this.fields.push(this.ptupuatrSegundoNombre);

        this.ptupuatrPrimerApellido.nameInRequest = 'pt_p_atrprimerapellido';
        this.ptupuatrPrimerApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrPrimerApellido',
            'Primer Apellido');
        this.ptupuatrPrimerApellido.mandatory = false;
        this.ptupuatrPrimerApellido.dataType = Field.dtString;
        this.ptupuatrPrimerApellido.maxLength = 50;
        this.ptupuatrPrimerApellido.assignCSS();
        this.fields.push(this.ptupuatrPrimerApellido);

        this.ptupuatrSegundoApellido.nameInRequest = 'pt_p_atrsegundoapellido';
        this.ptupuatrSegundoApellido.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrSegundoApellido',
            'Segundo Apellido');
        this.ptupuatrSegundoApellido.mandatory = false;
        this.ptupuatrSegundoApellido.dataType = Field.dtString;
        this.ptupuatrSegundoApellido.maxLength = 50;
        this.ptupuatrSegundoApellido.assignCSS();
        this.fields.push(this.ptupuatrSegundoApellido);

        this.ptupuatrFechaNacimiento.nameInRequest = 'pt_p_atrfechanacimiento';
        this.ptupuatrFechaNacimiento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrFechaNacimiento',
            'Fecha nacimiento');
        this.ptupuatrFechaNacimiento.mandatory = false;
        this.ptupuatrFechaNacimiento.dataType = Field.dtDate;
        this.ptupuatrFechaNacimiento.assignCSS();
        this.fields.push(this.ptupuatrFechaNacimiento);

        this.ptupuatrGenero.nameInRequest = 'pt_p_atrgenero';
        this.ptupuatrGenero.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrGenero',
            'Género');
        this.ptupuatrGenero.mandatory = false;
        this.ptupuatrGenero.dataType = Field.dtString;
        this.ptupuatrGenero.options = DefinedSelections.DS_GENERO;
        this.ptupuatrGenero.maxLength = 1;
        this.ptupuatrGenero.assignCSS();
        this.fields.push(this.ptupuatrGenero);

        this.ptupuatrIndicadorExtranjero.nameInRequest = 'pt_p_atrindicadorextranjero';
        this.ptupuatrIndicadorExtranjero.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrIndicadorExtranjero',
            'Indicador extranjero');
        this.ptupuatrIndicadorExtranjero.mandatory = true;
        this.ptupuatrIndicadorExtranjero.dataType = Field.dtBool;
        this.ptupuatrIndicadorExtranjero.options = DefinedSelections.DS_SINO;
        this.ptupuatrIndicadorExtranjero.assignCSS();
        this.fields.push(this.ptupuatrIndicadorExtranjero);

        this.ptupuatrTelefonoFijo.nameInRequest = 'pt_p_atrtelefonofijo';
        this.ptupuatrTelefonoFijo.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrTelefonoFijo',
            'Teléfono fijo');
        this.ptupuatrTelefonoFijo.mandatory = false;
        this.ptupuatrTelefonoFijo.dataType = Field.dtString;
        this.ptupuatrTelefonoFijo.maxLength = 15;
        this.ptupuatrTelefonoFijo.assignCSS();
        this.fields.push(this.ptupuatrTelefonoFijo);

        this.ptupuatrTelefonoCelular.nameInRequest = 'pt_p_atrtelefonocelular';
        this.ptupuatrTelefonoCelular.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrTelefonoCelular',
            'Teléfono celular');
        this.ptupuatrTelefonoCelular.mandatory = false;
        this.ptupuatrTelefonoCelular.dataType = Field.dtString;
        this.ptupuatrTelefonoCelular.maxLength = 15;
        this.ptupuatrTelefonoCelular.assignCSS();
        this.fields.push(this.ptupuatrTelefonoCelular);

        this.ptupuatrCorreoElectronico.nameInRequest = 'pt_p_atrcorreoelectronico';
        this.ptupuatrCorreoElectronico.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrCorreoElectronico',
            'Correo electrónico');
        this.ptupuatrCorreoElectronico.mandatory = false;
        this.ptupuatrCorreoElectronico.dataType = Field.dtString;
        this.ptupuatrCorreoElectronico.maxLength = 100;
        this.ptupuatrCorreoElectronico.assignCSS();
        this.fields.push(this.ptupuatrCorreoElectronico);

        this.ptupuagrDepartamento.nameInRequest = 'pt_p_agrdepartamento';
        this.ptupuagrDepartamento.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrDepartamento',
            'Departamento');
        this.ptupuagrDepartamento.mandatory = true;
        this.ptupuagrDepartamento.dataType = ModelConstants.Departamento.name;
        this.ptupuagrDepartamento.maxLength = 150;
        this.ptupuagrDepartamento.assignCSS();
        this.fields.push(this.ptupuagrDepartamento);

        this.ptupuagrMunicipio.nameInRequest = 'pt_p_agrmunicipio';
        this.ptupuagrMunicipio.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrMunicipio',
            'Municipio');
        this.ptupuagrMunicipio.mandatory = true;
        this.ptupuagrMunicipio.dataType = ModelConstants.Municipio.name;
        this.ptupuagrMunicipio.maxLength = 150;
        this.ptupuagrMunicipio.assignCSS();
        this.fields.push(this.ptupuagrMunicipio);

        this.ptupuatrDireccionCompleta.nameInRequest = 'pt_p_atrdireccioncompleta';
        this.ptupuatrDireccionCompleta.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrDireccionCompleta',
            'Dirección completa');
        this.ptupuatrDireccionCompleta.mandatory = true;
        this.ptupuatrDireccionCompleta.dataType = Field.dtString;
        this.ptupuatrDireccionCompleta.maxLength = 250;
        this.ptupuatrDireccionCompleta.assignCSS();
        this.fields.push(this.ptupuatrDireccionCompleta);

        this.ptupuatrRural.nameInRequest = 'pt_p_atrrural';
        this.ptupuatrRural.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_atrRural',
            'Rural');
        this.ptupuatrRural.mandatory = true;
        this.ptupuatrRural.dataType = Field.dtBool;
        this.ptupuatrRural.options = DefinedSelections.DS_SINO;
        this.ptupuatrRural.assignCSS();
        this.fields.push(this.ptupuatrRural);

        this.ptupuCodigo.nameInRequest = 'pt_p_codigo';
        this.ptupuCodigo.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_Codigo',
            'Código');
        this.ptupuCodigo.mandatory = false;
        this.ptupuCodigo.dataType = Field.dtInt;
        this.ptupuCodigo.assignCSS();
        this.fields.push(this.ptupuCodigo);

        this.ptupuagrPais.nameInRequest = 'pt_p_agrpais';
        this.ptupuagrPais.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_pt_p_agrPais',
            'País');
        this.ptupuagrPais.mandatory = false;
        this.ptupuagrPais.dataType = ModelConstants.Pais.name;
        this.ptupuagrPais.maxLength = 50;
        this.ptupuagrPais.assignCSS();
        this.fields.push(this.ptupuagrPais);

        this.ptRazonSocial.nameInRequest = 'ptrazonsocial';
        this.ptRazonSocial.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_ptRazonSocial',
            'Razón Social');
        this.ptRazonSocial.mandatory = false;
        this.ptRazonSocial.dataType = Field.dtString;
        this.ptRazonSocial.maxLength = 200;
        this.ptRazonSocial.assignCSS();
        this.fields.push(this.ptRazonSocial);

        this.ptUsuExistente.nameInRequest = 'ptusuexistente';
        this.ptUsuExistente.alias = this.langMng.translateText(
            'cls_FamiliaNovedad_svc_TADDTITULAR_inArg_ptUsuExistente',
            'Usuario existente');
        this.ptUsuExistente.mandatory = false;
        this.ptUsuExistente.dataType = ModelConstants.Usuarionovedad.name;
        this.ptUsuExistente.maxLength = 210;
        this.ptUsuExistente.assignCSS();
        this.fields.push(this.ptUsuExistente);
    }

    /**
     * Initialize with default values
     */
    public override initializeDefaultValues(): Promise<void> {
        return new Promise<void>((resolve) => {
            const promiseArr: Array<Promise<void>> = [];

            // pt_p_atrIndicadorExtranjero
            const defValptupuatrIndicadorExtranjero = new Promise<void>((resolveDefValue) => {
                this.ptupuatrIndicadorExtranjero.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrIndicadorExtranjero);

            // pt_p_atrRural
            const defValptupuatrRural = new Promise<void>((resolveDefValue) => {
                this.ptupuatrRural.setValue(false);
                resolveDefValue();
            });
            promiseArr.push(defValptupuatrRural);

            Promise.all(promiseArr).then((results: any[]) => {
                this.setShowWait(false);
                this.changeDetectorRef.markForCheck();
                resolve();
            });
        });
    }

    /**
     * Initialize from context the 'This' argument
     */
    public override initializeFromCtxArgumentThis(): void {
        if (this.context.exchangeInfo &&
            ['FamiliaNovedad'].includes(this.context.exchangeInfo.selectedOidsClassName) &&
            this.context.exchangeInfo.selectedOids && this.context.exchangeInfo.selectedOids.length > 0) {
            this.puthisFamiliaNovedad.setValue(this.context.exchangeInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', true);
            this.puthisFamiliaNovedad.enabled = false;
            this.executeDependecyRulesputhisfamilianovedad('SetEnabled', true);
        }
    }

    /**
     * Initialize arguments from context that identify a Role
     */
    public override initializeFromCtxRelated(): void {
        let lastRole = '';
        let lastRoleOid = null;
        if (this.context.exchangeInfo) {
            lastRole = this.context.exchangeInfo.getLastNavigationRole();
            lastRoleOid = this.context.exchangeInfo.getLastNavigationRoleOid();
        }

        if (lastRole && lastRoleOid) {
            if (lastRole === 'TipoIdentificacion') {
                this.ptupuagrTipoIdentificacion.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
                this.ptupuagrTipoIdentificacion.enabled = false;
                this.executeDependecyRulesptupuagrtipoidentificacion('SetEnabled', true);
            }
            if (lastRole === 'DepartamentoNac') {
                this.ptupuagrDepartamentoNacimiento.setValue(lastRoleOid);
                this.ptupuagrDepartamentoNacimiento.enabled = false;
                this.loadPreloadptupuagrmunicipionacimiento();
            }
            if (lastRole === 'MunicipioNac') {
                this.ptupuagrMunicipioNacimiento.setValue(lastRoleOid);
                this.ptupuagrMunicipioNacimiento.enabled = false;
            }
            if (lastRole === 'DepartamentoRes') {
                this.ptupuagrDepartamento.setValue(lastRoleOid);
                this.ptupuagrDepartamento.enabled = false;
                this.loadPreloadptupuagrmunicipio();
            }
            if (lastRole === 'MunicipioRes') {
                this.ptupuagrMunicipio.setValue(lastRoleOid);
                this.ptupuagrMunicipio.enabled = false;
            }
            if (lastRole === 'Pais') {
                this.ptupuagrPais.setValue(lastRoleOid);
                this.executeDependecyRulesptupuagrpais('SetValue', true);
                this.ptupuagrPais.enabled = false;
                this.executeDependecyRulesptupuagrpais('SetEnabled', true);
            }
        }
    }

    /**
     * Search the preload values of non dependent fields
     */
    public override loadPreload(): void {

        // ptupuagrTipoIdentificacion
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('TipoIdentificacion', 'IC_TipoIdentificacion', [], null, 'OC_TipoIdentificacion').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrTipoIdentificacion.loadPreload(response.results);
                } else {
                    this.ptupuagrTipoIdentificacion.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptupuagrDepartamentoNacimiento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamentoNacimiento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamentoNacimiento.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;

        // ptupuagrDepartamento
        this.notifyCallToTheBackEnd();
        this.util.searchPreload('Departamento', 'IC_Departamento', [], null, 'OC_Departamento').then(
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                if (response && response.results) {
                    this.ptupuagrDepartamento.loadPreload(response.results);
                } else {
                    this.ptupuagrDepartamento.loadPreload([]);
                }
                this.numberOfPendingPreload--;
                this.initializeFromContext();
                this.changeDetectorRef.markForCheck();
            },
            (response: any) => {
                this.notifyAnswerFromToTheBackEnd();
                this.processErrorInLoadPreload(response.resultDescription);
            }
        );
        this.numberOfPendingPreload++;
    }

    /**
     * Search the preload values of field pt_p_agrMunicipioNacimiento
     */
    private loadPreloadptupuagrmunicipionacimiento(): void {

        if (this.ptupuagrDepartamentoNacimiento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('FamiliaNovedad_TADDTITULAR_pt_p_agrMunicipioNacimiento_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipioNacimiento.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipioNacimiento.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipioNacimiento.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipioNacimiento.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field pt_p_agrMunicipio
     */
    private loadPreloadptupuagrmunicipio(): void {

        if (this.ptupuagrDepartamento.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('FamiliaNovedad_TADDTITULAR_pt_p_agrMunicipio_NavFilter0');
            this.util.searchPreload('Municipio', 'IC_Municipio', navFilters, this.getNavigationFilterVariables(), 'OC_Municipio').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptupuagrMunicipio.loadPreload(response.results);
                    } else {
                        this.ptupuagrMunicipio.loadPreload([]);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptupuagrMunicipio.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            this.ptupuagrMunicipio.cleanPreload();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

    /**
     * Search the preload values of field ptUsuExistente
     */
    private loadPreloadptusuexistente(): void {

        if (this.puthisFamiliaNovedad.getSelectedInstances().length === 1) {
            const navFilters: string[] = [];
            navFilters.push('FamiliaNovedad_TADDTITULAR_ptUsuExistente_NavFilter0');
            this.util.searchPreload('UsuarioNovedad', 'IC_UsuarioNovedad', navFilters, this.getNavigationFilterVariables(), '').then(
                (response: any) => {
                    if (response && response.results) {
                        this.ptUsuExistente.loadPreload(response.results);
                    } else {
                        this.ptUsuExistente.loadPreload([]);
                    }
                    if (this.ptUsuExistente.getSelectedInstances().length > 0) {
                        this.executeDependecyRulesptusuexistente('SetValue', true);
                    }
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                },
                (response: any) => {
                    this.ptUsuExistente.cleanPreload();
                    this.util.addErrorMessage(response.resultDescription);
                    this.executePendingDependencyRules();
                    this.changeDetectorRef.markForCheck();
                }
            );
        } else {
            if (this.ptUsuExistente.getSelectedInstances().length > 0) {
                this.ptUsuExistente.cleanPreload();
                this.executeDependecyRulesptusuexistente('SetValue', true);
            } else {
                this.ptUsuExistente.cleanPreload();
            }
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
    }

   /**
    * Process the selection backward navigation
    */
    public override processSelectionBackward(exchInfo: ExchangeInfo): void {
        if (!(exchInfo.selectedOids && exchInfo.selectedOids.length > 0)) {
            return;
        }
        if (exchInfo.originArgumentName.toLowerCase() === 'puthisFamiliaNovedad'.toLowerCase()) {
            this.puthisFamiliaNovedad.addOids(exchInfo.selectedOids);
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        }

        if (exchInfo.originArgumentName.toLowerCase() === 'ptupuagrPais'.toLowerCase()) {
            this.ptupuagrPais.addOids(exchInfo.selectedOids);
            this.executeDependecyRulesptupuagrpais('SetValue', false);
        }

    }

    /**
     * Evaluate dependendy rules for p_thisFamiliaNovedad argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesputhisfamilianovedad(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoputhisfamilianovedad();
        }

        // Load dependent preload
        if ('SetValue' === event) {
            this.loadPreloadptusuexistente();
        }
        if ('SetValue' === event && this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1puthisFamiliaNovedad();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2puthisFamiliaNovedad();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the p_thisFamiliaNovedad argument
     */
    private setSuppInfoputhisfamilianovedad(): void {

        const displaySetIC = 'NumFamilia';
        let numberMissingSupInfo = 0;
        for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.setOidFieldsValueputhisFamiliaNovedad();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.puthisFamiliaNovedad.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Familianovedad.name,
                            value.oid, displaySetIC, [Field.dtNat]);
                    }
                }
                this.setOidFieldsValueputhisFamiliaNovedad();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFamiliaNovedad,
                'novedadct.id_NovedadCT,novedadct.departamentores.Codigo,novedadct.departamentonac.Codigo,novedadct.municipiores.Codigo' +
                ',novedadct.municipionac.Codigo,novedadct.pais.Codigo,novedadct.tipoidentificacion.Codigo,novedadct.correoelectronico' +
                ',novedadct.direccioncompleta,novedadct.fechanacimiento,novedadct.genero,novedadct.indicadorextranjero' +
                ',novedadct.titnumidentificacion,novedadct.titprimerapellido,novedadct.titprimernombre,novedadct.rural' +
                ',novedadct.titsegundoapellido,novedadct.titsegundonombre,novedadct.telefonocelular,novedadct.telefonofijo' +
                ',novedadct.codigocore,novedadct.titrazonsocial,id_FamiliaNovedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1puthisFamiliaNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules1puthisFamiliaNovedadActions(): void {
        const varputhisfamilianovedad = this.getFirstInstanceFromCache(this.puthisFamiliaNovedad);
        // v <> NULL AND p_thisfamilianovedad.novedadct <> NULL
        if (varputhisfamilianovedad && !this.util.isNull(varputhisfamilianovedad) &&
            !this.util.isNull(this.util.oidBuilder.buildOidNovedadCT(
            this.util.getInt(varputhisfamilianovedad.get('novedadct.id_NovedadCT'))))) {
            // pt_p_agrDepartamento.SetValue( v.novedadct.departamentores )
            this.ptupuagrDepartamento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhisfamilianovedad.get('novedadct.departamentores.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipio');
            // pt_p_agrDepartamentoNacimiento.SetValue( v.novedadct.departamentonac )
            this.ptupuagrDepartamentoNacimiento.setValue(this.util.oidBuilder.buildOidDepartamento(
                this.util.getInt(varputhisfamilianovedad.get('novedadct.departamentonac.Codigo'))));
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrMunicipio.SetValue( v.novedadct.municipiores )
            this.ptupuagrMunicipio.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhisfamilianovedad.get('novedadct.municipiores.Codigo'))));
            // pt_p_agrMunicipioNacimiento.SetValue( v.novedadct.municipionac )
            this.ptupuagrMunicipioNacimiento.setValue(this.util.oidBuilder.buildOidMunicipio(
                this.util.getInt(varputhisfamilianovedad.get('novedadct.municipionac.Codigo'))));
            // pt_p_agrPais.SetValue( v.novedadct.pais )
            this.ptupuagrPais.setValue(this.util.oidBuilder.buildOidPais(
                varputhisfamilianovedad.get('novedadct.pais.Codigo')));
            this.executeDependecyRulesptupuagrpais('SetValue', true);
            // pt_p_agrTipoIdentificacion.SetValue( v.novedadct.tipoidentificacion )
            this.ptupuagrTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varputhisfamilianovedad.get('novedadct.tipoidentificacion.Codigo'))));
            this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
            // pt_p_atrCorreoElectronico.SetValue( v.novedadct.correoelectronico )
            this.ptupuatrCorreoElectronico.setValue(varputhisfamilianovedad.get('novedadct.correoelectronico'));
            // pt_p_atrDireccionCompleta.SetValue( v.novedadct.direccioncompleta )
            this.ptupuatrDireccionCompleta.setValue(varputhisfamilianovedad.get('novedadct.direccioncompleta'));
            // pt_p_atrFechaNacimiento.SetValue( v.novedadct.fechanacimiento )
            this.ptupuatrFechaNacimiento.setValue(this.util.getDate(varputhisfamilianovedad.get('novedadct.fechanacimiento')));
            // pt_p_atrGenero.SetValue( v.novedadct.genero )
            this.ptupuatrGenero.setValue(varputhisfamilianovedad.get('novedadct.genero'));
            // pt_p_atrIndicadorExtranjero.SetValue( v.novedadct.indicadorextranjero )
            this.ptupuatrIndicadorExtranjero.setValue(this.util.getBool(varputhisfamilianovedad.get('novedadct.indicadorextranjero')));
            this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
            // pt_p_atrNumIdentificacion.SetValue( v.novedadct.titnumidentificacion )
            this.ptupuatrNumIdentificacion.setValue(varputhisfamilianovedad.get('novedadct.titnumidentificacion'));
            this.executeDependecyRulesptupuatrnumidentificacion('SetValue', true);
            // pt_p_atrPrimerApellido.SetValue( v.novedadct.titprimerapellido )
            this.ptupuatrPrimerApellido.setValue(varputhisfamilianovedad.get('novedadct.titprimerapellido'));
            // pt_p_atrPrimerNombre.SetValue( v.novedadct.titprimernombre )
            this.ptupuatrPrimerNombre.setValue(varputhisfamilianovedad.get('novedadct.titprimernombre'));
            // pt_p_atrRural.SetValue( v.novedadct.rural )
            this.ptupuatrRural.setValue(this.util.getBool(varputhisfamilianovedad.get('novedadct.rural')));
            // pt_p_atrSegundoApellido.SetValue( v.novedadct.titsegundoapellido )
            this.ptupuatrSegundoApellido.setValue(varputhisfamilianovedad.get('novedadct.titsegundoapellido'));
            // pt_p_atrSegundoNombre.SetValue( v.novedadct.titsegundonombre )
            this.ptupuatrSegundoNombre.setValue(varputhisfamilianovedad.get('novedadct.titsegundonombre'));
            // pt_p_atrTelefonoCelular.SetValue( v.novedadct.telefonocelular )
            this.ptupuatrTelefonoCelular.setValue(varputhisfamilianovedad.get('novedadct.telefonocelular'));
            // pt_p_atrTelefonoFijo.SetValue( v.novedadct.telefonofijo )
            this.ptupuatrTelefonoFijo.setValue(varputhisfamilianovedad.get('novedadct.telefonofijo'));
            // pt_p_Codigo.SetValue( v.novedadct.codigocore )
            this.ptupuCodigo.setValue(this.util.getInt(varputhisfamilianovedad.get('novedadct.codigocore')));
            // ptRazonSocial.SetValue( v.novedadct.titrazonsocial )
            this.ptRazonSocial.setValue(varputhisfamilianovedad.get('novedadct.titrazonsocial'));
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules2puthisFamiliaNovedad(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.puthisFamiliaNovedad,
                'id_FamiliaNovedad');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2puthisFamiliaNovedadActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for p_thisFamiliaNovedad argument
     */
    private executeDependecyRules2puthisFamiliaNovedadActions(): void {
        const varputhisfamilianovedad = this.getFirstInstanceFromCache(this.puthisFamiliaNovedad);
        // v <> NULL
        if (varputhisfamilianovedad && !this.util.isNull(varputhisfamilianovedad)) {
            // p_thisFamiliaNovedad.SetVisible( FALSE )
            this.puthisFamiliaNovedad.visible = false;
            // pt_p_agrPais.SetVisible( FALSE )
            this.ptupuagrPais.visible = false;
            // pt_p_Codigo.SetVisible( FALSE )
            this.ptupuCodigo.visible = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

   /**
    * Set values to the Oid fields and supplementary information of p_thisFamiliaNovedad lense argument
    */
    private setOidFieldsValueputhisFamiliaNovedad(): void {
        if (this.puthisFamiliaNovedad.getSelectedInstances().length > 0) {
            if (this.puthisFamiliaNovedad.getSelectedInstances().length > 1) {
                this.puthisFamiliaNovedad.oidFields = [null];
                this.puthisFamiliaNovedad.editorsEnabled = false;
                this.puthisFamiliaNovedad.supplementaryInfo = this.langMng.translateTextWithParams(
                    LanguageMng.fsNumberInstacesSelected, '',
                    this.puthisFamiliaNovedad.getSelectedInstances().length.toString());
            } else {
                this.puthisFamiliaNovedad.editorsEnabled = true;
                this.puthisFamiliaNovedad.oidFields[0] = this.puthisFamiliaNovedad.getSelectedInstances()[0].oid.id_familianovedad;
                this.puthisFamiliaNovedad.supplementaryInfo = this.puthisFamiliaNovedad.getSelectedInstances()[0].supplementaryInfo;
            }
        } else {
            this.puthisFamiliaNovedad.oidFields = Array(1);
            this.puthisFamiliaNovedad.supplementaryInfo = '';
        }

    }

    /**
     * Process the change in the p_thisFamiliaNovedad lense argument
     */
    public onputhisfamilianovedadChange(): void {
        this.clearValidationMessages();
        let fieldsHasValue = true;
        for (const field of this.puthisFamiliaNovedad.oidFields) {
            if (!field) {
                fieldsHasValue = false;
                break;
            }
        }

        this.puthisFamiliaNovedad.cleanSelectedInstances();
        if (fieldsHasValue) {
            const oid = {
            id_familianovedad: this.puthisFamiliaNovedad.oidFields[0]
            };
            this.puthisFamiliaNovedad.setValue(oid);
            this.cacheDependencyRules.addQueryInstance(ModelConstants.Familianovedad.name, oid,
                'NumFamilia');
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                this.puthisFamiliaNovedad.getSelectedInstances().forEach((value) => {
                    if (!this.cacheDependencyRules.existInstance(ModelConstants.Familianovedad.name, value.oid)) {
                        this.puthisFamiliaNovedad.setValidationMessage(this.langMng.translateTextWithParams(
                            LanguageMng.fsErrorNotExist, '', this.puthisFamiliaNovedad.alias));
                        this.puthisFamiliaNovedad.cleanSelectedInstances();
                        this.puthisFamiliaNovedad.supplementaryInfo = '';
                    } else {
                        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
                    }
                    this.changeDetectorRef.markForCheck();
                });
            });
        }
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean p_thisFamiliaNovedad argument value
     */
    public cleanputhisfamilianovedad(): void {
        this.clearValidationMessages();
        this.puthisFamiliaNovedad.clean();
        this.puthisFamiliaNovedad.oidFields = Array(1);
        this.executeDependecyRulesputhisfamilianovedad('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrTipoIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrtipoidentificacion(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptupuagrTipoIdentificacion.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuagrTipoIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuagrTipoIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules1ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.nit = true
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), true)) {
            // pt_p_agrDepartamentoNacimiento.SetVisible( FALSE )
            this.ptupuagrDepartamentoNacimiento.visible = false;
            // pt_p_agrDepartamentoNacimiento.SetValue( NULL )
            this.ptupuagrDepartamentoNacimiento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrDepartamentoNacimiento.SetMandatory( FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = false;
            // pt_p_agrMunicipioNacimiento.SetVisible( FALSE )
            this.ptupuagrMunicipioNacimiento.visible = false;
            // pt_p_agrMunicipioNacimiento.SetValue( NULL )
            this.ptupuagrMunicipioNacimiento.setValue(null);
            // pt_p_agrMunicipioNacimiento.SetMandatory( FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = false;
            // pt_p_atrFechaNacimiento.SetValue( NULL )
            this.ptupuatrFechaNacimiento.setValue(null);
            // pt_p_atrFechaNacimiento.SetVisible( FALSE )
            this.ptupuatrFechaNacimiento.visible = false;
            // pt_p_atrFechaNacimiento.SetMandatory( FALSE )
            this.ptupuatrFechaNacimiento.mandatory = false;
            // pt_p_atrGenero.SetVisible( FALSE )
            this.ptupuatrGenero.visible = false;
            // pt_p_atrGenero.SetValue( NULL )
            this.ptupuatrGenero.setValue(null);
            // pt_p_atrGenero.SetMandatory( FALSE )
            this.ptupuatrGenero.mandatory = false;
            // pt_p_atrIndicadorExtranjero.SetValue( FALSE )
            this.ptupuatrIndicadorExtranjero.setValue(false);
            this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
            // pt_p_atrIndicadorExtranjero.SetVisible( FALSE )
            this.ptupuatrIndicadorExtranjero.visible = false;
            // pt_p_atrIndicadorExtranjero.SetMandatory( FALSE )
            this.ptupuatrIndicadorExtranjero.mandatory = false;
            // pt_p_atrPrimerApellido.SetVisible( FALSE )
            this.ptupuatrPrimerApellido.visible = false;
            // pt_p_atrPrimerApellido.SetValue( NULL )
            this.ptupuatrPrimerApellido.setValue(null);
            // pt_p_atrPrimerApellido.SetMandatory( FALSE )
            this.ptupuatrPrimerApellido.mandatory = false;
            // pt_p_atrSegundoApellido.SetVisible( FALSE )
            this.ptupuatrSegundoApellido.visible = false;
            // pt_p_atrSegundoApellido.SetValue( NULL )
            this.ptupuatrSegundoApellido.setValue(null);
            // pt_p_atrSegundoApellido.SetMandatory( FALSE )
            this.ptupuatrSegundoApellido.mandatory = false;
            // pt_p_atrPrimerNombre.SetVisible( FALSE )
            this.ptupuatrPrimerNombre.visible = false;
            // pt_p_atrPrimerNombre.SetValue( NULL )
            this.ptupuatrPrimerNombre.setValue(null);
            // pt_p_atrPrimerNombre.SetMandatory( FALSE )
            this.ptupuatrPrimerNombre.mandatory = false;
            // pt_p_atrSegundoNombre.SetVisible( FALSE )
            this.ptupuatrSegundoNombre.visible = false;
            // pt_p_atrSegundoNombre.SetValue( NULL )
            this.ptupuatrSegundoNombre.setValue(null);
            // pt_p_atrSegundoNombre.SetMandatory( FALSE )
            this.ptupuatrSegundoNombre.mandatory = false;
            // ptRazonSocial.SetVisible( TRUE )
            this.ptRazonSocial.visible = true;
            // ptRazonSocial.SetMandatory( TRUE )
            this.ptRazonSocial.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptupuagrTipoIdentificacion,
                'nit');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules2ptupuagrTipoIdentificacionActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_agrTipoIdentificacion argument
     */
    private executeDependecyRules2ptupuagrTipoIdentificacionActions(): void {
        const varptupuagrtipoidentificacion = this.getFirstInstanceFromCache(this.ptupuagrTipoIdentificacion);
        // v <> NULL AND v.nit = false
        if (varptupuagrtipoidentificacion && !this.util.isNull(varptupuagrtipoidentificacion) &&
            this.util.valueEquals(this.util.getBool(varptupuagrtipoidentificacion.get('nit')), false)) {
            // pt_p_agrDepartamentoNacimiento.SetVisible( TRUE )
            this.ptupuagrDepartamentoNacimiento.visible = true;
            // pt_p_agrDepartamentoNacimiento.SetValue( NULL )
            this.ptupuagrDepartamentoNacimiento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrDepartamentoNacimiento.SetMandatory( TRUE )
            this.ptupuagrDepartamentoNacimiento.mandatory = true;
            // pt_p_agrMunicipioNacimiento.SetVisible( TRUE )
            this.ptupuagrMunicipioNacimiento.visible = true;
            // pt_p_agrMunicipioNacimiento.SetValue( NULL )
            this.ptupuagrMunicipioNacimiento.setValue(null);
            // pt_p_agrMunicipioNacimiento.SetMandatory( TRUE )
            this.ptupuagrMunicipioNacimiento.mandatory = true;
            // pt_p_atrFechaNacimiento.SetValue( NULL )
            this.ptupuatrFechaNacimiento.setValue(null);
            // pt_p_atrFechaNacimiento.SetVisible( TRUE )
            this.ptupuatrFechaNacimiento.visible = true;
            // pt_p_atrFechaNacimiento.SetMandatory( TRUE )
            this.ptupuatrFechaNacimiento.mandatory = true;
            // pt_p_atrGenero.SetVisible( TRUE )
            this.ptupuatrGenero.visible = true;
            // pt_p_atrGenero.SetValue( NULL )
            this.ptupuatrGenero.setValue(null);
            // pt_p_atrGenero.SetMandatory( TRUE )
            this.ptupuatrGenero.mandatory = true;
            // pt_p_atrIndicadorExtranjero.SetValue( FALSE )
            this.ptupuatrIndicadorExtranjero.setValue(false);
            this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', true);
            // pt_p_atrIndicadorExtranjero.SetVisible( TRUE )
            this.ptupuatrIndicadorExtranjero.visible = true;
            // pt_p_atrIndicadorExtranjero.SetMandatory( TRUE )
            this.ptupuatrIndicadorExtranjero.mandatory = true;
            // pt_p_atrPrimerApellido.SetVisible( TRUE )
            this.ptupuatrPrimerApellido.visible = true;
            // pt_p_atrPrimerApellido.SetValue( NULL )
            this.ptupuatrPrimerApellido.setValue(null);
            // pt_p_atrPrimerApellido.SetMandatory( TRUE )
            this.ptupuatrPrimerApellido.mandatory = true;
            // pt_p_atrSegundoApellido.SetVisible( TRUE )
            this.ptupuatrSegundoApellido.visible = true;
            // pt_p_atrSegundoApellido.SetValue( NULL )
            this.ptupuatrSegundoApellido.setValue(null);
            // pt_p_atrPrimerNombre.SetVisible( TRUE )
            this.ptupuatrPrimerNombre.visible = true;
            // pt_p_atrPrimerNombre.SetValue( NULL )
            this.ptupuatrPrimerNombre.setValue(null);
            // pt_p_atrPrimerNombre.SetMandatory( TRUE )
            this.ptupuatrPrimerNombre.mandatory = true;
            // pt_p_atrSegundoNombre.SetVisible( TRUE )
            this.ptupuatrSegundoNombre.visible = true;
            // pt_p_atrSegundoNombre.SetValue( NULL )
            this.ptupuatrSegundoNombre.setValue(null);
            // ptRazonSocial.SetVisible( FALSE )
            this.ptRazonSocial.visible = false;
            // ptRazonSocial.SetValue( NULL )
            this.ptRazonSocial.setValue(null);
            // ptRazonSocial.SetMandatory( FALSE )
            this.ptRazonSocial.mandatory = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_agrTipoIdentificacion argument
     */
    public onptupuagrtipoidentificacionChange(): void {
        this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrNumIdentificacion argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrnumidentificacion(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrNumIdentificacion();
        }
        // Rule 2
        if ('SetValue' === event && !internal) {
            this.executeDependecyRules2ptupuatrNumIdentificacion();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrNumIdentificacionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules1ptupuatrNumIdentificacionActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptupuatrNumIdentificacion.value)) {
            this.buscarPersonaenCORE();
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules2ptupuatrNumIdentificacion(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrNumIdentificacionActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrNumIdentificacion argument
     */
    private executeDependecyRules2ptupuatrNumIdentificacionActions(): void {
        // v <> NULL
        if (!this.util.isNull(this.ptupuatrNumIdentificacion.value)) {
            // ptUsuExistente.SetValue( NULL )
            this.ptUsuExistente.setValue(null);
            this.executeDependecyRulesptusuexistente('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrNumIdentificacion argument
     */
    public onptupuatrnumidentificacionChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrnumidentificacion('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_atrIndicadorExtranjero argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuatrindicadorextranjero(event: string, internal: boolean): void {
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptupuatrIndicadorExtranjero();
        }
        // Rule 2
        if ('SetValue' === event) {
            this.executeDependecyRules2ptupuatrIndicadorExtranjero();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules1ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules1ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = TRUE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), true)) {
            // pt_p_agrDepartamentoNacimiento.SetValue( NULL )
            this.ptupuagrDepartamentoNacimiento.setValue(null);
            this.pendingDependencyRules.push('loadPreloadptupuagrmunicipionacimiento');
            // pt_p_agrDepartamentoNacimiento.SetActive( FALSE )
            this.ptupuagrDepartamentoNacimiento.enabled = false;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( FALSE )
            this.ptupuagrDepartamentoNacimiento.mandatory = false;
            // pt_p_agrMunicipioNacimiento.SetValue( NULL )
            this.ptupuagrMunicipioNacimiento.setValue(null);
            // pt_p_agrMunicipioNacimiento.SetActive( FALSE )
            this.ptupuagrMunicipioNacimiento.enabled = false;
            // pt_p_agrMunicipioNacimiento.SetMandatory( FALSE )
            this.ptupuagrMunicipioNacimiento.mandatory = false;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjero(): void {
        this.cacheDependencyRules.counter++;
        try {
            this.executeDependecyRules2ptupuatrIndicadorExtranjeroActions();
        } catch (e) {
            console.log(e);
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        }
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 2 for pt_p_atrIndicadorExtranjero argument
     */
    private executeDependecyRules2ptupuatrIndicadorExtranjeroActions(): void {
        // v <> NULL AND v = FALSE
        if (!this.util.isNull(this.util.getBool(this.ptupuatrIndicadorExtranjero.value)) &&
            this.util.valueEquals(this.util.getBool(this.ptupuatrIndicadorExtranjero.value), false)) {
            // pt_p_agrDepartamentoNacimiento.SetActive( TRUE )
            this.ptupuagrDepartamentoNacimiento.enabled = true;
            // pt_p_agrDepartamentoNacimiento.SetMandatory( TRUE )
            this.ptupuagrDepartamentoNacimiento.mandatory = true;
            // pt_p_agrMunicipioNacimiento.SetActive( TRUE )
            this.ptupuagrMunicipioNacimiento.enabled = true;
            // pt_p_agrMunicipioNacimiento.SetMandatory( TRUE )
            this.ptupuagrMunicipioNacimiento.mandatory = true;
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the pt_p_atrIndicadorExtranjero argument
     */
    public onptupuatrindicadorextranjeroChange(): void {
        this.clearValidationMessages();
        this.executeDependecyRulesptupuatrindicadorextranjero('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for pt_p_agrPais argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptupuagrpais(event: string, internal: boolean): void {
        // Suplementary information
        if ('SetValue' === event) {
            this.setSuppInfoptupuagrpais();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Set the supplementary information to the pt_p_agrPais argument
     */
    private setSuppInfoptupuagrpais(): void {

        const displaySetIC = 'Descripcion';
        let numberMissingSupInfo = 0;
        for (const value of this.ptupuagrPais.getSelectedInstances()) {
            if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                numberMissingSupInfo++;
                this.cacheDependencyRules.addQueryInstance(ModelConstants.Pais.name, value.oid, displaySetIC);
            }
        }

        if (numberMissingSupInfo === 0) {
            this.ptupuagrPais.setText();
            this.executePendingDependencyRules();
            this.changeDetectorRef.markForCheck();
        } else {
            this.notifyCallToTheBackEnd();
            this.cacheDependencyRules.searchAll().then(() => {
                this.notifyAnswerFromToTheBackEnd();
                for (const value of this.ptupuagrPais.getSelectedInstances()) {
                    if (!value.supplementaryInfo || value.supplementaryInfo === '') {
                        value.supplementaryInfo = this.cacheDependencyRules.getText(ModelConstants.Pais.name,
                            value.oid, displaySetIC, [Field.dtString]);
                    }
                }
                this.ptupuagrPais.setText();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            });
        }
    }

    /**
     * Process the change in the pt_p_agrPais lense search argument
     */
    public onptupuagrpaisChange(): void {

        const searchText = this.ptupuagrPais.text;
        if (searchText && searchText !== '') {
            if (searchText !== this.ptupuagrPais.lastText) {
                this.ptupuagrPais.removeCSSClass('noResultsLenseSearch');
                this.ptupuagrPais.lastText = searchText;
                this.util.searchLenseSearch(ModelConstants.Pais.name, 'IC_Pais', searchText, [], null).then(
                        (response: any) => {
                            this.ptupuagrPais.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrPais.searchResults = response.results;
                            if (this.ptupuagrPais.searchResults &&
                                this.ptupuagrPais.searchResults.length === 0) {
                                this.ptupuagrPais.addCSSClass('noResultsLenseSearch');
                            }
                            if (this.ptupuagrPais.searchResults &&
                                this.ptupuagrPais.searchResults.length === 1) {
                                this.processptupuagrpaisSelected(0);
                            }
                            this.changeDetectorRef.markForCheck();
                        },
                        (response: any) => {
                            this.ptupuagrPais.removeCSSClass('noResultsLenseSearch');
                            this.ptupuagrPais.searchResults = [];
                            this.util.addErrorMessage(response.message);
                            this.changeDetectorRef.markForCheck();
                        });
            }
        } else {
            this.ptupuagrPais.removeCSSClass('noResultsLenseSearch');
            this.ptupuagrPais.searchResults = [];
            this.cleanptupuagrpais();
        }

        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the selection in the pt_p_agrPais lense search argument
     */
    public processptupuagrpaisSelected(index: number): void {

        let selectedInstance = null;
        if (index !== -1 && this.ptupuagrPais.searchResults.length > index) {
            selectedInstance = this.ptupuagrPais.searchResults[index];
        }
        // Clean the result list
        this.ptupuagrPais.searchResults = [];
        if (selectedInstance) {
            if (!this.ptupuagrPais.allowMultiSelect) {
                this.ptupuagrPais.cleanSelectedInstances();
            }
            selectedInstance.oid = JSON.parse(selectedInstance.jsonOID);
            this.ptupuagrPais.getSelectedInstances().push(selectedInstance);
        }
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Clean the value of the pt_p_agrPais lense search argument
     */
    public cleanptupuagrpais(): void {
        this.clearValidationMessages();
        this.ptupuagrPais.clean();
        this.executeDependecyRulesptupuagrpais('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Evaluate dependendy rules for ptUsuExistente argument
     * @param event Rule event
     * @param internal Internal or External
     */
    private executeDependecyRulesptusuexistente(event: string, internal: boolean): void {
        if ('SetValue' === event && this.ptUsuExistente.getSelectedInstances().length > 1) {
            return;
        }
        if (!this.cacheDependencyRules.checkCounter()) {
            return;
        }
        // Rule 1
        if ('SetValue' === event) {
            this.executeDependecyRules1ptUsuExistente();
        }
        this.executePendingDependencyRules();
    }

    /**
     * Dependency rule 1 for ptUsuExistente argument
     */
    private executeDependecyRules1ptUsuExistente(): void {
        this.cacheDependencyRules.counter++;
        this.addQueryInstanceFromField(this.ptUsuExistente,
                'tipoidentificacion.Codigo,numidentificacion');
        this.notifyCallToTheBackEnd();
        this.cacheDependencyRules.searchAll().then(() => {
            this.notifyAnswerFromToTheBackEnd();
            try {
                this.executeDependecyRules1ptUsuExistenteActions();
            } catch (e) {
                console.log(e);
                this.notifyAnswerFromToTheBackEnd();
                this.executePendingDependencyRules();
                this.changeDetectorRef.markForCheck();
            } });
        this.cacheDependencyRules.counter--;
    }

    /**
     * Actions of dependency rule 1 for ptUsuExistente argument
     */
    private executeDependecyRules1ptUsuExistenteActions(): void {
        const varptusuexistente = this.getFirstInstanceFromCache(this.ptUsuExistente);
        // v <> NULL
        if (varptusuexistente && !this.util.isNull(varptusuexistente)) {
            // pt_p_agrTipoIdentificacion.SetValue( v.tipoidentificacion )
            this.ptupuagrTipoIdentificacion.setValue(this.util.oidBuilder.buildOidTipoIdentificacion(
                this.util.getInt(varptusuexistente.get('tipoidentificacion.Codigo'))));
            this.executeDependecyRulesptupuagrtipoidentificacion('SetValue', true);
            // pt_p_atrNumIdentificacion.SetValue( v.numidentificacion )
            this.ptupuatrNumIdentificacion.setValue(varptusuexistente.get('numidentificacion'));
            this.executeDependecyRulesptupuatrnumidentificacion('SetValue', true);
        }
        this.executePendingDependencyRules();
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Process the change in the ptUsuExistente argument
     */
    public onptusuexistenteChange(): void {
        this.executeDependecyRulesptusuexistente('SetValue', false);
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Manages the change for the pt_p_agrDepartamentoNacimiento argument
     */
    public onptupuagrdepartamentonacimientoChange(): void {
        this.loadPreloadptupuagrmunicipionacimiento();

        this.executePendingDependencyRules();
    }

    /**
     * Manages the change for the pt_p_agrDepartamento argument
     */
    public onptupuagrdepartamentoChange(): void {
        this.loadPreloadptupuagrmunicipio();

        this.executePendingDependencyRules();
    }

   /**
    * Process the click in the lense of any object-valued argument
    * @param argumentName Name of the argument
    */
    public doSearchAction(argumentName: string): void {
        const exchInfo = this.getSelectionForwardExchInfo();
        exchInfo.originArgumentName = argumentName;
        if ('puthisFamiliaNovedad'.toLowerCase() === argumentName.toLowerCase()) {
            this.puthisFamiliaNovedad.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_FamiliaNovedad_Null';
            this.util.navigateSelectionForward(exchInfo);
        }
        if ('ptupuagrPais'.toLowerCase() === argumentName.toLowerCase()) {
            this.ptupuagrPais.completeSelectionForwardExchInfo(exchInfo);
            exchInfo.targetIUName = 'PIU_Pais';
            this.util.navigateSelectionForward(exchInfo);
        }
    }

    /**
     * Returns true if all elements contained in the group are visible
     * @param groupId Group id.
     */
    public isGroupVisible(groupId: string): boolean {
        let isVisible = true;

        if (groupId === '3') {
            isVisible = this.ptRazonSocial.visible;
        }
        if (groupId === '4') {
            isVisible = this.ptupuatrPrimerNombre.visible ||
                this.ptupuatrSegundoNombre.visible ||
                this.ptupuatrPrimerApellido.visible ||
                this.ptupuatrSegundoApellido.visible ||
                this.ptupuatrFechaNacimiento.visible ||
                this.ptupuatrIndicadorExtranjero.visible ||
                this.ptupuagrDepartamentoNacimiento.visible ||
                this.ptupuagrMunicipioNacimiento.visible ||
                this.ptupuatrGenero.visible;
        }
        if (groupId === '6') {
            isVisible = this.ptupuatrDireccionCompleta.visible ||
                this.ptupuagrDepartamento.visible ||
                this.ptupuagrMunicipio.visible ||
                this.ptupuatrRural.visible ||
                this.ptupuatrTelefonoFijo.visible ||
                this.ptupuatrTelefonoCelular.visible;
        }
        return isVisible;
    }

    /**
     * Returns the alias group
     * @param groupId Group id
     */
    public getGroupAlias(groupId: string): string {
        let alias = '';

        if (groupId === '3') {
            alias = this.langMng.translateText('3',
                'Persona jurídica');
        }
        if (groupId === '4') {
            alias = this.langMng.translateText('4',
                'Persona natural');
        }
        if (groupId === '6') {
            alias = this.langMng.translateText('6',
                'Dirección');
        }
        return alias;
    }
}
