import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-material',
  templateUrl: './slider-material.component.html',
  styleUrls: ['./slider-material.component.scss']
})
export class SliderMaterialComponent implements OnInit {

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
