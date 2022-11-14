import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content.component';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipComponent } from './starship-list/starship/starship.component';

@NgModule({
  declarations: [
    ContentComponent,
    StarshipListComponent,
    StarshipComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    ContentComponent
  ]
})
export class ContentModule { }
