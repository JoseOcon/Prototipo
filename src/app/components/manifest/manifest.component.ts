import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  
  transactions = [
    {item: 'Persona 1', cost: "Adulto"},
    {item: 'Persona 2', cost: "Adulto"},
    {item: 'Persona 3', cost: "Adulto"}
  ];

  step = -1;

  start_Date = undefined;
  end_Date = undefined; 
  time;
  checked = true;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredRecursos = ["Recurso 1", "Recurso 2", "Recurso 3", "Recurso 4"];
  recursos: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;

  productos = ["Producto A", "Producto B", "Producto C"]
  tipoProductos = ["Tipo A", "Tipo B", "Tipo C"]
 
  constructor() { }

  ngOnInit() {
    document.getElementById('booking').style.display = 'none';
    document.getElementById('back').style.display = 'none';
  }

  back(){
    document.getElementById('booking').style.display = 'none';
    document.getElementById('filters').style.display = 'block';
    document.getElementById('back').style.display = 'none';

  }

  filter() {
    document.getElementById('booking').style.display = 'block';
    document.getElementById('filters').style.display = 'none';
    document.getElementById('back').style.display = 'block';
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  dateFilter = (date: Date): boolean => {
    return date > this.start_Date;
  }

  changeState({source}: any){
    this.checked == false ? this.checked=true : this.checked=false;
    source.checked = this.checked;
  }

  remove(category: string): void {
    let index = this.recursos.indexOf(category)
    if (index >= 0) {
      this.recursos.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    let index = this.recursos.indexOf(event.option.value);
    if (index < 0) {
      this.recursos.push(event.option.value)
    } 
  }
}
