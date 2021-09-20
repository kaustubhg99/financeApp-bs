import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { DwbDetailsComponent } from './components/dwb-details/dwb-details.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CurrentTransactionsComponent } from './components/current-transactions/current-transactions.component';
import { AddIncomeComponent } from './components/add-income/add-income.component';
import { AddSpendComponent } from './components/add-spend/add-spend.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    DwbDetailsComponent,
    TransactionsComponent,
    CurrentTransactionsComponent,
    AddIncomeComponent,
    AddSpendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
