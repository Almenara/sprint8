import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './starship/list/starship-list.component';
import { StarshipList } from './starship/starship-list.interface';
import { StarshipDetailComponent } from './starship/detail/starship-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContentComponent } from './content.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        redirectTo: ''
      },
      {
        path: 'starships',
        component: StarshipListComponent
      },
      {
        path: 'starships/:id',
        component: StarshipDetailComponent
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
