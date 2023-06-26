import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormValidation4Component } from './reactive-form-validation4.component';

describe('ReactiveFormValidation4Component', () => {
  let component: ReactiveFormValidation4Component;
  let fixture: ComponentFixture<ReactiveFormValidation4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormValidation4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormValidation4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
