import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipMaterialComponent } from './tooltip-material.component';

describe('TooltipMaterialComponent', () => {
  let component: TooltipMaterialComponent;
  let fixture: ComponentFixture<TooltipMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
