export class Cash{
    Dividend:number;
    Currency:string;
    Pay_Date:Date;
    Response_Deadline_Date:Date;
    Market_Deadline_Date:Date;

    constructor(Dividend:number,Curency:string,Pay_Date:Date,Response_Date:Date,
    Market_Date:Date){
        this.Dividend=Dividend;
        this.Currency=Curency;
        this.Pay_Date=Pay_Date;
        this.Response_Deadline_Date=Response_Date;
        this.Market_Deadline_Date=Market_Date;

    }
}