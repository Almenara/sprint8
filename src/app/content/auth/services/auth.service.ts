import { Auth } from './../auth.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public redirect: String = "/home";

  private _auth: Auth | undefined;

  get auth() {
    return {...this._auth}
  }

  constructor() { 
    let auth = localStorage.getItem('auth');
    if(auth) this._auth = JSON.parse(auth);
  }

  login(id: number, email:string, user:string){
    this._auth = {
      id : id,
      email : email,
      user : user,
    };
    localStorage.setItem('auth', JSON.stringify(this._auth));
    return this._auth;
  }

  logout(){
    this._auth = undefined;
    localStorage.removeItem('auth');
    this.redirect = "/home";
    return this._auth;
  }
}
