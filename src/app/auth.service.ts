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
    if(localStorage.getItem('currentUser')){
      return true;
    } else {
      return false;
    }
  }

  login(username:string, pwd: string){
    localStorage.setItem('currentUser',JSON.stringify(username));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
