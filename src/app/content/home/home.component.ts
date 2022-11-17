import { AuthService } from './../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get auth(){
    return this.authService.auth
  }

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

}
