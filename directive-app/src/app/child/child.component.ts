import { Component, Input, OnInit } from '@angular/core';

@Input() 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  userName: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
