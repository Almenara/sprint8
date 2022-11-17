import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Starship, StarshipList } from './starship/starship-list.interface';
import { Pilot } from './starship/pilot.interface';
import { Film } from './starship/film.interface';

@Injectable({
  providedIn: 'root'
})
export class StarWarsAPIService{

  public URLService:      string = `https://swapi.py4e.com/api`;
  public resource:        string = `starships`;

  public starshipList!:   StarshipList;
  public starshipDetail!: Starship;

  public films:           Film[] = [];

  public pilots:          Pilot[] = [];

  

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
    
    this.pilots = [];
    if(this.starshipDetail.pilots.length > 0){
      this.starshipDetail.pilots.map(pilot => {
        let id = Number(pilot.split('/')[5]);
        this.getPilot('people', id);
      })
    }

    this.films = [];
    if(this.starshipDetail.films.length > 0){
      this.starshipDetail.films.map(films => {
        let id = Number(films.split('/')[5]);
        this.getFilm('films', id);
      })
    }

    return {starship : this.starshipDetail, pilots : this.pilots, films : this.films};
  }
  async getPilot(resource: string, id:number){
    await firstValueFrom(this.http.get<Pilot>(`${this.URLService}/${resource}/${id}`))
    .then( pilot => {
      pilot.image = `https://starwars-visualguide.com/assets/img/characters/${pilot.url.split('/')[5]}.jpg`;
      this.pilots.push(pilot)
    })
    .catch( (error:any) => { if (error.status != 200 ) return error.status })
  }
  async getFilm(resource: string, id:number){
    await firstValueFrom(this.http.get<Film>(`${this.URLService}/${resource}/${id}`))
    .then( film =>{
      film.image = `https://starwars-visualguide.com/assets/img/films/${film.url.split('/')[5]}.jpg`;
      this.films.push(film)
    } )
    .catch( (error:any) => { if (error.status != 200 ) return error.status })
  }

}
