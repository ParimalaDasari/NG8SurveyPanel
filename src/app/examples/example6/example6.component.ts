import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MsgModel } from './MsgModel';

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component implements OnInit,OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked,AfterViewChecked {

  placeHolder: MsgModel[]=[];
  @Input()
  inputVar: string = "";
  
  @Input()
  inputVar2: string = "";

  constructor() { 
    let msg = new MsgModel('Constructor','constructor for initialising class variables and injecting dependencies','first thing to run in component/class');
    this.logit(msg);
  }

  setInputValue(html:any){
    // this.inputVar = html;
    let msg = new MsgModel('','','');
    console.log(html);
  }
  resetArray(){
    this.placeHolder = [];
  }

  ngOnInit() {
    let msg = new MsgModel('ngOnInit','Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component\'s input properties. See details in Initializing a component or directive in this document.','Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not (which is the case when there are no template-bound inputs).');
    this.logit(msg);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('EXTRA :',changes);
    let msg = new MsgModel('ngOnChanges','Note that this happens very frequently, so any operation you perform here impacts performance significantly. See details in Using change detection hooks in this document.','Called before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change. Note that if your component has no inputs or you use it without providing any inputs, the framework will not call ngOnChanges().');
    this.logit(msg);
  }

  ngDoCheck(): void {
    let msg = new MsgModel('ngDoCheck','Detect and act upon changes that Angular can\'t or won\'t detect on its own.','Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.');
    this.logit(msg);
  }
  
  ngAfterContentInit(): void {
    let msg = new MsgModel('ngAfterContentInit','Respond after Angular projects external content into the component\'s view, or into the view that a directive is in.','Called once after the first ngDoCheck().');
    this.logit(msg);
  }

  ngAfterContentChecked(): void {
    let msg = new MsgModel('ngAfterContentChecked','Respond after Angular checks the content projected into the directive or component.','Called after ngAfterContentInit() and every subsequent ngDoCheck().');
    this.logit(msg);
  }

  ngAfterViewInit(): void {
    let msg = new MsgModel('ngAfterViewInit','Respond after Angular initializes the component\'s views and child views, or the view that contains the directive.','Called once after the first ngAfterContentChecked().');
    this.logit(msg);
  }
  
  ngAfterViewChecked(): void {
    let msg = new MsgModel('ngAfterViewChecked','Respond after Angular checks the component\'s views and child views, or the view that contains the directive.','Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().');
    this.logit(msg);
  }
  ngOnDestroy() {
    let msg = new MsgModel('ngOnDestroy','Cleanup just before Angular destroys the directive or component. Unsubscribe Observables and detach event handlers to avoid memory leaks.','Called immediately before Angular destroys the directive or component.');
    this.logit(msg);
  }

  logit(msg: MsgModel){
    this.placeHolder.push(msg);
    console.log(msg.methodName);
  }

}
