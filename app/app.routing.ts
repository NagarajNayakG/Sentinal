import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DividendComponent} from './Dividend/dividend.component';
import {StockSplitComponent} from './StockSplit/stocksplit.component';
import {HomeComponent} from './Home/home.component'


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dividend', component:DividendComponent},
    { path: 'stocksplit', component:StockSplitComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);