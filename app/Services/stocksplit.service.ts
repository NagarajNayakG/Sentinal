import { Injectable } from '@angular/core';
import {StockSplit} from '../StockSplit/Stocksplit'
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class StocksplitService{
    private url:any;

    constructor(private _http: Http) {

  }
  SubmitStockSplit(file:File,stocksplit:StockSplit): Observable<string>{
    return Observable.throw("from stocksplit service");
  }

    
}