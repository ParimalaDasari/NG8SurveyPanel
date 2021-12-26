import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountLoginService } from 'src/app/_services/account-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AccountLoginService ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;

  constructor(private accountService: AccountLoginService, private router: Router) { 
    accountService.checkIfLoggedIn();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
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
    // this.loading=true;

    console.log(this.loginForm);
    
    if(!this.loginForm.valid)
    {
      return;
    }else{
      this.accountService.login(this.loginForm.value);
    }

    

  }

}
