import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformacionRoutingModule } from './informacion-routing.module';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { AsesoresComponent } from './asesores/asesores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MisionComponent,
    VisionComponent,
    AsesoresComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformacionModule { }
