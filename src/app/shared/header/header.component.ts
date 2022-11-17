import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { OpenMenuService } from './../open-menu.service';
import { AuthService } from './../../content/auth/services/auth.service';
import { Auth } from './../../content/auth/auth.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  get menuIsOpen(){
    return this.openMenuService.menuIsOpen;
  }

  get auth(){
    return this.authService.auth
  }

  constructor(
    private openMenuService: OpenMenuService, 
    private router: Router,
    private authService: AuthService) { 
    
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.openMenuService.toggleMenu()
  }

  closeMenu(){
    this.openMenuService.closeMenu()
  }
  logout(){
    this.authService.logout();
  }
}
