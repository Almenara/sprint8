import { OpenMenuService } from './../open-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public menuIsOpen:boolean = false;
  
  constructor(private openMenuService: OpenMenuService) { 
    
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.menuIsOpen =this.openMenuService.toggleMenu()
  }

}
