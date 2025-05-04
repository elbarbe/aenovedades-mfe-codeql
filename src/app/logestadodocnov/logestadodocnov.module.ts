import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { LogEstadoDocNovRoutingModule } from './logestadodocnov-routing.module';
import { LogEstadoDocNovPIUuLogEstadoDocNovComponent } from './piu_logestadodocnov.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    LogEstadoDocNovRoutingModule
  ],
  declarations: [
    LogEstadoDocNovPIUuLogEstadoDocNovComponent
  ],
  exports: [
    LogEstadoDocNovPIUuLogEstadoDocNovComponent
  ]
})
export class LogEstadoDocNovModule { }
