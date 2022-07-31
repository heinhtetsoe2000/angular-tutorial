import { Component } from '@angular/core';

@Component({
  selector: 'app-ripple-material',
  templateUrl: './ripple-material.component.html',
  styleUrls: ['./ripple-material.component.scss']
})
export class RippleMaterialComponent {

  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 300;
  color: string = '';

}
