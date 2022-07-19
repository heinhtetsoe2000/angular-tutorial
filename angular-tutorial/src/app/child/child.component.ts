import { Component, OnInit } from '@angular/core';

// @Input() userName: string;

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

}
