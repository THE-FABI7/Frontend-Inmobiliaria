import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion-usuario',
  templateUrl: './identificacion-usuario.component.html',
  styleUrls: ['./identificacion-usuario.component.css'],
})
export class IdentificacionUsuarioComponent {
  fGroup: FormGroup = new FormGroup({});
  captcha: string;
  email: string;

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) {
    this.captcha = '';
    this.email = '';
  }

  ngOnInit() {
    this.ConstruirFormulario();
  }

  ConstruirFormulario() {
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
      recaptcha: ['', [Validators.required]],
    });
  }

  IdentificarUsuario() {
    if (this.fGroup.invalid) {
      alert('Datos incompletos');
    } else {
      let usuario = this.obtenerFormGroup['usuario'].value;
      let clave = this.obtenerFormGroup['clave'].value;
      let claveCifrada = MD5(clave).toString();

      this.servicioSeguridad
        .IdentificarUsuario(usuario, claveCifrada)
        .subscribe({
          next: (data: usuarioModel) => {
            if (data._id == undefined || data._id == null) {
              alert(
                'Credenciales Incorrectas o falta la validacion del correo electronico'
              );
            } else {
              //console.log(data);
              if (
                this.servicioSeguridad.AlmacenarDatosUsuarioIdentificado(data)
              ) {
                this.router.navigate(['/seguridad/2fa']);
              }
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  get obtenerFormGroup() {
    return this.fGroup.controls;
  }

  resolver(captchaResponse: string) {
    this.captcha = captchaResponse;
    //console.log('captcha with response: ' + JSON.stringify(this.captcha));
  }
}
