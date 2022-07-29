import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetMaterialComponent } from './bottom-sheet-material.component';

describe('BottomSheetMaterialComponent', () => {
  let component: BottomSheetMaterialComponent;
  let fixture: ComponentFixture<BottomSheetMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomSheetMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
