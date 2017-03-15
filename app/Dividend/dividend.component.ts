import { Component } from '@angular/core';
import {Cash} from '../Dividend/Cash';
import {Security} from '../Dividend/Security';
import {Dividend} from '../Dividend/Dividend';
import {DividendService} from '../Services/dividend.service'


@Component({
  selector: 'dividend',
  templateUrl: './app/Dividend/dividend.component.html'
})
export class DividendComponent  { 
  public dividend :Dividend;
  public cash_option :Cash;
  public security_option :Security;

  file : File;

  constructor(private _dividend: DividendService ){
    
  }

  ngOnInit() {
    this.dividend= new Dividend("","","","",null,null);
    this.cash_option= new Cash(null,"",null,null,null);
    this.security_option = new Security(null,null,"",null,"","",null,null,null);
  }

  onChange(event : EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
  }

  
 submit(){
   this._dividend.SubmitDividend(this.file,this.dividend,this.cash_option,this.security_option)
   .subscribe(response =>{

   },error=>{

   });
  }
  
}
