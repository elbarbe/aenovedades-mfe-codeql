import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { GlobalServicesRoutingModule } from './globalservices-routing.module';
import { GSSIUuOGETREPORTSOLNOVComponent } from './siu_ogetreportsolnov.component';
import { GSSIUuOGETREPORTSOLNOVuOutComponent } from './siu_ogetreportsolnov_out.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    GlobalServicesRoutingModule
  ],
  declarations: [
    GSSIUuOGETREPORTSOLNOVComponent,
    GSSIUuOGETREPORTSOLNOVuOutComponent
  ],
  exports: [
    GSSIUuOGETREPORTSOLNOVComponent,
    GSSIUuOGETREPORTSOLNOVuOutComponent
  ]
})
export class GlobalServicesModule { }
