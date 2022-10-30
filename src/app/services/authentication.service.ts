import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  loggedIn = false

  constructor() { }

  formSubmit(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }

}
