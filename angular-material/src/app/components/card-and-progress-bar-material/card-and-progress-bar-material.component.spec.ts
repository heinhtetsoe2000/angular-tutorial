import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAndProgressBarMaterialComponent } from './card-and-progress-bar-material.component';

describe('CardAndProgressBarMaterialComponent', () => {
  let component: CardAndProgressBarMaterialComponent;
  let fixture: ComponentFixture<CardAndProgressBarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAndProgressBarMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAndProgressBarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
