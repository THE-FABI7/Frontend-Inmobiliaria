import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuarioValidadoModel } from 'src/app/modelos/usuario.validado.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion-twofa',
  templateUrl: './identificacion-twofa.component.html',
  styleUrls: ['./identificacion-twofa.component.css'],
})
export class IdentificacionTwofaComponent {
  userId: string = '';
  fGroup: FormGroup = new FormGroup({});

  constructor(
    private servicioSeguridad: SeguridadService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    let datos = this.servicioSeguridad.obtenerDatosUsuarioLS();

    if (datos != null) {
      this.userId = datos._id!;
      this.constuirFormulario();
    }else{
      this.router.navigate(['/seguridad/identificar-usuario'])
    }
  }

  constuirFormulario() {
    this.fGroup = this.fb.group({
      codigo: ['', [Validators.required]],
    });
  }

  validarCodigo2fa() {
    if (this.fGroup.invalid) {
      alert('Debe ingresar el codigo');
    } else {
      let codigo2fa = this.obtenerFormGroup['codigo'].value;
      this.servicioSeguridad
        .validarCodigo2FA(this.userId, codigo2fa)
        .subscribe({
          next: (data: usuarioValidadoModel) => {
            console.log(data);
            if(data.token!=null && data.token !=undefined && data.token!=""){

              this.servicioSeguridad.ConstruirMenuLateral(data.menu);
              this.servicioSeguridad.AlmacenarDatosUsuarioValidado(data);
              this.router.navigate([""])
            }else{
              alert("el codigo no es valido")
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
}
