import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { AsesoresComponent } from './asesores/asesores.component';


@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    AsesoresComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule
  ]
})
export class InformacionModule { }
