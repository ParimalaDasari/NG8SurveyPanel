import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component implements OnInit,OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked,AfterViewChecked {

  placeHolder: string[]=[];
  inputVar: string = "";
  
  constructor() { 
    this.logit('constructor ran');
  }

  ngOnInit() {
    this.logit('ngOnInit ran');
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('EXTRA :',changes);
    this.logit('ngOnChanges ran');
  }

  ngDoCheck(): void {
    this.logit('ngDoCheck ran');
  }
  
  ngAfterContentInit(): void {
    this.logit('ngAfterContentInit ran');
  }

  ngAfterContentChecked(): void {
    this.logit('ngAfterContentChecked ran');
  }

  ngAfterViewInit(): void {
    this.logit('ngAfterViewInit ran');
  }
  
  ngAfterViewChecked(): void {
    this.logit('ngAfterViewChecked ran');
  }
  ngOnDestroy() {
    this.logit('ngOnDestroy ran');
  }

  logit(msg: string){
    this.placeHolder.push(msg);
    console.log(msg);
  }

}
