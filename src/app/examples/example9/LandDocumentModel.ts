export class LandDocumentModel{
    surveyNumber: string;
    khataNumber: string;
    documentHtml: string;
    id:number;
    constructor(surveyNumber:string , khataNumber:string, documentHtml:string){
        this.surveyNumber = surveyNumber;
        this.khataNumber = khataNumber;
        this.documentHtml = documentHtml;
    }
}