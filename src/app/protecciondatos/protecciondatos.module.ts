import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { ProteccionDatosRoutingModule } from './protecciondatos-routing.module';
import { ProteccionDatosSIUuTCREARSOLNOVEDADComponent } from './siu_tcrearsolnovedad.component';
import { ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent } from './siu_tcrearsolnovedadexcepcion.component';
import { ProteccionDatosPIUuProteccionDatosuNullComponent } from './piu_protecciondatos_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    ProteccionDatosRoutingModule
  ],
  declarations: [
    ProteccionDatosSIUuTCREARSOLNOVEDADComponent,
    ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ],
  exports: [
    ProteccionDatosSIUuTCREARSOLNOVEDADComponent,
    ProteccionDatosSIUuTCREARSOLNOVEDADEXCEPCIONComponent,
    ProteccionDatosPIUuProteccionDatosuNullComponent
  ]
})
export class ProteccionDatosModule { }
