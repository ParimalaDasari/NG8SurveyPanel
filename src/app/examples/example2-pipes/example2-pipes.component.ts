import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { MessageModel } from './messageModel';

@Component({
  selector: 'app-example2-pipes',
  templateUrl: './example2-pipes.component.html',
  styleUrls: ['./example2-pipes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush //default ..without this line it would be ChangeDetectionStrategy.Default
})
export class Example2PipesComponent implements OnInit {

  constructor(cdref: ChangeDetectorRef) {
    
  }

  msgReceivedFromChildComp: any;
  listOfMsgsReceivedFromChild: MessageModel[] = [];

  ngOnInit() {
  }

  receiveEventFromChild($event){
    this.msgReceivedFromChildComp = $event;
    this.listOfMsgsReceivedFromChild.push($event);
    console.log($event);
  }

  timer(){
    setInterval(()=>{
      console.log('parent');
    },3000);
  }

}
//https://www.toptal.com/angular/angular-change-detection
//change detection happens from root to bottom childs. So if you stop detecting on parent we shouldnt expect to check changes on child
// A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe.

// An impure pipe is called for every change detection cycle no matter whether the value or parameter(s) changes.

// This is relevant for changes that are not detected by Angular

// when you pass an array or object that got the content changed (but is still the same instance)
// when the pipe injects a service to get access to other values, Angular doesn't recognize if they have changed.
// In these cases you probably still want the pipe to be executed.

// You should be aware that impure pipes are prone to be inefficient. For example when an array is passed into the pipe to filter, sort, ... then this work might be done every time change detection runs (which is quite often especially with the default ChangeDetectionStrategy setting) event though the array might not even have changed. Your pipe should try to recognize this and for example return cached results.