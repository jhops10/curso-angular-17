import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordelessItemListComponent } from './bordeless-item-list.component';

describe('BordelessItemListComponent', () => {
  let component: BordelessItemListComponent;
  let fixture: ComponentFixture<BordelessItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BordelessItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BordelessItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
