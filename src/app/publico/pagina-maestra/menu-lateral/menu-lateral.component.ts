import { Component } from '@angular/core';
import { itemMenuModel } from 'src/app/modelos/item.menu.model';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

declare const iniciarMenuLateral:any;

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css'],
})
export class MenuLateralComponent {
  listaMenus: itemMenuModel[] = [];
  constructor(private servicioSeguridad: SeguridadService) {}

  ngOnInit() {
    this.listaMenus = this.servicioSeguridad.ObtenerItemsMenuLateral();
    iniciarMenuLateral();
  }
}
