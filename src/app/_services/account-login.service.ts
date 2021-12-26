import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';
import { LoggedInUser } from '../_models/AppUserDto';

@Injectable({
  providedIn: 'root'
})
export class AccountLoginService {
  
  private currentUserSource = new ReplaySubject<LoggedInUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { 
    let user = localStorage.getItem('user');
    if(user!=null){
      this.currentUserSource.next(JSON.parse(user));
    }
  }
  
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  register(registerFormData:any){
     this.http.post<any>('https://localhost:5001/api/Account/register',registerFormData,this.httpOptions).subscribe((data)=>{
      localStorage.setItem('user',JSON.stringify(data));
      this.currentUserSource.next(data);
      this.router.navigate(['/']);
    });
  }

  login(loginFormData: any){
    this.http.post<any>('https://localhost:5001/api/Account/login',loginFormData,this.httpOptions).subscribe((data)=>{
      localStorage.setItem('user',JSON.stringify(data));
      this.currentUserSource.next(data);
      this.router.navigate(['/']);
    });
  }

  checkIfLoggedIn(){
    this.currentUser$.subscribe(user=>{
      if(user!=null){
        this.router.navigate(['/']);
      }
    });
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

}
