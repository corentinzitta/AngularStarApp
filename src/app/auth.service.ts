import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;
  redirectUrl: string;

  login(user:string, password: string): Observable<boolean>{
    const isLoggedIn = (user == 'user' && password == 'password');

    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
    )
  }

  logout(){
    this.isLoggedIn = false;
  }
}
