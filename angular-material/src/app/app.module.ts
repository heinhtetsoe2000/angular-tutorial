import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Autocomplete component
import { AutoCompleteMaterialComponent } from './components/auto-complete-material/auto-complete-material.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

// Badge component
import { BadgeMaterialComponent } from './components/badge-material/badge-material.component';
import { MatBadgeModule } from '@angular/material/badge';

// Bottom Sheet component
import { BottomSheetMaterialComponent } from './components/bottom-sheet-material/bottom-sheet-material.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from './components/bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';
import { MatListModule } from '@angular/material/list';

// Button and Icon component
import { ButtonAndIconMaterialComponent } from './components/button-and-icon-material/button-and-icon-material.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

// Button Toggle component
import { ButtonToggleMaterialComponent } from './components/button-toggle-material/button-toggle-material.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Card and Progress Bar component
import { CardAndProgressBarMaterialComponent } from './components/card-and-progress-bar-material/card-and-progress-bar-material.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Checkbox component
import { CheckboxMaterialComponent } from './components/checkbox-material/checkbox-material.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Chips component
import { ChipsMaterialComponent } from './components/chips-material/chips-material.component';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';

// Datepicker component
import { DatepickerMaterialComponent } from './components/datepicker-material/datepicker-material.component';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteMaterialComponent,
    BadgeMaterialComponent,
    BottomSheetMaterialComponent,
    BottomSheetOverviewExampleSheetComponent,
    ButtonAndIconMaterialComponent,
    ButtonToggleMaterialComponent,
    CardAndProgressBarMaterialComponent,
    CheckboxMaterialComponent,
    ChipsMaterialComponent,
    DatepickerMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatChipsModule,
    DragDropModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
