import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Cash} from '../Dividend/Cash';
import {Security} from '../Dividend/Security';
import {Dividend} from '../Dividend/Dividend';

@Injectable()
export class DividendService{
    private url:any;

    constructor(private _http: Http) {

  }
  SubmitDividend(file:File,dividend:Dividend,cash_option:Cash,security_option:Security): Observable<string>{
    return Observable.throw("from dividend service");
  }

    
}