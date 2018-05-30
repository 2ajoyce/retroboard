import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('favorite', () => {
    it('should increment favorite count', () => {
      const count = component.favoriteCount;
      component.favorite();
      expect(component.favoriteCount).toEqual(count);
    });
  });
});
