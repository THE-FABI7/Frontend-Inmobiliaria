import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmueblesComponent } from './inmueble/listar-inmuebles/listar-inmuebles.component';

const routes: Routes = [
  {
    path: "inmueble-listar",
    component: ListarInmueblesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
