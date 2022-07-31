import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonMaterialComponent } from './radio-button-material.component';

describe('RadioButtonMaterialComponent', () => {
  let component: RadioButtonMaterialComponent;
  let fixture: ComponentFixture<RadioButtonMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
