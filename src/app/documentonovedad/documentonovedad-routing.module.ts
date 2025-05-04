import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { DocumentoNovedadSIUuTAPROBARComponent } from './siu_taprobar.component';
import { DocumentoNovedadSIUuTDEVOLVERComponent } from './siu_tdevolver.component';
import { DocumentoNovedadSIUuTCREARATOComponent } from './siu_tcrearato.component';
import { DocumentoNovedadPIUuDocumentoNovedadComponent } from './piu_documentonovedad.component';
import { DocumentoNovedadPIUuDocumentoNovedaduNullComponent } from './piu_documentonovedad_null.component';

const routes: Routes = [
    { path: 'siu_taprobar' , component: DocumentoNovedadSIUuTAPROBARComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tdevolver' , component: DocumentoNovedadSIUuTDEVOLVERComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_tcrearato' , component: DocumentoNovedadSIUuTCREARATOComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_documentonovedad' , component: DocumentoNovedadPIUuDocumentoNovedadComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'piu_documentonovedad_null' , component: DocumentoNovedadPIUuDocumentoNovedaduNullComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoNovedadRoutingModule { }
