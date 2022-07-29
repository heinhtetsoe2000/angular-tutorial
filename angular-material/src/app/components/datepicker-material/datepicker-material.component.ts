import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'app-datepicker-material',
  templateUrl: './datepicker-material.component.html',
  styleUrls: ['./datepicker-material.component.scss']
})
export class DatepickerMaterialComponent implements OnInit {

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
