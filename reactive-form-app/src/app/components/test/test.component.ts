import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]);
  phone = new FormControl('', [Validators.required, Validators.pattern("[0-9]{11}")]);


  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Please enter your name';
    } 

    return this.name.hasError('name') ? 'Not a valid name' : '';
  }

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneErrorMessage() {
    if (this.phone.hasError('required')) {
      return 'Please enter your phone number';
    }

    return this.phone.hasError('phone') ? 'Not a valide phone number' : '';
  }

  requiredForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
    });
  }

  ngOnInit() {
    this.myForm();
  }
  
}
