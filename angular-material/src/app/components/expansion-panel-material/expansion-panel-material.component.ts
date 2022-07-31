import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel-material',
  templateUrl: './expansion-panel-material.component.html',
  styleUrls: ['./expansion-panel-material.component.scss']
})
export class ExpansionPanelMaterialComponent {

  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

}
