import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionListGroupComponent } from './action-list-group.component';

describe('ActionListGroupComponent', () => {
  let component: ActionListGroupComponent;
  let fixture: ComponentFixture<ActionListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionListGroupComponent ]
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
});
