import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:"",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("form submited");
   window.alert("clicked submit"); 
  }

}
