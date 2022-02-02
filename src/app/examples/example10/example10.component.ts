import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LandDocumentModel } from '../example9/LandDocumentModel';
import { LandModel } from './LandRecordMode';

@Component({
  selector: 'app-example10',
  templateUrl: './example10.component.html',
  styleUrls: ['./example10.component.css']
})
export class Example10Component implements OnInit {

  output = new LandDocumentModel("","","");
  docList: LandDocumentModel[] =[];
  htmlData: any;
  optionsBody: any;
  LandParsedModel: LandModel=new LandModel("","","","","","","","","","","","","","","");


  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getSampleLandData("");
    
  }
  populateData(){
    this.getAllLandRecords();
  }

  getAllLandRecords(){
    this.http.get<LandDocumentModel[]>('https://localhost:5001/api/land/GetLandDocuments').subscribe((data)=>{
      this.docList = data;
      this.docList.forEach(ele=>{
        this.parseLandDocument(ele);
        // console.log(ele.documentHtml);
      })
    },
    err=>{
      console.log(err);
    });
  }

  parseLandDocument(data){
    // this.http.get<LandDocumentModel>('https://localhost:5001/api/land/GetDummyLandRecord').subscribe(data=>{
      
      this.output = data;
      data.documentHtml = data.documentHtml.replace(/(\r\n|\n|\r|\t)/gm, '');
      this.htmlData = data.documentHtml.trim().split('<body>')[1].split('</body>');
      // console.log(this.htmlData[0]);
      this.optionsBody =  this.htmlData[0];
      console.log(this.optionsBody);
      this.parseHtmlIntoTags(this.optionsBody);
      
    // });
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
          if(html.substring(x3,x1)!='' && html.substring(x3,x1)!=' ')
          tagArray.push(html.substring(x3,x1));
        }
        if(html.substring(x1,x2)!='' && html.substring(x1,x2)!=' ')
        tagArray.push(html.substring(x1,x2));
        //reset x1 and x2
    
        x1=0;
        x3=x2;
        x2=0;
        
      }
       
    }
    let finalValues = [];
    tagArray = tagArray.filter(this.isOptionValue).slice(1);
    tagArray.splice(6,1);
    // tagArray.forEach((ele,i)=>{
    //   if(i%2!=0)
    //   finalValues.push(ele);
    // });

    for(var i=1;i<tagArray.length;i=i+2){
      finalValues.push(tagArray[i]);
    }

    // let strObj = finalValues.jo  

    console.log('finalValues',finalValues);

    console.log('parsed tagArray',tagArray);
    let LandParsedModel = new LandModel(finalValues[0],finalValues[1],finalValues[2],finalValues[3],finalValues[4],finalValues[5],finalValues[6],finalValues[7],finalValues[8],finalValues[9],finalValues[10],finalValues[11],finalValues[12],finalValues[13],finalValues[14]);
    // console.log(LandParsedModel);
    this.http.post('https://localhost:5001/api/land/SaveLandRecord',LandParsedModel).subscribe(data=>{
      console.log('saved successfully');
      
    },err=>{
      console.log('error while saving');
    });
  }

  isOptionValue(element, index, array) { 
    if(index>0){
      if(element.indexOf('<')==-1 && element.indexOf('>')==-1 && element.indexOf(' ')!==1){
        return true;
      }
    } 
    return false;
  } 


}
