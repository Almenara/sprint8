import { OpenMenuService } from './../../open-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private openMenuService: OpenMenuService) { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.openMenuService.closeMenu()
  }

}
