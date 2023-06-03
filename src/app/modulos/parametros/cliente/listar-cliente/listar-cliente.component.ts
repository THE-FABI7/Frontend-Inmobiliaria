import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  listaRegistros: PaginadorClienteModel = new PaginadorClienteModel();
  pag = 1;
  constructor(private servicio: ClienteService) {}

  ngOnInit() {
    this.servicio.listarRegistros(this.pag).subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        alert('error leyendo la informacion');
      },
    });
  }
}
