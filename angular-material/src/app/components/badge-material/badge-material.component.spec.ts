import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeMaterialComponent } from './badge-material.component';

describe('BadgeMaterialComponent', () => {
  let component: BadgeMaterialComponent;
  let fixture: ComponentFixture<BadgeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadgeMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
