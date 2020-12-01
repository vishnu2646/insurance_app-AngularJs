import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersDetailComponent } from './brokers-detail.component';

describe('BrokersDetailComponent', () => {
  let component: BrokersDetailComponent;
  let fixture: ComponentFixture<BrokersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
