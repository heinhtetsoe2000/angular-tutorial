import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsMaterialComponent } from './chips-material.component';

describe('ChipsMaterialComponent', () => {
  let component: ChipsMaterialComponent;
  let fixture: ComponentFixture<ChipsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipsMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
