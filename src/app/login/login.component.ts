import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  message: string = 'Vous etes déconnecté. (user/password)'
  user: string;
  password: string;
  auth: AuthService;

  constructor(
    private authService: AuthService, 
    private router: Router
  ){}

  ngOnInit(){
    this.auth = this.authService;
  }

  setMessage(){

    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté'
    } else {
      this.message = 'Identifiant ou mot de passe incorrect'
    }

  }

  login(){
    this.message = 'Tentative de connexion en cours...'
    this.auth.login(this.user, this.password).subscribe((isLoggedIn : boolean) => {
      this.setMessage();
      if(isLoggedIn){
        this.router.navigate(['/stars']);
      } else {
        this.password = ''
        this.router.navigate(['/login']);
      }
      
    })
  }

  logout(){
    this.auth.logout();
    this.message = 'Vous êtes déconnecté'
  }
}
