import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-and-progress-bar-material',
  templateUrl: './card-and-progress-bar-material.component.html',
  styleUrls: ['./card-and-progress-bar-material.component.scss']
})
export class CardAndProgressBarMaterialComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }

  ngOnInit(): void {
  }

}
