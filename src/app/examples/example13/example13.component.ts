import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example13',
  templateUrl: './example13.component.html',
  styleUrls: ['./example13.component.css']
})
export class Example13Component implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private runcdreftemp: ChangeDetectorRef) { }

  empId: string="";
  empIdLen: string="";

  ngOnInit() {
    this.empId = this.activatedRoute.snapshot.paramMap.get("id");
    // this.activatedRoute.paramMap.subscribe((params)=>{
    //   this.empId = params.get("id");
    // });
    console.log("activatedRoute.data",this.activatedRoute.data);
    this.activatedRoute.data.subscribe((param)=>{
      this.empIdLen = param.empIdLen;
    });
  }
  runcdref(){
    this.runcdreftemp.detectChanges();
  }

  setValueInLocalStorage(){
    localStorage.setItem('user','shekar');
  }

  removeValueInLocalStorage(){
    localStorage.removeItem('user');
  }

  getUser():string{
    return localStorage.getItem('user');
  }

}
