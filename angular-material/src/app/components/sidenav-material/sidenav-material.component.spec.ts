import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMaterialComponent } from './sidenav-material.component';

describe('SidenavMaterialComponent', () => {
  let component: SidenavMaterialComponent;
  let fixture: ComponentFixture<SidenavMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
