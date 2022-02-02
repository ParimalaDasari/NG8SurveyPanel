import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { alphabetContainerModel } from './alphabetContanerModel';

@Component({
  selector: 'app-example12',
  templateUrl: './example12.component.html',
  styleUrls: ['./example12.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Example12Component implements OnInit {

  constructor(private cdref: ChangeDetectorRef) { }

  // strList:string[] = ['a','b','c','d','e','f','g','h'];
  // strList:alphabetContainerModel[] = [new alphabetContainerModel('a'),new alphabetContainerModel('b'),new alphabetContainerModel('c')]

  sampleText:alphabetContainerModel = new alphabetContainerModel("shekar");

  ngOnInit() {
    // setInterval(()=>{
    //   // this.strList.push('z');
    //   this.strList.push(new alphabetContainerModel('z'));
    // },2000);
  }

  runCdref(){
    this.sampleText.alphabet = this.sampleText.alphabet+" 1";
    this.cdref.detectChanges();
    console.log('');
  }

}
