import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAndIconMaterialComponent } from './button-and-icon-material.component';

describe('ButtonAndIconMaterialComponent', () => {
  let component: ButtonAndIconMaterialComponent;
  let fixture: ComponentFixture<ButtonAndIconMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAndIconMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonAndIconMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
