import { Auth } from './../auth.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user:Auth = {
      id:     null,
      email:  null,
      user:   null
  }
  private _auth: Auth | undefined | null;

  get auth() {
    return {...this._auth}
  }

  constructor() { }

  login(id: number, email:string, user:string){
    this.user.id = id;
    this.user.email = email;
    this.user.user = user;
    this._auth = this.user;
    return this.user
  }

  logout(){
    this._auth = {
      id:     null,
      email:  null,
      user:   null
    };
    this.user = this._auth
  }
}
