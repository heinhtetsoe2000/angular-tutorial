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



@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteMaterialComponent,
    BadgeMaterialComponent,
    BottomSheetMaterialComponent,
    BottomSheetOverviewExampleSheetComponent,
    ButtonAndIconMaterialComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
