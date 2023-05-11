import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-registro-publico-usuarios',
  templateUrl: './registro-publico-usuarios.component.html',
  styleUrls: ['./registro-publico-usuarios.component.css'],
})
export class RegistroPublicoUsuariosComponent {
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) {}

  ngOnInit() {
    this.construirFormulario();
  }

  construirFormulario() {
    this.fGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', [Validators.minLength(10), Validators.required]],
      emailAddress: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  registrarse(){
    let campos = this.ObtenerFormGroup;
    let datos = {
      name: campos["name"].value,
      phoneNumber: campos["phoneNumber"].value,
      emailAddress: campos["emailAddress"].value,
      password: campos["password"].value
    }

    this.servicioSeguridad.RegistrarUsuarioPublico(datos).subscribe({
      next: (respuesta: usuarioModel) =>{
       alert("Registro correctamente, se ha enviado un mensaje para validar el correo")
      },
      error: (err) =>{
        console.log(err)
        alert("se ha producido un error de registro")
      }
    })
    
  }

  get ObtenerFormGroup(){
    return this.fGroup.controls;
  }
}
