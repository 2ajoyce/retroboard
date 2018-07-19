import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain header', async(() => {
    const nativeElement = fixture.debugElement.query(By.css('app-header')).nativeElement;
    expect(nativeElement).toBeDefined();
  }));

  describe('when rendering the app-item-list-group', () => {
    const appListItemGroupSelector = 'app-item-list-group';
    it('should be defined', async(() => {
      const nativeElement = fixture.debugElement.query(By.css(appListItemGroupSelector)).nativeElement;
      expect(nativeElement).toBeDefined();
    }));

    it('should bind properties', () => {
      const properties = fixture.debugElement.query(By.css(appListItemGroupSelector)).properties;
      expect(properties.green).toEqual(component.green);
      expect(properties.yellow).toEqual(component.yellow);
      expect(properties.red).toEqual(component.red);
    });
  });

  describe('when rendering the app-action-list-group', () => {
    const appActionItemGroupSelector = 'app-action-list-group';
    it('should be defined', async(() => {
      const nativeElement = fixture.debugElement.query(By.css(appActionItemGroupSelector)).nativeElement;
      expect(nativeElement).toBeDefined();
    }));

    it('should bind properties', () => {
      const properties = fixture.debugElement.query(By.css(appActionItemGroupSelector)).properties;
      expect(properties.current).toEqual(component.current);
      expect(properties.old).toEqual(component.old);
      expect(properties.older).toEqual(component.older);
    });
  });
});
