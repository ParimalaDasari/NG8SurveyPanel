import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";

@Injectable({ providedIn: 'root' })
export class HeroResolver implements Resolve<string> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> {
    return of("The length of the empId is :"+route.paramMap.get('id').toString().length);
  }
}