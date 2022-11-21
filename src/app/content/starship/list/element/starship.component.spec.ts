import { Starship } from './../../starship-list.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipComponent } from './starship.component';

describe('StarshipComponent', () => {
  let component: StarshipComponent;
  let fixture: ComponentFixture<StarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarshipComponent);
    component = fixture.componentInstance;
    let starship:Starship = {
      name:                   "string",
      model:                  "string",
      manufacturer:           "string",
      cost_in_credits:        "string",
      length:                 "string",
      max_atmosphering_speed: "string",
      crew:                   "string",
      passengers:             "string",
      cargo_capacity:         "string",
      consumables:            "string",
      hyperdrive_rating:      "string",
      MGLT:                   "string",
      starship_class:         "string",
      pilots:                 [],
      films:                  [],
      created:                new Date(),
      edited:                 new Date(),
      url:                    "https://swapi.dev/api/starships/5/"
    } 
    component.starship = starship; 
    fixture.detectChanges();
  });

  it('Iniciar componente con datos de nave', () => {
    
    expect(component).toBeTruthy();
  });
});
