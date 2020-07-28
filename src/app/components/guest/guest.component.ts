import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  guest: Array<any> = [
    {
      nombre:"ABC",
      tipo: "Adulto",
      genero: "Femenino"
    }
  ];
  displayedColumns: string[] = ['Nombre', 'Tipo', 'Genero','Accion'];

  constructor() { }

  ngOnInit() {
  }

}
