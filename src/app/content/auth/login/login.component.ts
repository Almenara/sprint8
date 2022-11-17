import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = {
    name:     null,
    surname:  null,
    email:    null,
    password: null,
    active:   false,
  }
  public registerForm: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    name:     ['', [Validators.required, Validators.minLength(3)]],
    surname:  ['', [Validators.required, Validators.minLength(3)]],
    password:    ['', [Validators.required, Validators.minLength(6)]],
    
  })

  constructor(
    private router: Router, 
    private authService: AuthService,
    private fb: FormBuilder
    ) { 
  }
  

  get auth(){
    return this.authService.auth
  }
  get userLocalStorage(){
    return localStorage.getItem("user") ? true : false ;
  }
  ngOnInit(): void {

  }

  printUser(){
    console.log(this.user);
  }

  login(){
    let user = JSON.parse(localStorage.getItem('user')!);
    if(user.email == this.user.email && user.password == this.user.password){
      let name = `${user.name} ${user.surname}`;
      this.authService.login(1, this.user.email!, name);
      console.log(this.authService.auth);
      this.router.navigate(['/starships'])
    }

  }
  register(){
    this.user.active = true;
    localStorage.setItem('user', JSON.stringify(this.user));
    let name = `${this.user.name} ${this.user.surname}`;
    this.authService.login(1, this.user.email!, name);
      console.log(this.user);
    this.router.navigate(['/home'])
  }


}
