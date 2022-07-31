import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeMaterialComponent } from './tree-material.component';

describe('TreeMaterialComponent', () => {
  let component: TreeMaterialComponent;
  let fixture: ComponentFixture<TreeMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
