import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css'],
})
export class VisionComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {}

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
      tipoMensaje: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required]],
    });
  }

  EnviarMensaje() {
    let nombreCompleto = this.obtenerFormGroup['nombreCompleto'].value;
    let correo = this.obtenerFormGroup['correo'].value;
    let celular = this.obtenerFormGroup['celular'].value;
    let tipoMensaje = this.obtenerFormGroup['tipoMensaje'].value;
    let mensaje = this.obtenerFormGroup['mensaje'].value;

    this.servicioSeguridad.EnviarMensaje(
      nombreCompleto,
      correo,
      celular,
      tipoMensaje,
      mensaje
    );
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }
}
