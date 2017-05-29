import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route,
  CanActivate, CanActivateChild, CanLoad
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CustomerApi } from './../sdk/services/custom/Customer';
import { LoopBackAuth } from './../sdk/services/core/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private customerApi: CustomerApi,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('In canActivate: ' + state.url);
    return this.checkLoggedIn(state.url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    console.log('In canActivateChild: ' + state.url);
    return this.checkLoggedIn(state.url);
  }

  canLoad(route: Route): Observable<boolean> {
    console.log('In canLoad: ' + route.path);
    return this.checkLoggedIn(route.path);
  }

  checkLoggedIn(url: string): Observable<boolean> {
    return this.customerApi.getCurrent()
      .map(result => { return true })
      .catch(error => {
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }
}
