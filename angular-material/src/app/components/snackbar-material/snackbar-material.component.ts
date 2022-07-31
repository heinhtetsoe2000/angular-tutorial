import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-material',
  templateUrl: './snackbar-material.component.html',
  styleUrls: ['./snackbar-material.component.scss']
})
export class SnackbarMaterialComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {

    let durationInSeconds = 3;

    this._snackBar.open(message, action, { duration: durationInSeconds * 1000, });
  }

  ngOnInit(): void {
  }

}
