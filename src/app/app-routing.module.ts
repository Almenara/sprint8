
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './content/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./content/content.module').then( m => m.ContentModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
