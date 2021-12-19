import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  user: SocialUser | null; 
  
//comment

  constructor(private authService: SocialAuthService) { 
    this.user = null;
    this.authService.authState.subscribe((user: SocialUser) => {
      console.log(user);
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((x: any) => console.log(x));
  }

  signOut(): void {
    this.authService.signOut();
  } 

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('',Validators.required)
    });
  }

  get f(){
    return this.loginForm.controls;
  }

  formNotValid() : boolean {
    return !this.loginForm.valid;
  }

  onSubmit(){
    this.loading=true;

    console.log(this.loginForm);
    
    if(!this.loginForm.valid)
    return;

    

  }

}
