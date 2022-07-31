import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleMaterialComponent } from './ripple-material.component';

describe('RippleMaterialComponent', () => {
  let component: RippleMaterialComponent;
  let fixture: ComponentFixture<RippleMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RippleMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RippleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
