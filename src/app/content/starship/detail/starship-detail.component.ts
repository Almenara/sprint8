import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Film } from './../film.interface';
import { Starship } from './../starship-list.interface';
import { Pilot } from '../pilot.interface';
import { StarWarsAPIService } from './../../star-wars-api.service';
import { animate, style, transition, trigger, state } from '@angular/animations';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
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
export class StarshipDetailComponent implements OnInit {
  
  public fadeInStart = false; 

  public id:number = 0;
  
  public starship!: Starship;
  public pilots: Pilot[] = [];
  public films: Film[] = [];

  public starshipImg: string = "../../../../assets/img/default.jpg"
  public starshipImgDefault: string = "../../../../assets/img/default.jpg"

  constructor(private route: ActivatedRoute, private starWarsApi: StarWarsAPIService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
    this.starWarsApi.getStarship(this.id).then(( data: {starship: Starship, pilots: Pilot[], films: Film[]} ) => {
      this.starship = data.starship;
      this.pilots = data.pilots;
      this.films = data.films;
      this.fadeInStart = true; 
    });
    this.starshipImg = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
    
  }
  getStarshipImgDefault(){
    this.starshipImg = this.starshipImgDefault
  }

}
