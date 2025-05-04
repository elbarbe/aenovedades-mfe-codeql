import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { ProteccionDatosSIUuTCREARSOLNOVEDADComponent } from './siu_tcrearsolnovedad.component';
import { ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent } from './siu_tcrearsolnovedadexcepcion.component';
import { ProteccionDatosPIUuProteccionDatosuNullComponent } from './piu_protecciondatos_null.component';

const routes: Routes = [
    { path: 'siu_tcrearsolnovedad' , component: ProteccionDatosSIUuTCREARSOLNOVEDADComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearsolnovedadexcepcion' , component: ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_protecciondatos_null' , component: ProteccionDatosPIUuProteccionDatosuNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProteccionDatosRoutingModule { }
