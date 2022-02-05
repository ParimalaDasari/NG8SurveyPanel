import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable({providedIn: "root"})
export class CanLoadExample implements CanLoad {
  constructor() {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return of(false);
  }
}