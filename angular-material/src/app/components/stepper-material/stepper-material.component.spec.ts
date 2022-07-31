import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMaterialComponent } from './stepper-material.component';

describe('StepperMaterialComponent', () => {
  let component: StepperMaterialComponent;
  let fixture: ComponentFixture<StepperMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
