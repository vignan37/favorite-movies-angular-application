import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username:string="";
  password:string="";
  errorMsg:string="";

  constructor(private router:Router, private auth:AuthService){

  }

  login(){
    console.log('button clicked');
    if(this.username.trim().length===0){
      this.errorMsg="Username requrired";
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    }
    else{
      let cred = this.auth.login(this.username,this.password);
      if(cred==200){
        this.router.navigate(['home']);
      }
      else{
        this.errorMsg="Username & Password doesnt match";
      }
    }
}
}
