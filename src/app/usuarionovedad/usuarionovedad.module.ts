import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { UsuarioNovedadRoutingModule } from './usuarionovedad-routing.module';
import { UsuarioNovedadSIUumodificarSUNumMesesComponent } from './siu_modificarsunummeses.component';
import { UsuarioNovedadSIUucambiarExcluidoComponent } from './siu_cambiarexcluido.component';
import { UsuarioNovedadSIUucambiarROComponent } from './siu_cambiarro.component';
import { UsuarioNovedadSIUucambiarPSComponent } from './siu_cambiarps.component';
import { UsuarioNovedadSIUucambiarASComponent } from './siu_cambiaras.component';
import { UsuarioNovedadSIUuTCAMBIARPARENTESCOComponent } from './siu_tcambiarparentesco.component';
import { UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent } from './siu_tcambiartipoident.component';
import { UsuarioNovedadSIUuTMODIFICARMANUALComponent } from './siu_tmodificarmanual.component';
import { UsuarioNovedadPIUuUsuarioNovedaduNullComponent } from './piu_usuarionovedad_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    UsuarioNovedadRoutingModule
  ],
  declarations: [
    UsuarioNovedadSIUumodificarSUNumMesesComponent,
    UsuarioNovedadSIUucambiarExcluidoComponent,
    UsuarioNovedadSIUucambiarROComponent,
    UsuarioNovedadSIUucambiarPSComponent,
    UsuarioNovedadSIUucambiarASComponent,
    UsuarioNovedadSIUuTCAMBIARPARENTESCOComponent,
    UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent,
    UsuarioNovedadSIUuTMODIFICARMANUALComponent,
    UsuarioNovedadPIUuUsuarioNovedaduNullComponent
  ],
  exports: [
    UsuarioNovedadSIUumodificarSUNumMesesComponent,
    UsuarioNovedadSIUucambiarExcluidoComponent,
    UsuarioNovedadSIUucambiarROComponent,
    UsuarioNovedadSIUucambiarPSComponent,
    UsuarioNovedadSIUucambiarASComponent,
    UsuarioNovedadSIUuTCAMBIARPARENTESCOComponent,
    UsuarioNovedadSIUuTCAMBIARTIPOIDENTComponent,
    UsuarioNovedadSIUuTMODIFICARMANUALComponent,
    UsuarioNovedadPIUuUsuarioNovedaduNullComponent
  ]
})
export class UsuarioNovedadModule { }
