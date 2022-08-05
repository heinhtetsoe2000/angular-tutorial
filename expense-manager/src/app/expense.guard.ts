import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string): any {
    console.log("Url: " + url)
    let val: string = localStorage.getItem('isUserLoggedIn') || '';

    if (val != null && val == "true") {
      if (url == "/login") this.router.parseUrl('/expenses');
      else return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
