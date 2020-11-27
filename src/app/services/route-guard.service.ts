import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthappService} from './authapp.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private BasicAuth: AuthappService, private route: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.BasicAuth.isLogged()){
      this.route.navigate(["login"]);
      return false;
    }
    else{ return true; }
  }
}
