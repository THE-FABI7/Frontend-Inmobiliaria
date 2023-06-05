import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { configuracionRutasBackend } from 'src/app/config/configuracion.rutas.backend';
import { ArchivoModel } from 'src/app/modelos/archivo.model';
import { InmuebleModel } from 'src/app/modelos/inmueble.model';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';

@Component({
  selector: 'app-editar-inmuebles',
  templateUrl: './editar-inmuebles.component.html',
  styleUrls: ['./editar-inmuebles.component.css'],
})
export class EditarInmueblesComponent {
  nombreArchivoCargado: String = '';
  fGroup: FormGroup = new FormGroup({});
  cargaArchivoFG: FormGroup = new FormGroup({});
  archivoCargado: Boolean = false;
  BASE_URL: String = configuracionRutasBackend.urlSeguridad;
  recordId: string = '';

  constructor(
    private fb: FormBuilder,
    private servicio: ListarInmueblesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recordId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ConstruirFormularioDatos();
    this.ConstruirFormularioArchivo();
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    this.servicio.BuscarRegistro(this.recordId).subscribe({
      next: (datos: InmuebleModel) => {
        this.obtenerFgDatos['id'].setValue(datos._id);
        this.obtenerFgDatos['nombre'].setValue(datos.nombre);
        this.obtenerFgDatos['precioVenta'].setValue(datos.precioVenta);
        this.obtenerFgDatos['precioAlquiler'].setValue(datos.precioAlquiler);
        this.obtenerFgDatos['foto'].setValue(datos.foto);
        this.obtenerFgDatos['estado'].setValue(datos.estado);
        this.nombreArchivoCargado = datos.foto!;
        this.archivoCargado = true;
      },
      error: (err) => {
        alert('el registro no existe');
      },
    });
  }

  ConstruirFormularioDatos() {
    this.fGroup = this.fb.group({
      id: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      precioVenta: ['', [Validators.required]],
      precioAlquiler: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });
  }

  EditarRegistro() {
    if (this.fGroup.invalid) {
      alert(
        'Debe diligenciar todo el formulario, incluyendo la carga del archivo.'
      );
    } else {
      let model = this.obtenerRegistro();
      this.servicio.EditarRegistro(model).subscribe({
        next: (data: InmuebleModel) => {
          alert('Información modificada correctamente');
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
    model._id = this.recordId;
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
