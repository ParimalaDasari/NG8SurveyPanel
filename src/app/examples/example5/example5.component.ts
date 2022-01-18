import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example5Component implements OnInit {

  cdref:ChangeDetectorRef;
  constructor(cdref:ChangeDetectorRef) {
    this.cdref = cdref;
   }

  someValue: any = "";

  ngOnInit() {
    setInterval(()=>{
      this.someValue = Math.random();
      console.log(this.someValue);
    },2000);
  }
  //  timer(){
  //   setInterval(()=>{
  //     console.log('child');
  //   },3000);
  // }

  detectChanges(){
    this.cdref.detectChanges();
  }
}
