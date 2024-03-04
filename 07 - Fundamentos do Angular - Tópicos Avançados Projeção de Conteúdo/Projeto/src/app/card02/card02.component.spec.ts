import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card02Component } from './card02.component';

describe('Card02Component', () => {
  let component: Card02Component;
  let fixture: ComponentFixture<Card02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Card02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Card02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
