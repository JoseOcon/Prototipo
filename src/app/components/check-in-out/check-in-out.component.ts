import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-check-in-out',
  templateUrl: './check-in-out.component.html',
  styleUrls: ['./check-in-out.component.css']
})
export class CheckInOutComponent implements OnInit {

  displayedColumns1: string[] = ['Nombre', 'Tipo', 'Genero','Accion'];
  displayedColumns2: string[] = ['Servicio', 'Fecha', 'Cantidad', 'Pax', 'Detalle', 'Proveedor', 'Costo', 'Precio', 'Markup', 'Estado','Accion'];
  guest: Array<any> = [];
  items: Array<any> = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    if(this.data.tipo == 0){
      this.guest = [
        {nombre: "ABC", tipo: "Adulto", genero:"Femenino"}
      ]
    }else{
      this.items = [
        {servicio: "Servicio1", fecha:"01/01/2020", cantidad:2, pax:2, detalle:"Detalle", proveedor:"Juan", costo:88.5, precio:200, markup:125.99}
      ]
    }
  }

}
