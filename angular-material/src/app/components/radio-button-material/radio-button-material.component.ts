import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-button-material',
  templateUrl: './radio-button-material.component.html',
  styleUrls: ['./radio-button-material.component.scss']
})
export class RadioButtonMaterialComponent {

  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

}
