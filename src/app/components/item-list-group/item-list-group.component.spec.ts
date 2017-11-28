import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListGroupComponent } from './item-list-group.component';

describe('ItemListGroupComponent', () => {
  let component: ItemListGroupComponent;
  let fixture: ComponentFixture<ItemListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
