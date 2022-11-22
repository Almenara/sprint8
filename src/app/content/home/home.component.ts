import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('load', [
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
    ]),
  ]
})
export class HomeComponent implements OnInit {
  public fadeInStart = false; 
  get auth(){
    return this.authService.auth
  }

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
    this.fadeInStart = true; 
  }
  
}
