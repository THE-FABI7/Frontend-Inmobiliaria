import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaNoEncontradaComponent } from './publico/errores/ruta-no-encontrada/ruta-no-encontrada.component';
import { InicioComponent } from './publico/inicio/inicio.component';

// configuracion de las posibles rutas de la aplicacion
const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'seguridad',
    loadChildren: () =>
      import('./modulos/seguridad/seguridad.module').then(
        (m) => m.SeguridadModule
      ),
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./modulos/reportes/reportes.module').then(
        (m) => m.ReportesModule
      ),
  },
  {
    path: 'parametros',
    loadChildren: () =>
      import('./modulos/parametros/parametros.module').then(
        (m) => m.ParametrosModule
      ),
  },
  {
    path: 'informacion',
    loadChildren: () =>
      import('./modulos/informacion/informacion.module').then(
        (m) => m.InformacionModule
      ),
  },
  {
    path: '**',
    component: RutaNoEncontradaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
