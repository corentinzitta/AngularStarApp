import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable, inject } from '@angular/core';

//Protection de l'accès aux routes en vérifiant qu'un utilisateur est bien connecté
/*
export const authGuard: CanActivateFn = (route, state) => {

  //inject() permet de récupèrer les instances de service

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isLoggedIn) {
    return true;
  }
  else {
    router.navigate(['/login']);
    return false;
  }
}; */


@Injectable({
  providedIn: 'root'
})
export class authGuard{

    constructor(
      private authService: AuthService,
      private router: Router
    ){}

    canActivate(): boolean {
      if(this.authService.isLoggedIn){
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
  }
  