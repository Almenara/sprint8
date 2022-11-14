import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Starship, StarshipList } from './starship/starship-list.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsAPIService{

  public URLService: string = `https://swapi.py4e.com/api`;
  public resource: string = `starships`;

  public starshipList!: StarshipList;
  public starshipDetail!: Starship;

  

  constructor(private http: HttpClient, private route: Router) {
    this.getStarshipList()
  }

  getStarshipListByPage(page:number):any{
    this.http.get<StarshipList>(`${this.URLService}/${this.resource}/?page=${page}`)
      .subscribe(resp => {
        //return (resp.results)
        this.starshipList.next = resp.next;
        this.starshipList.previous = resp.previous;
        this.starshipList.results = this.starshipList.results.concat(resp.results);
      })
  }
  getStarshipList():any{
    this.http.get<StarshipList>(`${this.URLService}/${this.resource}/?page=1`)
      .subscribe(resp => {
        this.starshipList = resp;
      })
  }
  handleError(error:Error) {
    console.log(error)
  }
  async getStarship(id: number) {
    await firstValueFrom(this.http.get<Starship>(`${this.URLService}/${this.resource}/${id}`))
    .then( starship => this.starshipDetail = starship )
    .catch( (error:any) => { if (error.status != 200 ) this.route.navigateByUrl('/404') })
    
    console.log(this.starshipDetail)
    return this.starshipDetail;
  }
  

}
