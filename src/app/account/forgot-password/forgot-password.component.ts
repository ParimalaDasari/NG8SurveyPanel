import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isOtpSent = false;
  loading = false;
  forgotForm:FormGroup;

  get f(){
    return this.forgotForm.controls;
  }

  retry(){
    this.forgotForm.reset();
  }
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      email: new FormControl('',[Validators.required,,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      otp : new FormControl('',Validators.required)
    });
  }
  clicked(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZHJhamFzaGVrYXI5NkBnbWFpbC5jb20iLCJuYmYiOjE2Mzg2OTAzOTAsImV4cCI6MTYzODY5MTg5MCwiaWF0IjoxNjM4NjkwMzkwfQ.PFHwk8k-N5BsyK1jpsleoD-Ef6hZRn59qkOps_x0tCCxHI5npvEXmxy9cBms_zb7o6Qju-K9Z1xUjs3QV1B-Vw'
      })
    };
    
    this.http.post<any>('https://localhost:5001/api/Employee/CheckAuthorize',null,httpOptions).subscribe((data)=>{
      console.log(data);
    });
  }

  onSubmit(){
    this.loading=true;

    
  }

}
