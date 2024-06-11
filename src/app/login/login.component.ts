import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import the below to implement ngonchanges
import { SimpleChanges, OnChanges } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  username: string;
  password: string;
  
    ngOnInit() {
    }
  
    login() : void {
      if(this.username == '123' && this.password == '123'){
       this.router.navigate(["/home"]);
       console.log("logged in successfully");
      alert("Logged in successfully");
      }else {
        alert("Invalid credentials");
        console.log("enter valid credentials");
      }
    }
    }


 