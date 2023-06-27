import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router:Router){
    console.log('Header comp loaded');
  }
  
  goToHome(){
    this.router.navigate(['home']);
  }

  logout(){
    this.router.navigate(['login']);  
  }
}
