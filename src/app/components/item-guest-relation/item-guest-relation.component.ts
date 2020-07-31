import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MAT_DIALOG_DATA } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-item-guest-relation',
  templateUrl: './item-guest-relation.component.html',
  styleUrls: ['./item-guest-relation.component.css']
})
export class ItemGuestRelationComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredGuest = ["Invitado 1", "Invitado 2", "Invitado 3", "Invitado 4"];
  guest: Array<any> = [];
  filteredItem = ["Ítem 1", "Ítem 2", "Ítem 3", "Ítem 4"];
  items: Array<any> = [];
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  reltionGuest: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if(this.data.tipo == 0){
      this.reltionGuest = true; 
    }else{
      this.reltionGuest = false;
    }
    console.log(this.data.tipo)
  }

  remove1(any: string): void {
    let index = this.guest.indexOf(any)
    if (index >= 0) {
      this.guest.splice(index, 1);
    }
  }

  selected1(event: MatAutocompleteSelectedEvent): void {
    let index = this.guest.indexOf(event.option.value);
    if (index < 0) {
      this.guest.push(event.option.value)
    } 
  }

  remove2(any: string): void {
    let index = this.items.indexOf(any)
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  selected2(event: MatAutocompleteSelectedEvent): void {
    let index = this.items.indexOf(event.option.value);
    if (index < 0) {
      this.items.push(event.option.value)
    } 
  }
}
