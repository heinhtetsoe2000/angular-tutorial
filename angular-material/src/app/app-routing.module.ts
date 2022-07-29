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

const routes: Routes = [
  // { path: '', component: AutoCompleteMaterialComponent },
  // { path: '', component: BadgeMaterialComponent },
  // { path: '', component: BottomSheetMaterialComponent },
  // { path: '', component: ButtonAndIconMaterialComponent },
  // { path: '', component: ButtonToggleMaterialComponent },
  // { path: '', component: CardAndProgressBarMaterialComponent },
  // { path: '', component: CheckboxMaterialComponent },
  // { path: '', component: ChipsMaterialComponent },
  { path: '', component: DatepickerMaterialComponent },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
