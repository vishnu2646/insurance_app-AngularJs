import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagineComponent } from './compagine.component';

describe('CompagineComponent', () => {
  let component: CompagineComponent;
  let fixture: ComponentFixture<CompagineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompagineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
