import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoggedInUser } from 'src/app/_models/AppUserDto';
import { AccountLoginService } from 'src/app/_services/account-login.service';
import { ConfirmedValidator } from '../validators/ConfirmedValidator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ AccountLoginService ]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  
  constructor(private accountService: AccountLoginService, private http:HttpClient) {
    accountService.checkIfLoggedIn();
   }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      lastName: new FormControl('',[Validators.required,Validators.minLength(4)]),
      mobile: new FormControl('',Validators.required),
      dob: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
      confirmpassword: new FormControl('',[Validators.required,Validators.minLength(6)]),
      agreeToTerms: new FormControl('',Validators.required)
    },{validators: ConfirmedValidator('password','confirmpassword')});
  }
  get f() { return this.form.controls; }
 
  formNotValid() : boolean{
    return !this.form.valid;
  }

  nintynineyears():string{
    var today = new Date();
    today.setFullYear(today.getFullYear()-90);
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return yyyy+'-'+mm+'-'+dd; 
  }

  todaysDate():string{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return yyyy+'-'+mm+'-'+dd; 
  }

  onSubmit() {
    console.log(this.f);
    console.log(this.form.value);
    this.submitted = true;


    if (this.form.invalid) {
        return;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    // this.loading = true;
    this.accountService.register(JSON.stringify(this.form.value));
    return
}
}
