import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let fullpath = route.url.reduce((path, currentSegment) => {
        return `${path}/${currentSegment.path}`;
      }, '');
    
    return this.isLoged(fullpath);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const fullpath = segments.reduce((path, currentSegment) => {
        return `${path}/${currentSegment.path}`;
      }, '');
    
      return this.isLoged(fullpath);
  }

  isLoged(path: String ){
    //console.log(this.router)
    if(this.authService.auth.id){
      return  true 
    }
    if(path != "/login" && path != "/register"){
      this.authService.redirect = path;
    }
    return this.router.parseUrl("/login");
  }
}
