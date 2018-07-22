import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemListGroupComponent} from './item-list-group.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('ItemListGroupComponent', () => {
  let component: ItemListGroupComponent;
  let fixture: ComponentFixture<ItemListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListGroupComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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

  describe('when rendering the green column', () => {
    const greenSelector = 'app-item-list.green';
    it('should be defined', () => {
      expect(fixture.debugElement.query(By.css(greenSelector)).nativeElement).toBeDefined();
    });
    it('should define properties', () => {
      const properties = fixture.debugElement.query(By.css(greenSelector)).properties;
      expect(properties.list).toEqual(component.green);
      expect(properties.placeholder).toEqual('I\'m glad that...');
      expect(properties.imageSrc).toEqual('../../../assets/images/smiley.svg');
    });
  });

  describe('when rendering the yellow column', () => {
    const yellowSelector = 'app-item-list.yellow';
    it('should be defined', () => {
      expect(fixture.debugElement.query(By.css(yellowSelector)).nativeElement).toBeDefined();
    });
    it('should define properties', () => {
      const properties = fixture.debugElement.query(By.css(yellowSelector)).properties;
      expect(properties.list).toEqual(component.yellow);
      expect(properties.placeholder).toEqual('I\'m wondering about...');
      expect(properties.imageSrc).toEqual('../../../assets/images/middle.svg');
    });
  });

  describe('when rendering the red column', () => {
    const redSelector = 'app-item-list.red';
    it('should be defined', () => {
      expect(fixture.debugElement.query(By.css(redSelector)).nativeElement).toBeDefined();
    });
    it('should define properties', () => {
      const properties = fixture.debugElement.query(By.css(redSelector)).properties;
      expect(properties.list).toEqual(component.red);
      expect(properties.placeholder).toEqual('It wasn\'t so great that...');
      expect(properties.imageSrc).toEqual('../../../assets/images/sad.svg');
    });
  });
});
