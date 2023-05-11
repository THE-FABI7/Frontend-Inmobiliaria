import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarClaveComponent } from './cambiar-clave/cambiar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionTwofaComponent } from './identificacion-twofa/identificacion-twofa.component';
import { IdentificacionUsuarioComponent } from './identificacion-usuario/identificacion-usuario.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroPublicoUsuariosComponent } from './registro-publico-usuarios/registro-publico-usuarios.component';
import { CrearUsuarioeComponent } from './usuario/crear-usuarioe/crear-usuarioe.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';
import { ValidarHashUsuarioPublicoComponent } from './validar-hash-usuario-publico/validar-hash-usuario-publico.component';

const routes: Routes = [
  {
    path: 'identificar-usuario',
    component: IdentificacionUsuarioComponent,
  },
  {
    path: 'cambiar-clave',
    component: CambiarClaveComponent,
  },
  {
    path: 'recuperar-clave',
    component: RecuperarClaveComponent,
  },
  {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent,
  },
  {
    path: '2fa',
    component: IdentificacionTwofaComponent,
  },
  {
    path: 'registrarse',
    component: RegistroPublicoUsuariosComponent,
  },
  {
    path: 'validar-hash-usuario-publico/:hash',
    component: ValidarHashUsuarioPublicoComponent,
  },
  {
    path: 'usuario-crear',
    component: CrearUsuarioeComponent,
  },
  {
    path: 'usuario-eliminar',
    component: EliminarUsuarioComponent,
  },
  {
    path: 'usuario-listar',
    component: ListarUsuarioComponent,
  },
  {
    path: 'usuario-editar/:id',
    component: EditarUsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguridadRoutingModule {}
