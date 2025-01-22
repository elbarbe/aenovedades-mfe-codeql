import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { DocumentoNovedadRoutingModule } from './documentonovedad-routing.module';
import { DocumentoNovedadSIUuTAPROBARComponent } from './siu_taprobar.component';
import { DocumentoNovedadSIUuTDEVOLVERComponent } from './siu_tdevolver.component';
import { DocumentoNovedadSIUuTCREARATOComponent } from './siu_tcrearato.component';
import { DocumentoNovedadPIUuDocumentoNovedadComponent } from './piu_documentonovedad.component';
import { DocumentoNovedadPIUuDocumentoNovedaduNullComponent } from './piu_documentonovedad_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DocumentoNovedadRoutingModule
  ],
  declarations: [
    DocumentoNovedadSIUuTAPROBARComponent,
    DocumentoNovedadSIUuTDEVOLVERComponent,
    DocumentoNovedadSIUuTCREARATOComponent,
    DocumentoNovedadPIUuDocumentoNovedadComponent,
    DocumentoNovedadPIUuDocumentoNovedaduNullComponent
  ],
  exports: [
    DocumentoNovedadSIUuTAPROBARComponent,
    DocumentoNovedadSIUuTDEVOLVERComponent,
    DocumentoNovedadSIUuTCREARATOComponent,
    DocumentoNovedadPIUuDocumentoNovedadComponent,
    DocumentoNovedadPIUuDocumentoNovedaduNullComponent
  ]
})
export class DocumentoNovedadModule { }
