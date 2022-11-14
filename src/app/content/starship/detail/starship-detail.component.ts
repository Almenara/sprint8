import { Starship } from './../starship-list.interface';
import { StarWarsAPIService } from './../../star-wars-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss']
})
export class StarshipDetailComponent implements OnInit {
  public id:number = 0;
  
  public starship!: Starship;

  public starshipImg: string = "../../../../assets/img/default.jpg"
  public starshipImgDefault: string = "../../../../assets/img/default.jpg"

  constructor(private route: ActivatedRoute, private starWarsApi: StarWarsAPIService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = Number(params.get('id'));
    });
    this.starWarsApi.getStarship(this.id).then(( data : Starship ) => this.starship = data);
    this.starshipImg = `https://starwars-visualguide.com/assets/img/starships/${this.id}.jpg`
  }
  getStarshipImgDefault(){
    this.starshipImg = this.starshipImgDefault
  }

}