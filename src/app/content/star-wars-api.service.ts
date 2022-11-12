import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarWarsAPIService{

  public starshipList: any[] = [];

  constructor(private http: HttpClient) {
    this.getStarshipList()
  }

  getStarshipList(page:number = 1):any{
    this.http.get(`https://swapi.py4e.com/api/starships/?page=${page}`)
      .subscribe((resp: any) => {
        this.starshipList = resp.results;
        console.log(this.starshipList)
      })
  }
  getStarship(id:number = 1){
    this.http.get(`https://swapi.py4e.com/api/starships/${id}`)
      .subscribe((resp:any) => {
        console.log(resp.results);        
      })
  }

}
