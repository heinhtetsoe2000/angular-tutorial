import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMaterialComponent } from './slider-material.component';

describe('SliderMaterialComponent', () => {
  let component: SliderMaterialComponent;
  let fixture: ComponentFixture<SliderMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
