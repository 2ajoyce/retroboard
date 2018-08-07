import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionListGroupComponent} from './action-list-group.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Action} from '../../models/action';
import {By} from '@angular/platform-browser';

describe('ActionListGroupComponent', () => {
  let component: ActionListGroupComponent;
  let fixture: ComponentFixture<ActionListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionListGroupComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when rendering', () => {
    describe('Current app-action-list', () => {
      it('should bind properties', () => {
        const list = [<Action>{description: 'A Current Action'}];
        component.current = list;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('app-action-list#current')).properties.list).toEqual(list);
      });
    });

    describe('Old app-action-list', () => {
      it('should bind properties', () => {
        const list = [<Action>{description: 'An Old Action'}];
        component.old = list;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('app-action-list#old')).properties.list).toEqual(list);
      });
    });

    describe('Older app-action-list', () => {
      it('should bind properties', () => {
        const list = [<Action>{description: 'An Older Action'}];
        component.older = list;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('app-action-list#older')).properties.list).toEqual(list);
      });
    });
  });
});
