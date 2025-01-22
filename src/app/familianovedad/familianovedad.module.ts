import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponentsModule } from '../commoncomponents.module';
import { FamiliaNovedadRoutingModule } from './familianovedad-routing.module';
import { FamiliaNovedadSIUuTFIRMARTITULARComponent } from './siu_tfirmartitular.component';
import { FamiliaNovedadSIUuTSETDIRCORRComponent } from './siu_tsetdircorr.component';
import { FamiliaNovedadSIUuTADDTITULARComponent } from './siu_taddtitular.component';
import { FamiliaNovedadSIUuTFIRMARNUEVOTITULARComponent } from './siu_tfirmarnuevotitular.component';
import { FamiliaNovedadSIUuTCREARMANUALComponent } from './siu_tcrearmanual.component';
import { FamiliaNovedadSIUuTMODIFICARMANUALComponent } from './siu_tmodificarmanual.component';
import { FamiliaNovedadSIUuTCREARUSUMANUALComponent } from './siu_tcrearusumanual.component';
import { FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent } from './mdiu_famnov_d_tipotitular.component';
import { FamiliaNovedadMDIUuFamNovuDuTipoUsuarioComponent } from './mdiu_famnov_d_tipousuario.component';
import { FamiliaNovedadPIUuFamiliaNovedaduNullComponent } from './piu_familianovedad_null.component';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    FamiliaNovedadRoutingModule
  ],
  declarations: [
    FamiliaNovedadSIUuTFIRMARTITULARComponent,
    FamiliaNovedadSIUuTSETDIRCORRComponent,
    FamiliaNovedadSIUuTADDTITULARComponent,
    FamiliaNovedadSIUuTFIRMARNUEVOTITULARComponent,
    FamiliaNovedadSIUuTCREARMANUALComponent,
    FamiliaNovedadSIUuTMODIFICARMANUALComponent,
    FamiliaNovedadSIUuTCREARUSUMANUALComponent,
    FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent,
    FamiliaNovedadMDIUuFamNovuDuTipoUsuarioComponent,
    FamiliaNovedadPIUuFamiliaNovedaduNullComponent
  ],
  exports: [
    FamiliaNovedadSIUuTFIRMARTITULARComponent,
    FamiliaNovedadSIUuTSETDIRCORRComponent,
    FamiliaNovedadSIUuTADDTITULARComponent,
    FamiliaNovedadSIUuTFIRMARNUEVOTITULARComponent,
    FamiliaNovedadSIUuTCREARMANUALComponent,
    FamiliaNovedadSIUuTMODIFICARMANUALComponent,
    FamiliaNovedadSIUuTCREARUSUMANUALComponent,
    FamiliaNovedadMDIUuFamNovuDuTipoTitularComponent,
    FamiliaNovedadMDIUuFamNovuDuTipoUsuarioComponent,
    FamiliaNovedadPIUuFamiliaNovedaduNullComponent
  ]
})
export class FamiliaNovedadModule { }
