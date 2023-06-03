import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInmueblesComponent } from './inmueble/listar-inmuebles/listar-inmuebles.component';
import { CrearInmueblesComponent } from './inmueble/crear-inmuebles/crear-inmuebles.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { EditarInmueblesComponent } from './inmueble/editar-inmuebles/editar-inmuebles.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path: 'inmueble-listar',
    component: ListarInmueblesComponent,
  },
  {
    path: 'inmueble-agregar',
    component: CrearInmueblesComponent,
  },
  {
    path: 'inmueble-eliminar/:id',
    component: EliminarInmuebleComponent,
  },
  {
    path: 'inmueble-editar/:id',
    component: EditarInmueblesComponent,
  },
  {
    path: 'cliente-listar',
    component: ListarClienteComponent,
  },
  {
    path: 'cliente-agregar',
    component: CrearClienteComponent,
  },
  {
    path: 'cliente-eliminar/:id',
    component: EliminarClienteComponent,
  },
  {
    path: 'cliente-editar/:id',
    component: EditarClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
