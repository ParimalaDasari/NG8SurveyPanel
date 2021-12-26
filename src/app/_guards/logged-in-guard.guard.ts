import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountLoginService } from '../_services/account-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {
  
  constructor(private accountService: AccountLoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = localStorage.getItem('user');
      
      if(user!=null)
        return true;
      
      return false;
  }
  
}
