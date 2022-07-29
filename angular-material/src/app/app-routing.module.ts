import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteMaterialComponent } from './components/auto-complete-material/auto-complete-material.component';
import { BadgeMaterialComponent } from './components/badge-material/badge-material.component';
import { BottomSheetMaterialComponent } from './components/bottom-sheet-material/bottom-sheet-material.component';
import { ButtonAndIconMaterialComponent } from './components/button-and-icon-material/button-and-icon-material.component';

const routes: Routes = [
  //{ path: '', component: AutoCompleteMaterialComponent },
  //{ path: '', component: BadgeMaterialComponent },
  //{ path: '', component: BottomSheetMaterialComponent },
  { path: '', component: ButtonAndIconMaterialComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
