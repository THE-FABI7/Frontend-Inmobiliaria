import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { ListarInmueblesComponent } from './inmueble/listar-inmuebles/listar-inmuebles.component';
import { CrearInmueblesComponent } from './inmueble/crear-inmuebles/crear-inmuebles.component';
import { EditarInmueblesComponent } from './inmueble/editar-inmuebles/editar-inmuebles.component';
import { EliminarInmuebleComponent } from './inmueble/eliminar-inmueble/eliminar-inmueble.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    EliminarClienteComponent,
    EditarClienteComponent,
    ListarClienteComponent,
    ListarInmueblesComponent,
    CrearInmueblesComponent,
    EditarInmueblesComponent,
    EliminarInmuebleComponent,
    CrearClienteComponent,
  ],
  imports: [CommonModule, ParametrosRoutingModule,
  NgxPaginationModule],
})
export class ParametrosModule {}
