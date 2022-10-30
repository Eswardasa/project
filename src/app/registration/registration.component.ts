import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  document:any;
  constructor(@Inject(DOCUMENT) document:Document) { this.document=document}

  ngOnInit(): void {
  }submit(){
    if (this.document.getElementById('firstname').value=='gopi'&&this.document.getElementById('lastname').value=='qwer'&&this.document.getElementById('password').value=='qwer') {
      alert('submitted')
      
    }else{
      alert('error Username/Password')
    }
   }

}
