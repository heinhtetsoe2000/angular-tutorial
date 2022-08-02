import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  genders: string[] = ['Male', 'Female'];

  requiredForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      date: ['', Validators.required],
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.myForm();
  }
  
}
