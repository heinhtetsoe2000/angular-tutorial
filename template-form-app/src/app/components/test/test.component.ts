import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  onClickSubmit(result: { username: string; age: number; }) {
    console.log(`${result.username} is ${result.age} years old.`); 
 }

}
