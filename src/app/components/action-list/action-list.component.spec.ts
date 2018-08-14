import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionListComponent} from './action-list.component';
import {By} from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {Action} from '../../models/action';

fdescribe('ActionListComponent', () => {
  let component: ActionListComponent;
  let fixture: ComponentFixture<ActionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when rendering', () => {
    describe('app-action', () => {
      let debugElements: DebugElement[];
      const list: Action[] = [
        <Action>{description: 'One'},
        <Action>{description: 'Two'},
        <Action>{description: 'Three'},
        <Action>{description: 'Four'},
        <Action>{description: 'Five'},
      ];

      beforeEach(() => {
        component.list = list;
        fixture.detectChanges();
        debugElements = fixture.debugElement.queryAll(By.css('app-action'));
      });

      it('should have one item for each item in list', () => {
        expect(debugElements.length).toEqual(5);
      });

      it('should bind actions from list', () => {
        debugElements.forEach((element, index) => {
          expect(element.properties.action).toEqual(list[index]);
        });
      });
    });
  });
});
