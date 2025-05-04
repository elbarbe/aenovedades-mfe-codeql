import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { GSSIUuOGETREPORTSOLNOVComponent } from './siu_ogetreportsolnov.component';
import { GSSIUuOGETREPORTSOLNOVuOutComponent } from './siu_ogetreportsolnov_out.component';

const routes: Routes = [
    { path: 'siu_ogetreportsolnov' , component: GSSIUuOGETREPORTSOLNOVComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: 'siu_ogetreportsolnov_out' , component: GSSIUuOGETREPORTSOLNOVuOutComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalServicesRoutingModule { }
