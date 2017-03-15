import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import {DividendService} from './Services/dividend.service'
import {StocksplitService} from './Services/stocksplit.service'

import { AppComponent }  from './app.component';
import {DividendComponent} from './Dividend/dividend.component';
import {StockSplitComponent} from './StockSplit/stocksplit.component';
import {HomeComponent} from './Home/home.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule, routing ],
  declarations: [ AppComponent,
                  DividendComponent,
                  StockSplitComponent,
                  HomeComponent],
  bootstrap:    [ AppComponent ],
  providers: [DividendService,StocksplitService]
})
export class AppModule { }
