import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGuestRelationComponent } from './item-guest-relation.component';

describe('ItemGuestRelationComponent', () => {
  let component: ItemGuestRelationComponent;
  let fixture: ComponentFixture<ItemGuestRelationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGuestRelationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGuestRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
