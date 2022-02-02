import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LandModel } from '../example10/LandRecordMode';

@Component({
  selector: 'app-example11',
  templateUrl: './example11.component.html',
  styleUrls: ['./example11.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class Example11Component implements OnInit {

  surveyNames: surveyFilter[]=[];
  inpFieldValue: string = "";

  constructor(private http: HttpClient, private cdref: ChangeDetectorRef) { }

  LandRecords:string[] =[]
  ngOnInit() {
    this.getUniqueSurveyNames();
  }

  getUniqueSurveyNames(){
    this.http.get<surveyFilter[]>('https://localhost:5001/api/land/GetUniqueRecords').subscribe(data=>{
      this.surveyNames = data;
    },
    err=>{
        console.log('error');
    });
  }

  getData(inpText){
    console.log(inpText);
    this.http.post<string[]>('https://localhost:5001/api/land/GetLandRecord',new surveyFilter(inpText)).subscribe(data=>{
      this.LandRecords = data;
      console.log(this.LandRecords);
      this.cdref.detectChanges();
    },err=>{
      this.LandRecords = [];
      console.log(err);
    });
  }
  ccd(ele: string){
    this.inpFieldValue = ele;
    console.log(ele);
  }

}

export class surveyFilter{
  public pattadharName: string;

  constructor(pattadharName: string) {
    this.pattadharName = pattadharName
  }

}
