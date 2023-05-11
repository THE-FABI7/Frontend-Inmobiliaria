import { Component } from '@angular/core';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ParametrosService } from 'src/app/servicios/parametros.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  listaRegistros: InmuebleModel[] = [];

  constructor(private servicioParametrizacion: ParametrosService) {}

  ngOnInit() {
    this.servicioParametrizacion.listarRegistros().subscribe({
      next: (datos) => {
        this.listaRegistros = datos;
      },
      error: (err) => {},
    });
  }

}
