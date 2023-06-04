import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-listar-inmuebles',
  templateUrl: './listar-inmuebles.component.html',
  styleUrls: ['./listar-inmuebles.component.css'],
})
export class ListarInmueblesComponent {
  listaRegistros: InmuebleModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(
    private router: Router,
    private listar: ListarInmueblesService,
    private servicio: ListarInmueblesService
  ) {}

  getInmuebles() {
    this.listar;
  }

  ngOnInit() {
    this.ListarRegistros()
  }

  ListarRegistros(){
    this.servicio.listarRegistrosPaginados(this.pag).subscribe({
      next: (datos) => {
        this.listaRegistros = datos.registros !== undefined ? datos.registros : [];
      },
      error: (err) => {
        alert('error leyendo la informacion');
      },
    });
  }
}
