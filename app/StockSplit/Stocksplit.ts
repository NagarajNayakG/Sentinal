export class StockSplit{
    COAF_Ref:string;
    Info :string;
    ISIN :string;
    Ex_Date:Date;
    Record_Date:Date;
    Pay_Date:Date;
    Available_Date:Date;
    Split_Rate_Old:number;
    Split_Rate_New:number;
    New_ISIN:string;

    constructor(COAF:string,Info:string,ISIN:string,Ex_Date:Date,Record_Date:Date,
    Pay_Date:Date,Available_Date:Date,Split_Rate_Old:number,Split_Rate_New:number,New_ISIN:string){
        this.COAF_Ref=COAF;
        this.Info =Info;
        this.ISIN =ISIN;
        this.Ex_Date=Ex_Date;
        this.Record_Date=Record_Date;
        this.Pay_Date=Pay_Date;
        this.Available_Date=Available_Date;
        this.Split_Rate_Old=Split_Rate_Old;
        this.Split_Rate_New=Split_Rate_New;
        this.New_ISIN=New_ISIN;
    }
}