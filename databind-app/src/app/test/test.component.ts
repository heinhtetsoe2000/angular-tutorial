import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  appName = "My first app in Angular 8";

  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  userName: string = "Peter";

  myCSSClass = "red";
  applyCSSClass = false;

  myColor = "brown";

  constructor() { }

  ngOnInit(): void {
  }

}
