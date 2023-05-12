import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListarInmueblesService } from 'src/app/servicios/listar-inmuebles.service';

@Component({
  selector: 'app-listar-inmuebles',
  templateUrl: './listar-inmuebles.component.html',
  styleUrls: ['./listar-inmuebles.component.css'],
})
export class ListarInmueblesComponent {
  constructor(private router: Router, private listar: ListarInmueblesService) {}

  getInmuebles() {
    this.listar;
  }
}
