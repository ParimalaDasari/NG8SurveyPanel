import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageModel } from '../example2-pipes/messageModel';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush 
})
export class Example3Component implements OnInit {

  constructor(cdref: ChangeDetectorRef) {
    // cdref.detach();
   }

  @Output() msgEvent = new EventEmitter<MessageModel>();
  @Input() msgReceived;
  simpleForm: FormGroup;

  inputValue: string;

  ngOnInit() {
    this.simpleForm = new FormGroup({
      username: new FormControl('',[Validators.required])
    });
  }

  timer(){
    setInterval(()=>{
      console.log('child');
    },3000);
  }

  sendMessageEvent(){
    this.inputValue = this.simpleForm.value.username;
    this.msgEvent.emit(new MessageModel(this.inputValue));
  }
}
