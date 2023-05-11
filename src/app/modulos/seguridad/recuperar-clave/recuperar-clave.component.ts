import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usuarioModel } from 'src/app/modelos/usuario.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.component.html',
  styleUrls: ['./recuperar-clave.component.css']
})
export class RecuperarClaveComponent {
 

  fGroup: FormGroup = new FormGroup({})


  constructor( private fb: FormBuilder, private seguridadService: SeguridadService){
   
  }

  ngOnInit(){
    this.fGroup = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]]
    })
  }

  RecuperarClave(){
    if(this.fGroup.invalid){
      alert("Debe ingresar los datos de usuario")
    }
    else{
      let usuario = this.obtenerFormGroup["usuario"].value
      this.seguridadService.RecuperarClavePorUsuario(usuario).subscribe({
        next:(datos: usuarioModel) =>{
          alert("Se ha enviado una nueva contraseña a su telefono: " + datos.phoneNumber)
        },
        error:(err:any) =>{
            alert("Ha ocurrido un error: " )
        }
   
        
      })

      
    }
  }

  get obtenerFormGroup(){
    return this.fGroup.controls;
  }
}
