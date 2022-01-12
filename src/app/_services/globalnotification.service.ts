import { Injectable } from '@angular/core';
import {Subject,Observer} from '../_models/concretes/Testfile';
@Injectable({
  providedIn: 'root'
})
export class GlobalnotificationService {

  constructor() { }
  public firstObserver = new Observer(1);
  public secondObserver = new Observer(2);


  public subject = new Subject();

  runCode(){
    this.subject.subscribe(this.firstObserver);
    this.subject.subscribe(this.secondObserver);
    this.subject.notify();
    
    console.log("-----")
    this.subject.unsubscribe(this.secondObserver);
    this.subject.notify();
  }
  


  
}
