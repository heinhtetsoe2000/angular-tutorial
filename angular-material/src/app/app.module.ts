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
import { MatNativeDateModule } from '@angular/material/core';

// Dialog component
import { DialogMaterialComponent } from './components/dialog-material/dialog-material.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentExampleDialogComponent } from './components/dialog-content-example-dialog/dialog-content-example-dialog.component';

// Expansion Panel component
import { ExpansionPanelMaterialComponent } from './components/expansion-panel-material/expansion-panel-material.component';
import { MatExpansionModule } from '@angular/material/expansion';

// Grid List component
import { GridListMaterialComponent } from './components/grid-list-material/grid-list-material.component';
import { MatGridListModule } from '@angular/material/grid-list';

// Menu component
import { MenuMaterialComponent } from './components/menu-material/menu-material.component';
import { MatMenuModule } from '@angular/material/menu';

// Paginator component
import { PaginatorMaterialComponent } from './components/paginator-material/paginator-material.component';
import { MatPaginatorModule } from '@angular/material/paginator';

// Progress Spinner component
import { ProgressSpinnerMaterialComponent } from './components/progress-spinner-material/progress-spinner-material.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Radio Button component
import { RadioButtonMaterialComponent } from './components/radio-button-material/radio-button-material.component';
import { MatRadioModule } from '@angular/material/radio';

// Ripple component
import { RippleMaterialComponent } from './components/ripple-material/ripple-material.component';
import { MatRippleModule } from '@angular/material/core';

// Select component
import { SelectMaterialComponent } from './components/select-material/select-material.component';
import { MatSelectModule } from '@angular/material/select';

// Sidenav component
import { SidenavMaterialComponent } from './components/sidenav-material/sidenav-material.component';
import { MatSidenavModule } from '@angular/material/sidenav';

// Slide toggle component
import { SlideToggleMaterialComponent } from './components/slide-toggle-material/slide-toggle-material.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

// Slider component
import { SliderMaterialComponent } from './components/slider-material/slider-material.component';
import { MatSliderModule } from '@angular/material/slider';

// Snackbar component
import { SnackbarMaterialComponent } from './components/snackbar-material/snackbar-material.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Sort Header component
import { SortHeaderMaterialComponent } from './components/sort-header-material/sort-header-material.component';
import { MatSortModule } from '@angular/material/sort';

// Stepper component
import { StepperMaterialComponent } from './components/stepper-material/stepper-material.component';
import { MatStepperModule } from '@angular/material/stepper';

// Table component
import { TableMaterialComponent } from './components/table-material/table-material.component';
import { MatTableModule } from '@angular/material/table';

// Tab component
import { TabMaterialComponent } from './components/tab-material/tab-material.component';
import { MatTabsModule } from '@angular/material/tabs';

// Toolbar component
import { ToolbarMaterialComponent } from './components/toolbar-material/toolbar-material.component';
import { MatToolbarModule } from '@angular/material/toolbar';

// Tooltip component
import { TooltipMaterialComponent } from './components/tooltip-material/tooltip-material.component';
import { MatTooltipModule } from '@angular/material/tooltip';

// Tree component
import { TreeMaterialComponent } from './components/tree-material/tree-material.component';
import { MatTreeModule } from '@angular/material/tree';

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
    DatepickerMaterialComponent,
    DialogMaterialComponent,
    DialogContentExampleDialogComponent,
    ExpansionPanelMaterialComponent,
    GridListMaterialComponent,
    MenuMaterialComponent,
    PaginatorMaterialComponent,
    ProgressSpinnerMaterialComponent,
    RadioButtonMaterialComponent,
    RippleMaterialComponent,
    SelectMaterialComponent,
    SidenavMaterialComponent,
    SlideToggleMaterialComponent,
    SliderMaterialComponent,
    SnackbarMaterialComponent,
    SortHeaderMaterialComponent,
    StepperMaterialComponent,
    TableMaterialComponent,
    TabMaterialComponent,
    ToolbarMaterialComponent,
    TooltipMaterialComponent,
    TreeMaterialComponent
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
    MatNativeDateModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
