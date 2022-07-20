import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLogIn: boolean = false;
  isLogOut: boolean = true;

  list = [1, 2, 3, 4, 5];

  studentArr: any[] = [{
    "id": 1,
    "name": "student1"
  },
  {
    "id": 2,
    "name": "student2"
  },
  {
    "id": 3, "name": "student3"
  },
  {
    "id": 4,
    "name": "student4"
  }
  ];
  trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
  };

  logInName = 'admin';

  users: User[] = [
    {
      "userId": 1,
      "userName": 'User1',
    },
    {
      "userId": 2,
      "userName": 'User2',
    },
  ];

  name: string = 'Peter';

  presentDate = new Date();

  timeChange = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  price: number = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
  
  decimalNum1: number = 0.8178;
  decimalNum2: number = 5.43;

  jsonData = { id: 'one', name: { username: 'user1' } }
  
  digits: number = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
