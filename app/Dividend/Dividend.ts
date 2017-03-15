export class Dividend{
    COAF_Ref:string;
    Choice:string;
    Info :string;
    ISIN :string;
    Ex_Date:Date;
    Record_Date:Date;
    
    constructor(COAF:string,Choice:string,Info:string,ISIN:string,Ex_Date:Date,Record_Date:Date)
    {
        this.COAF_Ref=COAF;
        this.Choice=Choice;
        this.Info =Info;
        this.ISIN =ISIN;
        this.Ex_Date=Ex_Date;
        this.Record_Date=Record_Date;
        
    }
}