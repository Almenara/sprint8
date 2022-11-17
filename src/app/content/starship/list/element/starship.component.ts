import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '../../starship-list.interface';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  @Input() starship!: Starship;
  public id:number = 0;
  constructor() {
   }

  ngOnInit(): void {
    this.id = Number(this.starship.url.split('/')[5])
  }
  
}
