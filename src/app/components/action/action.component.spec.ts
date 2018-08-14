import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActionComponent} from './action.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Action} from '../../models/action';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should bind action', () => {
    component.action = <Action>{description: 'An item description'};
    fixture.detectChanges();
    const text = fixture.debugElement.query(By.css('.mat-body-1')).nativeElement.textContent.trim();
    expect(text).toEqual('An item description');
  });
});
