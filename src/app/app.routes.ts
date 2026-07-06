import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppMainPage } from './app.mainpage';
import { LoginComponent } from './login/login.component';
import { ConditionalNavigationComponent } from './common/conditionalNavigation.component';
import { ClassServiceLogComponent } from './common/classServiceLog.component';
import { NoAccessComponent } from './common/noAccess.component';
import { WrongVersionComponent } from './common/wrongVersion.component';
import { LoginGuard } from './common/loginGuard';
import { PopStateNavigationGuard } from './common/popStateNavigationGuard';
import { GenericSiuComponent } from './common/genericSiu.component';
import { ProcessNewWindowComponent } from './common/processNewWindow.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

const routes: Routes = [
    // full : makes sure the path is absolute path
    { path: environment.prefix + '', component: AppMainPage, pathMatch: 'full', canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/noaccess', component : NoAccessComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/wrongversion', component : WrongVersionComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/main', component: AppMainPage, canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/login', component: LoginComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/genericsiu', component: GenericSiuComponent, canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/conditionalnavigation', component: ConditionalNavigationComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/classServiceLog', component: ClassServiceLogComponent,
        canActivate: [LoginGuard], canDeactivate: [PopStateNavigationGuard] },
    { path: environment.prefix + '/processnw', component: ProcessNewWindowComponent},
    { path: environment.prefix + '/pais',
      loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule) },
    { path: environment.prefix + '/protecciondatos',
      loadChildren: () => import('./protecciondatos/protecciondatos.module').then(m => m.ProteccionDatosModule) },
    { path: environment.prefix + '/solicitudnovedad',
      loadChildren: () => import('./solicitudnovedad/solicitudnovedad.module').then(m => m.SolicitudNovedadModule) },
    { path: environment.prefix + '/familianovedad',
      loadChildren: () => import('./familianovedad/familianovedad.module').then(m => m.FamiliaNovedadModule) },
    { path: environment.prefix + '/usuarionovedad',
      loadChildren: () => import('./usuarionovedad/usuarionovedad.module').then(m => m.UsuarioNovedadModule) },
    { path: environment.prefix + '/documentonovedad',
      loadChildren: () => import('./documentonovedad/documentonovedad.module').then(m => m.DocumentoNovedadModule) },
    { path: environment.prefix + '/logestadodocnov',
      loadChildren: () => import('./logestadodocnov/logestadodocnov.module').then(m => m.LogEstadoDocNovModule) },
    { path: environment.prefix + '/globalservices',
      loadChildren: () => import('./globalservices/globalservices.module').then(m => m.GlobalServicesModule) },
    { path: '**', component: EmptyRouteComponent }

];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
      { provide: APP_BASE_HREF, useValue: '/' }
    ]
  })
export class AppRoutingModule { }
