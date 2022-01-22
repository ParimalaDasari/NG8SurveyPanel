import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { strictEqual } from 'assert';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-example8',
  templateUrl: './example8.component.html',
  styleUrls: ['./example8.component.css']
})
export class Example8Component implements OnInit {
   
  header = {
    "authority":"dharani.telangana.gov.in",
    "dnt":"1",
    "content-type":"text/plain",
    "x-requested-with":"XMLHttpRequest",
    "sec-ch-ua-mobile":"?0",
    "sec-ch-ua":"\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"97\", \"Chromium\";v=\"97\"",
    "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
    "sec-ch-ua-platform":"Windows",
    "responseType":"text",
    "accept":"*/*",
    "sec-fetch-site":"same-origin",
    "sec-fetch-mode":"cors",
    "sec-fetch-dest":"empty",
    "referer":"https://dharani.telangana.gov.in/knowLandStatus",
    "accept-language":"en-GB,en-US;q=0.9,en;q=0.8"
    };

    htmlData: string[]=[];
    optionsBody: string = "";
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
    // this.getCall();
    
  }

  getCall(){
    this.http.get<any>('url for getting survey numbers',{observe:"response",responseType:'text' as 'json'}).subscribe(data => {
            this.htmlData = data.body.split('<body>');
            this.htmlData = this.htmlData[1].split('</body>');
            console.log(this.htmlData[0]);
            this.optionsBody =  this.htmlData[0];
            this.parseHtmlIntoTags(this.optionsBody.trim());
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
    
    console.log('parsed tagArray',tagArray.slice(1).filter(this.isOptionValue));
  }

  isOptionValue(element, index, array) { 
    if(index>0){
      if(element.indexOf('<')==-1 && element.indexOf('>')==-1){
        return true;
      }
    } 
    return false;
 } 

}
