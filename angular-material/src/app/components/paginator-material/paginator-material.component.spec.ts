import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorMaterialComponent } from './paginator-material.component';

describe('PaginatorMaterialComponent', () => {
  let component: PaginatorMaterialComponent;
  let fixture: ComponentFixture<PaginatorMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
