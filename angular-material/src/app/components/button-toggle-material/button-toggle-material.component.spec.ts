import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleMaterialComponent } from './button-toggle-material.component';

describe('ButtonToggleMaterialComponent', () => {
  let component: ButtonToggleMaterialComponent;
  let fixture: ComponentFixture<ButtonToggleMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonToggleMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonToggleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
