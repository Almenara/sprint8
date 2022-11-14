
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { StarshipListComponent } from './starship/list/starship-list.component';
import { StarshipDetailComponent } from './starship/detail/starship-detail.component';
import { StarshipComponent } from './starship/list/element/starship.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    ContentComponent,
    StarshipDetailComponent,
    StarshipListComponent,
    StarshipComponent,
  ],
  imports: [
    ContentRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    ContentComponent,
    ErrorPageComponent
  ]
})
export class ContentModule { }
