import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionPaginacion } from 'src/app/config/configuracion.paginacion';
import { ClienteModel } from 'src/app/modelos/cliente.model';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { PaginadorClienteModel } from 'src/app/modelos/paginador.cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-listar-inmuebles',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})
export class ListarClienteComponent {
  listaRegistros: ClienteModel[] = [];
  pag = 1;
  total = 0;
  registrosPorPagina = ConfiguracionPaginacion.registrosPorPagina;
  constructor(private servicio: ClienteService) {}

  ngOnInit() {
    this.ListarRegistros()
  }

ListarRegistros(){
this.servicio.listarRegistros(this.pag).subscribe({
  next: (datos) => {
    this.listaRegistros = datos.registros !== undefined ? datos.registros : [];
    this.total = datos.totalRegistros;
  },
  error: (err) => {
    alert('error leyendo la informacion');
  },
});
}

}
