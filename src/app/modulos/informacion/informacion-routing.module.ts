import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesoresComponent } from './asesores/asesores.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [
  {
    path: 'mision',
    component: MisionComponent,
  },
  {
    path: 'contacto',
    component: VisionComponent,
  },
  {
    path: 'nuestros-asesores',
    component: AsesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionRoutingModule {}
