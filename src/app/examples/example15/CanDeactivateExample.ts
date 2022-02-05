import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { Example15Component } from "./example15.component";

@Injectable({providedIn:'root'})
export class CanDeactivateExample implements CanDeactivate<Example15Component> {
    constructor() {}
  
    canDeactivate(
      component: Example15Component,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState: RouterStateSnapshot
    ): Observable<boolean> {
      return of(true);
    }
  }