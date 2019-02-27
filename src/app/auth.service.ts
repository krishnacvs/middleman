import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {
  }

  setLoggedIn(loginFlag: boolean){
    this.loggedIn = loginFlag;
  }

  get IsLoggedIn(){
    return this.loggedIn;
  }
}
