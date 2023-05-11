import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioeComponent } from './usuario/crear-usuarioe/crear-usuarioe.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    IdentificacionUsuarioComponent,
    IdentificacionTwofaComponent,
    RecuperarClaveComponent,
    CrearUsuarioeComponent,
    ListarUsuarioComponent,
    EliminarUsuarioComponent,
    CambiarClaveComponent,
    CerrarSesionComponent,
    RegistroPublicoUsuariosComponent,
    ValidarHashUsuarioPublicoComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SeguridadModule { }
