import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-manifest',
  templateUrl: './manifest.component.html',
  styleUrls: ['./manifest.component.css']
})
export class ManifestComponent implements OnInit {

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
