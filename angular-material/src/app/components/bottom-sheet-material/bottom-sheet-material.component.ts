import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Component({
  selector: 'app-bottom-sheet-material',
  templateUrl: './bottom-sheet-material.component.html',
  styleUrls: ['./bottom-sheet-material.component.scss']
})
export class BottomSheetMaterialComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  ngOnInit(): void {
  }

}
