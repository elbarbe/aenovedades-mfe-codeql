import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopStateNavigationGuard } from '../common/popStateNavigationGuard';
import { LoginGuard } from '../common/loginGuard';
import { LogEstadoDocNovPIUuLogEstadoDocNovComponent } from './piu_logestadodocnov.component';

const routes: Routes = [
    { path: 'piu_logestadodocnov' , component: LogEstadoDocNovPIUuLogEstadoDocNovComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogEstadoDocNovRoutingModule { }
