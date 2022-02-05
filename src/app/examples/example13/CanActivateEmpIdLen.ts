import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";

@Injectable({ providedIn: 'root' })
export class CanActivateEmpIdLen implements CanActivate {
    constructor() {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> {
      let user =  localStorage.getItem('user');
      
      return (user=="shekar")?of(true):of(false);
    }
  }