import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForIUComponent } from './modalforiu.component';
import { DialogModule } from 'primeng/dialog';
import { CommonComponentsModule } from '../../commoncomponents.module';
import { SolicitudNovedadModule } from '../../solicitudnovedad/solicitudnovedad.module';
import { FamiliaNovedadModule } from '../../familianovedad/familianovedad.module';
import { UsuarioNovedadModule } from '../../usuarionovedad/usuarionovedad.module';
import { DocumentoNovedadModule } from '../../documentonovedad/documentonovedad.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    DialogModule,
    SolicitudNovedadModule,
    FamiliaNovedadModule,
    UsuarioNovedadModule,
    DocumentoNovedadModule
  ],
  declarations: [
    ModalForIUComponent
  ],
  exports: [ModalForIUComponent]
})
export class ModalForIUModule { }
