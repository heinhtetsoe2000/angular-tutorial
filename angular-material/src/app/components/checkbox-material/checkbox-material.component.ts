import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox-material',
  templateUrl: './checkbox-material.component.html',
  styleUrls: ['./checkbox-material.component.scss']
})
export class CheckboxMaterialComponent implements OnInit {

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
  }

}
