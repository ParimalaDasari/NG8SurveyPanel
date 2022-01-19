import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example7',
  templateUrl: './example7.component.html',
  styleUrls: ['./example7.component.css']
})
export class Example7Component implements OnInit {

  someValue: string;

  constructor() { }

  ngOnInit() {
  }

  valueChanged(val: string){
    this.someValue = val;
  }

}
