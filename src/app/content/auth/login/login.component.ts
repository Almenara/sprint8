import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { User } from '../user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[
    trigger('load',[
      state(
        'void, hidden',
        style({ 
        opacity: 0 ,
      })),
      state(
        'visible', 
        style({ 
        opacity: 1 ,
      })),
      transition(
        '* => visible', 
        animate('500ms ease-in')
      ),
      transition(
        '* => void, * => hidden', 
        animate('500ms ease-in')
      )

    ])
  ]
})
export class LoginComponent implements OnInit {
  public fadeInStart = false; 

  public loginForm: FormGroup = this.fb.group({
    email:    ['', [Validators.required, Validators.email]],
    password:    ['', [Validators.required, Validators.minLength(6)]],
  })

  constructor(
    public router: Router, 
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
    this.fadeInStart = true; 
  }

  login(){
    let user = JSON.parse(localStorage.getItem('user')!);
    if(user.email == this.loginForm.value.email && user.password == this.loginForm.value.password){
      let name = `${user.name} ${user.surname}`;
      this.authService.login(1, this.loginForm.value.email!, name);
      this.router.navigate([this.authService.redirect])
    }

  }
}
