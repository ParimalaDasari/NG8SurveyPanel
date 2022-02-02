import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LandDocumentModel } from './LandDocumentModel';
import { SurveyNumberModel } from './SurveyNumberModel';

@Component({
  selector: 'app-example9',
  templateUrl: './example9.component.html',
  styleUrls: ['./example9.component.css']
})
export class Example9Component implements OnInit {

  htmlData: string[]=[];
  optionsBody: string = "";
  khataNumber:string = "";

  constructor(public http: HttpClient) { }
  finalSurveyNumberList :any= [];

  ngOnInit() {
    this.GetSurveyNumbers();
  }
  
  GetSurveyNumbers(){
    this.http.get<SurveyNumberModel>('https://localhost:5001/api/land/GetSurveyNumbers').subscribe(data=>{
      this.finalSurveyNumberList = data;
      console.log(data);
      for(var i=0;i<this.finalSurveyNumberList.length;i++){
        this.getKhataNumber(this.finalSurveyNumberList[i].surveyNumber);
      }
      
      
    });
  }

  getKhataNumber(surveyNumber: string){
    this.http.get<any>("https:// domain /getKhataNoCitizen?villId=3003014&flag=khatanos&surveyNo="+surveyNumber,{observe:"response",responseType:'text' as 'json'}).subscribe(data => {
            this.htmlData = data.body.split('<body>');
            this.htmlData = this.htmlData[1].split('</body>');
            // console.log(this.htmlData[0]);
            this.optionsBody =  this.htmlData[0];
            this.parseHtmlIntoTags(this.optionsBody.trim());
            this.getLandRecords(surveyNumber,this.khataNumber);
        },
        (error)=>{console.log('error',error)},
        ()=>{
        }
        )
    
  }

  parseHtmlIntoTags(html: string){
  
    html = html.replace(/(\r\n|\n|\r|\t)/gm, '');
    html = html.trim();
    let tagArray =[];
    let x1=0,x2=0,x3=0;

    for(var i=0;i<html.length;i++){
      if(html.charAt(i)=='<')
        x1=i;
      if(html.charAt(i)=='>'){
        x2=i+1;
        //substring into an array
        if(x1!=0){
          if(html.substring(x3,x1)!='')
          tagArray.push(html.substring(x3,x1));
        }
        if(html.substring(x1,x2)!='')
        tagArray.push(html.substring(x1,x2));
        //reset x1 and x2
    
        x1=0;
        x3=x2;
        x2=0;
        
      }
       
    }
    this.khataNumber = tagArray.slice(1).filter(this.isOptionValue)[0];
    // console.log('parsed tagArray',finalSNList);
    
  }

  isOptionValue(element, index, array) { 
    if(index>0){
      if(element.indexOf('<')==-1 && element.indexOf('>')==-1){
        return true;
      }
    } 
    return false;
  } 


  ////////Get the land record for survey number and khata number
  getLandRecords(surveyNumber : string, khataNumber : string){
    
    this.http.get<any>("https:// domain /getPublicDataInfo?villageId=3003014&flagToSearch=surveynumber&searchData="+surveyNumber+"&flagval=district&district=30&mandal=584&divi=&khataNoIdselect="+khataNumber+"&ReqType=Citizen",{observe:"response",responseType:'text' as 'json'}).subscribe(data => {
            this.http.post('https://localhost:5001/api/land/SaveLandDocument',new LandDocumentModel(surveyNumber,khataNumber,data.body.trim())).subscribe((data)=>{
              console.log('saved ',surveyNumber);
            },
            err=>{
              console.log('error');
            });
          // console.log(new LandDocumentModel(surveyNumber,khataNumber,data.body.trim()));
        },
        (error)=>{console.log('error',error)},
        ()=>{
        }
        )
    
  
  }

}
