import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from './../shared/shared.module';

import { ContentComponent } from './content.component';
import { StarshipListComponent } from './starship/list/starship-list.component';
import { StarshipDetailComponent } from './starship/detail/starship-detail.component';
import { StarshipComponent } from './starship/list/element/starship.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    ContentComponent,
    StarshipDetailComponent,
    StarshipListComponent,
    StarshipComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    ContentRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    ContentComponent,
    ErrorPageComponent
  ]
})
export class ContentModule { }
