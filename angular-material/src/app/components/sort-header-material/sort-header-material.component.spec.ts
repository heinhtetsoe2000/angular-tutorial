import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderMaterialComponent } from './sort-header-material.component';

describe('SortHeaderMaterialComponent', () => {
  let component: SortHeaderMaterialComponent;
  let fixture: ComponentFixture<SortHeaderMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortHeaderMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortHeaderMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
