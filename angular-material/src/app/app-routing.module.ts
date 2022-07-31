import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteMaterialComponent } from './components/auto-complete-material/auto-complete-material.component';
import { BadgeMaterialComponent } from './components/badge-material/badge-material.component';
import { BottomSheetMaterialComponent } from './components/bottom-sheet-material/bottom-sheet-material.component';
import { ButtonAndIconMaterialComponent } from './components/button-and-icon-material/button-and-icon-material.component';
import { ButtonToggleMaterialComponent } from './components/button-toggle-material/button-toggle-material.component';
import { CardAndProgressBarMaterialComponent } from './components/card-and-progress-bar-material/card-and-progress-bar-material.component';
import { CheckboxMaterialComponent } from './components/checkbox-material/checkbox-material.component';
import { ChipsMaterialComponent } from './components/chips-material/chips-material.component';
import { DatepickerMaterialComponent } from './components/datepicker-material/datepicker-material.component';
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';
import { ExpansionPanelMaterialComponent } from './components/expansion-panel-material/expansion-panel-material.component';
import { GridListMaterialComponent } from './components/grid-list-material/grid-list-material.component';
import { MenuMaterialComponent } from './components/menu-material/menu-material.component';
import { PaginatorMaterialComponent } from './components/paginator-material/paginator-material.component';
import { ProgressSpinnerMaterialComponent } from './components/progress-spinner-material/progress-spinner-material.component';
import { RadioButtonMaterialComponent } from './components/radio-button-material/radio-button-material.component';
import { RippleMaterialComponent } from './components/ripple-material/ripple-material.component';
import { SelectMaterialComponent } from './components/select-material/select-material.component';
import { SidenavMaterialComponent } from './components/sidenav-material/sidenav-material.component';
import { SlideToggleMaterialComponent } from './components/slide-toggle-material/slide-toggle-material.component';
import { SliderMaterialComponent } from './components/slider-material/slider-material.component';
import { SnackbarMaterialComponent } from './components/snackbar-material/snackbar-material.component';
import { SortHeaderMaterialComponent } from './components/sort-header-material/sort-header-material.component';
import { StepperMaterialComponent } from './components/stepper-material/stepper-material.component';
import { TabMaterialComponent } from './components/tab-material/tab-material.component';
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { ToolbarMaterialComponent } from './components/toolbar-material/toolbar-material.component';
import { TooltipMaterialComponent } from './components/tooltip-material/tooltip-material.component';
import { TreeMaterialComponent } from './components/tree-material/tree-material.component';

const routes: Routes = [
  // { path: '', component: AutoCompleteMaterialComponent },
  // { path: '', component: BadgeMaterialComponent },
  // { path: '', component: BottomSheetMaterialComponent },
  // { path: '', component: ButtonAndIconMaterialComponent },
  // { path: '', component: ButtonToggleMaterialComponent },
  // { path: '', component: CardAndProgressBarMaterialComponent },
  // { path: '', component: CheckboxMaterialComponent },
  // { path: '', component: ChipsMaterialComponent },
  // { path: '', component: DatepickerMaterialComponent },
  // { path: '', component: DialogMaterialComponent },
  // { path: '', component: ExpansionPanelMaterialComponent },
  // { path: '', component: GridListMaterialComponent },
  // { path: '', component: MenuMaterialComponent },
  // { path: '', component: PaginatorMaterialComponent },
  // { path: '', component: ProgressSpinnerMaterialComponent },
  // { path: '', component: RadioButtonMaterialComponent },
  // { path: '', component: RippleMaterialComponent },
  // { path: '', component: SelectMaterialComponent },
  // { path: '', component: SidenavMaterialComponent },
  // { path: '', component: SlideToggleMaterialComponent },
  // { path: '', component: SliderMaterialComponent },
  // { path: '', component: SnackbarMaterialComponent },
  // { path: '', component: SortHeaderMaterialComponent },
  // { path: '', component: StepperMaterialComponent },
  // { path: '', component: TableMaterialComponent },
  // { path: '', component: TabMaterialComponent },
  // { path: '', component: ToolbarMaterialComponent },
  // { path: '', component: TooltipMaterialComponent },
  { path: '', component: TreeMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
