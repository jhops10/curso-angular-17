import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelGroupComponent } from './ng-model-group.component';

describe('NgModelGroupComponent', () => {
  let component: NgModelGroupComponent;
  let fixture: ComponentFixture<NgModelGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgModelGroupComponent]
    });
    fixture = TestBed.createComponent(NgModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
