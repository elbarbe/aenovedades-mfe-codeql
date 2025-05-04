import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SolicitudNovedadRoutingModule } from './solicitudnovedad-routing.module';
import { SolicitudNovedadSIUumodificarNumMesesComponent } from './siu_modificarnummeses.component';
import { SolicitudNovedadSIUumodificarNuevoNombreComponent } from './siu_modificarnuevonombre.component';
import { SolicitudNovedadSIUuregistrarObservacionesComponent } from './siu_registrarobservaciones.component';
import { SolicitudNovedadSIUudummyNavegarAModificarComponent } from './siu_dummynavegaramodificar.component';
import { SolicitudNovedadSIUuTCREARComponent } from './siu_tcrear.component';
import { SolicitudNovedadSIUuTADDFAMILIAComponent } from './siu_taddfamilia.component';
import { SolicitudNovedadSIUuTCHGNUEVAPERIODICIDADComponent } from './siu_tchgnuevaperiodicidad.component';
import { SolicitudNovedadSIUuTCREAREXCEPCIONComponent } from './siu_tcrearexcepcion.component';
import { SolicitudNovedadSIUuTFIRMARComponent } from './siu_tfirmar.component';
import { SolicitudNovedadMDIUuSolNovTipoContratoComponent } from './mdiu_solnovtipocontrato.component';
import { SolicitudNovedadMDIUuSolNovTipoTitularComponent } from './mdiu_solnovtipotitular.component';
import { SolicitudNovedadMDIUuSolNovTipoUsuarioComponent } from './mdiu_solnovtipousuario.component';
import { SolicitudNovedadPIUuConsultaSolicitudNovedadComponent } from './piu_consultasolicitudnovedad.component';
import { SolicitudNovedadPIUuSolicitudNovedaduNullComponent } from './piu_solicitudnovedad_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SolicitudNovedadRoutingModule
  ],
  declarations: [
    SolicitudNovedadSIUumodificarNumMesesComponent,
    SolicitudNovedadSIUumodificarNuevoNombreComponent,
    SolicitudNovedadSIUuregistrarObservacionesComponent,
    SolicitudNovedadSIUudummyNavegarAModificarComponent,
    SolicitudNovedadSIUuTCREARComponent,
    SolicitudNovedadSIUuTADDFAMILIAComponent,
    SolicitudNovedadSIUuTCHGNUEVAPERIODICIDADComponent,
    SolicitudNovedadSIUuTCREAREXCEPCIONComponent,
    SolicitudNovedadSIUuTFIRMARComponent,
    SolicitudNovedadMDIUuSolNovTipoContratoComponent,
    SolicitudNovedadMDIUuSolNovTipoTitularComponent,
    SolicitudNovedadMDIUuSolNovTipoUsuarioComponent,
    SolicitudNovedadPIUuConsultaSolicitudNovedadComponent,
    SolicitudNovedadPIUuSolicitudNovedaduNullComponent
  ],
  exports: [
    SolicitudNovedadSIUumodificarNumMesesComponent,
    SolicitudNovedadSIUumodificarNuevoNombreComponent,
    SolicitudNovedadSIUuregistrarObservacionesComponent,
    SolicitudNovedadSIUudummyNavegarAModificarComponent,
    SolicitudNovedadSIUuTCREARComponent,
    SolicitudNovedadSIUuTADDFAMILIAComponent,
    SolicitudNovedadSIUuTCHGNUEVAPERIODICIDADComponent,
    SolicitudNovedadSIUuTCREAREXCEPCIONComponent,
    SolicitudNovedadSIUuTFIRMARComponent,
    SolicitudNovedadMDIUuSolNovTipoContratoComponent,
    SolicitudNovedadMDIUuSolNovTipoTitularComponent,
    SolicitudNovedadMDIUuSolNovTipoUsuarioComponent,
    SolicitudNovedadPIUuConsultaSolicitudNovedadComponent,
    SolicitudNovedadPIUuSolicitudNovedaduNullComponent
  ]
})
export class SolicitudNovedadModule { }
