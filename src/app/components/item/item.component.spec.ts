import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemComponent} from './item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {getElement} from '../../helpers.spec';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Item} from '../../models/item';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  const ITEM_DESCRIPTION = 'An item';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;

    component.item = <Item>{description: ITEM_DESCRIPTION};

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when rendering', () => {
    describe('div', () => {
      const heartDiv = 'div.favorite-area';
      it('should exist', () => {
        expect(getElement(fixture, heartDiv).nativeElement).toBeDefined();
      });

      describe('i', () => {
        const heartIcon = heartDiv + ' i.heart.material-icons';
        it('should exist', () => {
          expect(getElement(fixture, heartIcon).nativeElement).toBeDefined();
        });

        it('should contain text', () => {
          expect(getElement(fixture, heartIcon).nativeElement.textContent).toEqual('favorite');
        });

        it('should bind click event', () => {
          spyOn(component, 'favorite').and.callThrough();
          getElement(fixture, heartIcon).triggerEventHandler('click', null);
          expect(component.favorite).toHaveBeenCalledTimes(1);
        });
      });

      describe('div', () => {
        const heartCount = heartDiv + ' div.favorite-count';

        describe('ngIf', () => {
          it('should not display if favoriteCount is equal to 0', () => {
            component.favoriteCount = 0;
            fixture.detectChanges();

            expect(getElement(fixture, heartCount)).toBeNull();
          });

          it('should not display if favoriteCount is less than 0', () => {
            component.favoriteCount = -1;
            fixture.detectChanges();

            expect(getElement(fixture, heartCount)).toBeNull();
          });

          it('should display if favoriteCount is greater than 0', () => {
            component.favoriteCount = 1;
            fixture.detectChanges();

            expect(getElement(fixture, heartCount).nativeElement).toBeDefined();
          });
        });

        it('should contain favoriteCount', () => {
          component.favoriteCount = 8;
          fixture.detectChanges();
          expect(getElement(fixture, heartCount).nativeElement.textContent).not.toEqual(9);
          component.favoriteCount = 9;
          fixture.detectChanges();

          expect(getElement(fixture, heartCount).nativeElement.textContent).toEqual('9');
        });
      });
    });

    describe('p', () => {
      const itemDescription = 'p.mat-body-1';

      it('should exist if isEditing is false', () => {
        component.isEditing = false;
        fixture.detectChanges();
        expect(getElement(fixture, itemDescription).nativeElement).toBeDefined();
      });

      it('should not exist if isEditing is true', () => {
        component.isEditing = true;
        fixture.detectChanges();
        expect(getElement(fixture, itemDescription)).toBeNull();
      });

      it('should contain item description', () => {
        expect(getElement(fixture, itemDescription).nativeElement.textContent).toEqual(ITEM_DESCRIPTION);
      });
    });

    describe('input', () => {
      const itemInput = 'input';
      it('should not exist if isEditing is false', () => {
        component.isEditing = false;
        fixture.detectChanges();
        expect(getElement(fixture, itemInput)).toBeNull();
      });

      it('should exist if isEditing is true', () => {
        component.isEditing = true;
        fixture.detectChanges();
        expect(getElement(fixture, itemInput).nativeElement).toBeDefined();
      });

      it('should bind type', () => {
        component.isEditing = true;
        fixture.detectChanges();
        expect(getElement(fixture, itemInput).attributes.type).toEqual('text');
      });

      it('should bind to item description', (done) => {
        component.isEditing = true;
        fixture.detectChanges();
        fixture.whenRenderingDone().then(() => {
          expect(getElement(fixture, itemInput).nativeElement.value).toEqual(ITEM_DESCRIPTION);

          component.item.description = 'A new description';
          fixture.detectChanges();
          fixture.whenRenderingDone().then(() => {
            expect(getElement(fixture, itemInput).nativeElement.value).toEqual('A new description');
            done();
          });
        });

      });

      it('should bind autofocus', () => {
        component.isEditing = true;
        fixture.detectChanges();

        expect(getElement(fixture, itemInput).attributes.autofocus).toBeDefined();
      });
    });

    describe('i', () => {
      const editIcon = 'i.edit.material-icons';

      it('should exist', () => {
        expect(getElement(fixture, editIcon).nativeElement).toBeDefined();
      });

      it('should bind click action', () => {
        spyOn(component, 'toggleEditing').and.callThrough();

        getElement(fixture, editIcon).triggerEventHandler('click', null);

        expect(component.toggleEditing).toHaveBeenCalledTimes(1);
      });

      it('should contain text', () => {
        expect(getElement(fixture, editIcon).nativeElement.textContent).toEqual('edit');
      });
    });
  });

  describe('favorite', () => {
    it('should increment favorite count', () => {
      component.favoriteCount = 0;

      component.favorite();
      expect(component.favoriteCount).toEqual(1);

      component.favorite();
      expect(component.favoriteCount).toEqual(2);
    });
  });

  describe('toggleEditing', () => {
    it('should toggle isEditing', () => {
      component.isEditing = false;

      component.toggleEditing();
      expect(component.isEditing).toEqual(true);

      component.toggleEditing();
      expect(component.isEditing).toEqual(false);
    });
  });
});
