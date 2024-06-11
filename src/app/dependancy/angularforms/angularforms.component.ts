import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// to add for using reactive forms
// validators are added to import for forms validation
import { FormGroup, FormControl, Validators } from '@angular/forms';
// input decorator is imported to pass data from parent component dependancy to child angularforms
import { Input } from '@angular/core';
// child to parent to using  @output decorator
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angularforms',
  templateUrl: './angularforms.component.html',
  styleUrls: ['./angularforms.component.css']
})
export class AngularformsComponent implements OnInit {
  // template driven forms
  // purchase(payment: NgForm) {
  // console.log(payment.value);
  // }
  //  template driven forms
  // registerUser(form : NgForm){
  //   console.log("Forms example");
  // }

  // parent to child data passing using @input decorator
@Input()
count: number;
// child to parent @output decorator
@Output()
childDataEvent:EventEmitter<number>= new EventEmitter();
onClick(value){
  // alert pop up displays
  this.childDataEvent.emit(value);
  console.log("From child:" + value);
}

  constructor() { }

// NOTE : ngOnInit should always be after constructor

  ngOnInit() {

  }
  // Reactive forms example
  // loginForm = new FormGroup(
  //   {
  //     username: new FormControl('DCOE'),
  //     city: new FormControl('admin'),
  //   }
  // )
  // Reactive forms/Validators login example
  login() {
    console.log(this.loginForm.value);
  }

  // Validators example
  loginForm = new FormGroup({
    username: new FormControl
    ('',
      [
        Validators.required,
        Validators.minLength(5), 
        Validators.maxLength(10)
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(8)
      ]
    ),
    email: new FormControl('', Validators.email),
    address: new FormGroup({
      state: new FormControl('Karnataka')
    })
  });

  // child to parent

}
