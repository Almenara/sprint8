
import { state, style, trigger, transition, animate } from '@angular/animations';
import { StarWarsAPIService } from './../../star-wars-api.service';
import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss'],
  animations:[
    trigger("fadeInOut", [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(
          '500ms ease-in',
          style({ opacity: 1 })
          ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in', 
          style({ opacity: 0 })
          ),
      ]),
    ])
  ]
})
export class StarshipListComponent implements OnInit {
  
  public fadeInOut = true;
  
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
  getLastNumber(number:Number):Number{
    const lastDigit = String(number).slice(-1); 
    number = Number(lastDigit) * 200;
    return number;
  }
}
