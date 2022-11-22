import { trigger, transition, animate, style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '../../starship-list.interface';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss'],
  animations: [
    trigger('childAnimation', [
      transition(':enter', [
        animate('0ms', style({ opacity: '0' })),
        animate('300ms {{delay}}ms', style({ opacity: '1' })),
      ], { params: { delay: 0 } })
    ])
  ]
})
export class StarshipComponent implements OnInit {
  @Input() starship!: Starship;
  @Input() delay: Number = 0;
  public id:number = 0;
  constructor() {
   }

  ngOnInit(): void {
    this.id = Number(this.starship.url.split('/')[5])
  }
  
}
