import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PaisRoutingModule } from './pais-routing.module';
import { PaisPIUuPaisComponent } from './piu_pais.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PaisRoutingModule
  ],
  declarations: [
    PaisPIUuPaisComponent
  ],
  exports: [
    PaisPIUuPaisComponent
  ]
})
export class PaisModule { }
