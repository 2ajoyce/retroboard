import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemListComponent} from './item-list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {getElement} from '../../helpers.spec';
import {Item} from '../../models/item';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when rendering the', () => {
    describe('image', () => {
      it('should exist', () => {
        expect(getElement(fixture, 'img').nativeElement).toBeDefined();
      });

      it('should bind image src', () => {
        const imageSrc = 'A random string';
        component.imageSrc = imageSrc;
        fixture.detectChanges();
        expect(getElement(fixture, 'img').properties.src).toEqual(imageSrc);
      });
    });

    describe('form', () => {
      it('should exist', () => {
        expect(getElement(fixture, 'form').nativeElement).toBeDefined();
      });

      it('should have class', () => {
        expect(getElement(fixture, 'form').attributes.class).toContain('action-form');
      });

      describe('input', () => {
        it('should exist', () => {
          expect(getElement(fixture, 'form input').nativeElement).toBeDefined();
        });

        it('should bind placeholder', () => {
          expect(getElement(fixture, 'form input').attributes.placeholder).toEqual('placeholder');
        });
      });
    });

    describe('app-item', () => {
      it('should exist', () => {
        expect(getElement(fixture, 'app-item').nativeElement).toBeDefined();
      });

      it('should bind item', () => {
        const item = 'A random string';
        component.item = item;
        fixture.detectChanges();
        expect(getElement(fixture, 'app-item').properties.item).toEqual(item);
      });

      it('should create one for each item in component.list', () => {
        component.list = [
          <Item>{description: 'Item 1'},
          <Item>{description: 'Item 2'},
          <Item>{description: 'Item 3'}
          ];
        const debugElements = fixture.debugElement.queryAll(By.css('app-item'));
        expect(debugElements.length).toEqual(3);
        expect(debugElements.find(x => x.properties.item === 'Item 1')).toBeDefined();
        expect(debugElements.find(x => x.properties.item === 'Item 2')).toBeDefined();
        expect(debugElements.find(x => x.properties.item === 'Item 3')).toBeDefined();
      });
    });
  });
});
