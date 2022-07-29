import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteMaterialComponent } from './auto-complete-material.component';

describe('AutoCompleteMaterialComponent', () => {
  let component: AutoCompleteMaterialComponent;
  let fixture: ComponentFixture<AutoCompleteMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCompleteMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
