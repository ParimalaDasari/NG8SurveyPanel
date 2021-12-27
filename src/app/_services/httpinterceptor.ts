import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AccountLoginService } from './account-login.service';
import { Router } from '@angular/router';



@Injectable()
export class httpInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountLoginService, private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse) {
			   if(err.status === 401) {
					// auto logout if 401 response returned from api
					this.accountService.logout();
					console.log('Please login again');
                    this.router.navigate(['/account/login']);
				} else {
					const error = err.error.message || err.statusText;
                    console.log(error);
					return throwError(error);
				}
            }
        }
        ));
    }

}