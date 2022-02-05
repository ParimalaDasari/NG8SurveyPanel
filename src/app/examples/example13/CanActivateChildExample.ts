import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable({providedIn:"root"})
export class CanActivateChildExample implements CanActivateChild {
  constructor() {}

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return of(true); //return always true // the route is always accessible
  }
}