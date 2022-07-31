import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarMaterialComponent } from './toolbar-material.component';

describe('ToolbarMaterialComponent', () => {
  let component: ToolbarMaterialComponent;
  let fixture: ComponentFixture<ToolbarMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
