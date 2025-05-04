import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { FamiliaNovedadSIUuTFIRMARTITULARComponent } from './siu_tfirmartitular.component';
import { FamiliaNovedadSIUuTSETDIRCORRComponent } from './siu_tsetdircorr.component';
import { FamiliaNovedadSIUuTADDTITULARComponent } from './siu_taddtitular.component';
import { FamiliaNovedadSIUuTFIRMARNUEVOTITULARComponent } from './siu_tfirmarnuevotitular.component';
import { FamiliaNovedadSIUuTCREARMANUALComponent } from './siu_tcrearmanual.component';
import { FamiliaNovedadSIUuTMODIFICARMANUALComponent } from './siu_tmodificarmanual.component';
import { FamiliaNovedadSIUuTCREARUSUMANUALComponent } from './siu_tcrearusumanual.component';
import { FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent } from './mdiu_famnov_d_tipotitular.component';
import { FamiliaNovedadMDIUuFamNovuDuTipoUsuarioComponent } from './mdiu_famnov_d_tipousuario.component';
import { FamiliaNovedadPIUuFamiliaNovedaduNullComponent } from './piu_familianovedad_null.component';

const routes: Routes = [
    { path: 'siu_tfirmartitular' , component: FamiliaNovedadSIUuTFIRMARTITULARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tsetdircorr' , component: FamiliaNovedadSIUuTSETDIRCORRComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_taddtitular' , component: FamiliaNovedadSIUuTADDTITULARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tfirmarnuevotitular' , component: FamiliaNovedadSIUuTFIRMARNUEVOTITULARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearmanual' , component: FamiliaNovedadSIUuTCREARMANUALComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tmodificarmanual' , component: FamiliaNovedadSIUuTMODIFICARMANUALComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearusumanual' , component: FamiliaNovedadSIUuTCREARUSUMANUALComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_famnov_d_tipotitular' , component: FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'mdiu_famnov_d_tipousuario' , component: FamiliaNovedadMDIUuFamNovuDuTipoUsuarioComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_familianovedad_null' , component: FamiliaNovedadPIUuFamiliaNovedaduNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamiliaNovedadRoutingModule { }
