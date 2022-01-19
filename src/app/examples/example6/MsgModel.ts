export class MsgModel{
    
    methodName: string;
    purpose:string;
    timing:string;
    constructor(methodName: string, purpose:string, timing:string){
        this.methodName = methodName;
        this.purpose = purpose;
        this.timing = timing;
    }

}