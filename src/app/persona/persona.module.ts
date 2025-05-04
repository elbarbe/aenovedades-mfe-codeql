import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { PersonaRoutingModule } from './persona-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    PersonaRoutingModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class PersonaModule { }
