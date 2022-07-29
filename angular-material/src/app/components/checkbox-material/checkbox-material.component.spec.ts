import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxMaterialComponent } from './checkbox-material.component';

describe('CheckboxMaterialComponent', () => {
  let component: CheckboxMaterialComponent;
  let fixture: ComponentFixture<CheckboxMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
