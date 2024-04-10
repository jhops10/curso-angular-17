import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfessionComponent } from './form-profession.component';

describe('FormProfessionComponent', () => {
  let component: FormProfessionComponent;
  let fixture: ComponentFixture<FormProfessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormProfessionComponent]
    });
    fixture = TestBed.createComponent(FormProfessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
