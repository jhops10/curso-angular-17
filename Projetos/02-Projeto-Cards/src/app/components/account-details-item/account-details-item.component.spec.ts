import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailsItemComponent } from './account-details-item.component';

describe('AccountDetailsItemComponent', () => {
  let component: AccountDetailsItemComponent;
  let fixture: ComponentFixture<AccountDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountDetailsItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
