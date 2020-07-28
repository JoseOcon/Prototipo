import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Array<any> = [
    {
      servicio: "Servicio 1",
      fecha: "01/01/2020",
      cantidad: 2,
      pax: 2,
      detalle: "Detalle",
      proveedor: "Juan",
      costo: 88.50,
      precio: 200,
      markup: 125.99
    }
  ]
  displayedColumns: string[] = ['Servicio', 'Fecha', 'Cantidad', 'Pax', 'Detalle', 'Proveedor', 'Costo', 'Precio', 'Markup', 'Accion'];
  constructor() { }

  ngOnInit() {
  }

}
