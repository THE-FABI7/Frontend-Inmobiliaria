import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { configuracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';

@Component({
  selector: 'app-crear-inmuebles',
  templateUrl: './crear-inmuebles.component.html',
  styleUrls: ['./crear-inmuebles.component.css'],
})
export class CrearInmueblesComponent {
  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = configuracionRutasBackend.urlSeguridad;

  constructor(
    private fb: FormBuilder,
    private servicio: ListarInmueblesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    this.ConstruirFormularioArchivo();
  }

  ConstruirFormularioDatos() {
    this.fGroup = this.fb.group({
      nombre: ['', [Validators.required]],
      precioVenta: ['', [Validators.required]],
      precioAlquiler: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }

  GuardarRegistro() {
    if (this.fGroup.invalid) {
      alert(
        'Debe diligenciar todo el formulario, incluyendo la carga del archivo.'
      );
    } else {
      let model = this.obtenerRegistro();
      this.servicio.AgregarRegistro(model).subscribe({
        next: (data: InmuebleModel) => {
          alert('Información almacenada correctamente');
          this.router.navigate(['/parametros/inmueble-listar']);
        },
        error: (err: any) => {
          alert('Ha ocurrido un error');
        },
      });
    }
  }

  obtenerRegistro(): InmuebleModel {
    let model = new InmuebleModel();
    model.nombre = this.obtenerFgDatos['nombre'].value;
    model.precioAlquiler = this.obtenerFgDatos['precioAlquiler'].value;
    model.precioVenta = this.obtenerFgDatos['precioVenta'].value;
    model.foto = this.obtenerFgDatos['foto'].value;
    model.estado = this.obtenerFgDatos['estado'].value;
    return model;
  }

  get obtenerFgDatos() {
    return this.fGroup.controls;
  }

  /** Carga de archivo */

  ConstruirFormularioArchivo() {
    this.cargaArchivoFG = this.fb.group({
      archivo: ['', []],
    });
  }

  get obtenerFgArchivo() {
    return this.cargaArchivoFG.controls;
  }

  CargarArchivo() {
    const formData = new FormData();
    formData.append('file', this.cargaArchivoFG.controls['archivo'].value);
    this.servicio.CargarArchivo(formData).subscribe({
      next: (data: ArchivoModel) => {
        console.log(data);
        this.nombreArchivoCargado = data.file;
        this.obtenerFgDatos['foto'].setValue(this.nombreArchivoCargado);
        this.archivoCargado = true;
        alert('Archivo cargado correctamente.');
      },
      error: (err: any) => {
        alert('Error cargando el archivo');
      },
    });
  }

  CuandoSeleccionaArchivo(event: any) {
    if (event.target.files.length > 0) {
      const f = event.target.files[0];
      this.obtenerFgArchivo['archivo'].setValue(f);
    }
  }
}
