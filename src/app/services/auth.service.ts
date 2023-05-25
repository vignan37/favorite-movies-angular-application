import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  login(uname: string, pword: string){
    if(uname ==="vignan" && pword ==="123"){
      return 200;
    }
    else return 403;
  }

  constructor() {
    
   }
}
