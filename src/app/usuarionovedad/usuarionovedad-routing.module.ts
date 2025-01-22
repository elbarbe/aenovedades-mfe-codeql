import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { UsuarioNovedadSIUumodificarSUNumMesesComponent } from './siu_modificarsunummeses.component';
import { UsuarioNovedadSIUucambiarExcluidoComponent } from './siu_cambiarexcluido.component';
import { UsuarioNovedadSIUucambiarROComponent } from './siu_cambiarro.component';
import { UsuarioNovedadSIUucambiarPSComponent } from './siu_cambiarps.component';
import { UsuarioNovedadSIUucambiarASComponent } from './siu_cambiaras.component';
import { UsuarioNovedadSIUuTCAMBIARPARENTESCOComponent } from './siu_tcambiarparentesco.component';
import { UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent } from './siu_tcambiartipoident.component';
import { UsuarioNovedadSIUuTMODIFICARMANUALComponent } from './siu_tmodificarmanual.component';
import { UsuarioNovedadPIUuUsuarioNovedaduNullComponent } from './piu_usuarionovedad_null.component';

const routes: Routes = [
    { path: 'siu_modificarsunummeses' , component: UsuarioNovedadSIUumodificarSUNumMesesComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_cambiarexcluido' , component: UsuarioNovedadSIUucambiarExcluidoComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_cambiarro' , component: UsuarioNovedadSIUucambiarROComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_cambiarps' , component: UsuarioNovedadSIUucambiarPSComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_cambiaras' , component: UsuarioNovedadSIUucambiarASComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcambiarparentesco' , component: UsuarioNovedadSIUuTCAMBIARPARENTESCOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcambiartipoident' , component: UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarmanual' , component: UsuarioNovedadSIUuTMODIFICARMANUALComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_usuarionovedad_null' , component: UsuarioNovedadPIUuUsuarioNovedaduNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioNovedadRoutingModule { }
