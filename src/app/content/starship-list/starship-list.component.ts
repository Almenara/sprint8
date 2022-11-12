import { StarWarsAPIService } from './../star-wars-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  
  get starshipList(){
    return this.starWarsApi.starshipList;
  }

  constructor(public starWarsApi : StarWarsAPIService) {
  }

  ngOnInit(): void {
  }

  getStarshipNextList(page:number){
    this.starWarsApi.getStarshipList(page);
    return this.starWarsApi.starshipList;
  }

}
