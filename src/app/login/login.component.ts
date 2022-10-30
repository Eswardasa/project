import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  document: Document;

  constructor(@Inject(DOCUMENT) document:Document) { this.document=document}

  ngOnInit(): void {}
  login(){
    if (this.document.getElementById('name')&&this.document.getElementById('password')) {
      alert('submitted')
      
    }else{
      alert('error Username/Password')
    }
   }
}
