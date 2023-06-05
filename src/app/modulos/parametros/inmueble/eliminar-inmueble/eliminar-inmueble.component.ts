import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { configuracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';

@Component({
  selector: 'app-eliminar-inmueble',
  templateUrl: './eliminar-inmueble.component.html',
  styleUrls: ['./eliminar-inmueble.component.css'],
})
export class EliminarInmuebleComponent {
  //nombreArchivoCargado: String = '';
  archivoCargado: Boolean = false;
  BASE_URL: String = configuracionRutasBackend.urlSeguridad;
  recordId: string = '';
  nombre: string = '';
  precioVenta: number = 0;
  precioAlquiler: number = 0;
  foto: string = '';
  estado: string = '';

  constructor(
    private servicio: ListarInmueblesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: InmuebleModel) => {
        this.recordId = datos._id!;
        this.nombre = datos.nombre!;
        this.precioVenta = datos.precioVenta!;
        this.precioAlquiler = datos.precioAlquiler!;
        this.foto = datos.foto!;
        this.estado = datos.estado!;
      },
      error: (err) => {
        alert('el registro no existe');
      },
    });
  }

  EliminarRegistro() {
      this.servicio.EliminarRegistro(this.recordId).subscribe({
        next: (data: any) => {
          alert('Información eliminada correctamente');
          this.router.navigate(['/parametros/inmueble-listar']);
        },
        error: (err: any) => {
          alert('Ha ocurrido un error');
        },
      });
    
  }
}
