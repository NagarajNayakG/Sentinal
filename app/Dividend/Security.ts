export class Security{
    Total_share:number;
    New_share:number;
    New_ISIN:string;
    Price_paid:number;
    Currency:string;
    Rounding:string;
    Pay_Date:Date;
    Response_Deadline_Date:Date;
    Market_Deadline_Date:Date;

    constructor(Total_share:number,New_share:number,New_ISIN:string,Price_paid:number,Currency:string,
    Rounding:string,Pay_Date:Date,Response_Date:Date,Market_Date:Date){
        this.Total_share=Total_share
        this.New_share=New_share;
        this.New_ISIN=New_ISIN;
        this.Price_paid=Price_paid;
        this.Currency=Currency;
        this.Rounding=Rounding;
        this.Pay_Date=Pay_Date;
        this.Response_Deadline_Date=Response_Date;
        this.Market_Deadline_Date=Market_Date;
    }
}