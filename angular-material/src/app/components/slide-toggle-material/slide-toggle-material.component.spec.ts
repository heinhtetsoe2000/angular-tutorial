import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleMaterialComponent } from './slide-toggle-material.component';

describe('SlideToggleMaterialComponent', () => {
  let component: SlideToggleMaterialComponent;
  let fixture: ComponentFixture<SlideToggleMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideToggleMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideToggleMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
