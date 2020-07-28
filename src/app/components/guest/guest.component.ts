import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CheckInOutComponent } from '../check-in-out/check-in-out.component';

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

  constructor(
    public dialogService: MatDialog
  ) { }

  ngOnInit() {
  }

  openCheckDialog(){
    let dialogRef = this.dialogService.open(CheckInOutComponent, {
      height: "95%",
      width: "80%",
      minWidth: "280px",
      data: {
        tipo: 1
      }
    })
  }

}