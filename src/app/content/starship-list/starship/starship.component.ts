import { StarWarsAPIService } from './../../star-wars-api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {
  @Input() starshipList: any;

  constructor(public starWarsApi : StarWarsAPIService) { }

  ngOnInit(): void {
  }

}
