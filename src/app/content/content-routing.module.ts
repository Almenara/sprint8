import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StarshipListComponent } from './starship/list/starship-list.component';
import { StarshipDetailComponent } from './starship/detail/starship-detail.component';

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
        path: 'login',
        component: LoginComponent
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
