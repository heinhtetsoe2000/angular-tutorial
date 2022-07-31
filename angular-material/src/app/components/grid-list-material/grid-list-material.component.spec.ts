import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListMaterialComponent } from './grid-list-material.component';

describe('GridListMaterialComponent', () => {
  let component: GridListMaterialComponent;
  let fixture: ComponentFixture<GridListMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
