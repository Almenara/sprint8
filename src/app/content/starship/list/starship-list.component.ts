import { StarWarsAPIService } from './../../star-wars-api.service';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {
  
  
  public nextPage:number = 1;
  get starshipList(){
    return this.starWarsApi.starshipList;
  }

  constructor(public starWarsApi : StarWarsAPIService) {
  }

  ngOnInit(): void {
  }

  getStarshipNextList(){
    if(this.starWarsApi.starshipList.next){
      this.nextPage = Number(this.starWarsApi.starshipList.next.charAt(this.starWarsApi.starshipList.next.length - 1));
      this.starWarsApi.getStarshipListByPage(this.nextPage);
    }
  }
  
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if(this.nextPage){
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
      this.getStarshipNextList();
      }
    }
  }
}
