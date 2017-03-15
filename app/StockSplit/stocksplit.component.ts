import { Component,OnInit } from '@angular/core';
import {StockSplit} from '../StockSplit/Stocksplit';
import {StocksplitService} from '../Services/stocksplit.service'

@Component({
  selector: 'stocksplit',
  templateUrl: './app/StockSplit/stocksplit.component.html'
})
export class StockSplitComponent implements OnInit { 
  public stocksplit :StockSplit;
  file : File;

  constructor(private _stocksplit: StocksplitService ){
    
  }

  ngOnInit() {
    this.stocksplit= new StockSplit("","","",null,null,null,null,null,null,"");

  }

  onChange(event : EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];

  }
  
 submit(){
   this._stocksplit.SubmitStockSplit(this.file,this.stocksplit)
   .subscribe(response =>{

   },error=>{

   });
 }
  
}
