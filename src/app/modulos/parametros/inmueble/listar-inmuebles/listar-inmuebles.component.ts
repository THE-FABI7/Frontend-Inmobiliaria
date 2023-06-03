import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    private listar: ListarInmueblesService,
    private servicioParametros: ParametrosService
  ) {}

  getInmuebles() {
    this.listar;
  }

  ngOnInit() {
    this.servicioParametros.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {
        alert('error leyendo la informacion');
      },
    });
  }

  
}
