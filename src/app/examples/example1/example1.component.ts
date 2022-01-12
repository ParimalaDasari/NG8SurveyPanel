import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  boolVariable: boolean;

  constructor() {
    this.boolVariable = (this.employeeList.length!='')?true:false;
   }
  
  employeeList: any = [
    {
      name:'raj',
      rank:1
    },
    {
      name:'shekar',
      rank:2
    },
    {
      name:'prasad a4',
      rank:3
    },
    {
      name:'nish 99',
      rank:4
    },
    {
      name:'shekar reddy b4',
      rank:4
    }
  ];

  // EmpListSize(){
  //   if(this.employeeList.length!=''){
  //     console.log(true);
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  ngOnInit() {
  }

}
