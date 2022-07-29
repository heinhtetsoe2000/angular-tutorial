import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerMaterialComponent } from './datepicker-material.component';

describe('DatepickerMaterialComponent', () => {
  let component: DatepickerMaterialComponent;
  let fixture: ComponentFixture<DatepickerMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
