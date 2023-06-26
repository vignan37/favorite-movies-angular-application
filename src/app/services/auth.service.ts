import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // login(uname: string, pword: string){
  //   if(uname ==="vignan" && pword ==="123"){
  //     return 200;
  //   }
  //   else return 403;
  // }

  login(username : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(username,password).then( res => {
        localStorage.setItem('token','true');

        if(res.user?.email == username) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['/varify-email']);
        }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }


  register(username : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(username, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

}
