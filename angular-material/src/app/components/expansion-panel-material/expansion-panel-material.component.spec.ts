import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelMaterialComponent } from './expansion-panel-material.component';

describe('ExpansionPanelMaterialComponent', () => {
  let component: ExpansionPanelMaterialComponent;
  let fixture: ComponentFixture<ExpansionPanelMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
