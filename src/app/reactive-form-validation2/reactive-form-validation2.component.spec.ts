import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidation2Component } from './reactive-form-validation2.component';

describe('ReactiveFormValidation2Component', () => {
  let component: ReactiveFormValidation2Component;
  let fixture: ComponentFixture<ReactiveFormValidation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormValidation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
