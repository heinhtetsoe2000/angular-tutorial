import { Component, OnInit } from '@angular/core';
import { User } from '../user'; 

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
//    template: `
//    <div> 
//   <ng-template ngFor let-item [ngForOf]="Fruits" let-i="index"> 
//   <p>{{i}}</p> 
//   </ng-template> 
//   </div>`,
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    Fruits = ["mango", "apple", "orange", "grapes"]; 
    
    name: string = 'Peter';

    isLogIn: boolean = true;
    isLogOut: boolean = false;

    list = [1, 2, 3, 4, 5];

    studentArr: any[] = [ { 
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
    trackByData(index: number, studentArr: any): number {
        return studentArr.id;
    }

    logInName = 'admin';

    users: User[] = [ 
        { 
           "userId": 1, 
           "userName": 'User1' 
        }, 
        { 
           "userId": 2, 
           "userName": 'User2' 
        }, 
     ];

    constructor() { }

    ngOnInit(): void {
    }

}
