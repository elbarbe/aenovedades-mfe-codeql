import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { SolicitudRoutingModule } from './solicitud-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    SolicitudRoutingModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SolicitudModule { }
