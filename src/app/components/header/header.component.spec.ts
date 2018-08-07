import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('when rendering', () => {
    ['Title 1', 'Title 2'].forEach(title => {
      it(`title should display ${ title }`, () => {
        component.title = title;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('h1#title')).nativeElement.textContent).toEqual(title);
      });
    });
  });
});
