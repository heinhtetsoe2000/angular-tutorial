import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarMaterialComponent } from './snackbar-material.component';

describe('SnackbarMaterialComponent', () => {
  let component: SnackbarMaterialComponent;
  let fixture: ComponentFixture<SnackbarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
