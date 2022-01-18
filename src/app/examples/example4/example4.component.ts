import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Example4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // timer(){
  //   setInterval(()=>{
  //     console.log('parent');
  //   },3000);
  // }
}
