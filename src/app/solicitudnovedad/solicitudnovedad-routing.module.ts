import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
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

const routes: Routes = [
    { path: 'siu_modificarnummeses' , component: SolicitudNovedadSIUumodificarNumMesesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_modificarnuevonombre' , component: SolicitudNovedadSIUumodificarNuevoNombreComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_registrarobservaciones' , component: SolicitudNovedadSIUuregistrarObservacionesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_dummynavegaramodificar' , component: SolicitudNovedadSIUudummyNavegarAModificarComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrear' , component: SolicitudNovedadSIUuTCREARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddfamilia' , component: SolicitudNovedadSIUuTADDFAMILIAComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tchgnuevaperiodicidad' , component: SolicitudNovedadSIUuTCHGNUEVAPERIODICIDADComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearexcepcion' , component: SolicitudNovedadSIUuTCREAREXCEPCIONComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tfirmar' , component: SolicitudNovedadSIUuTFIRMARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_solnovtipocontrato' , component: SolicitudNovedadMDIUuSolNovTipoContratoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_solnovtipotitular' , component: SolicitudNovedadMDIUuSolNovTipoTitularComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_solnovtipousuario' , component: SolicitudNovedadMDIUuSolNovTipoUsuarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_consultasolicitudnovedad' , component: SolicitudNovedadPIUuConsultaSolicitudNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_solicitudnovedad_null' , component: SolicitudNovedadPIUuSolicitudNovedaduNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudNovedadRoutingModule { }
