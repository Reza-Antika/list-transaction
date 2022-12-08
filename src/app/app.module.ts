import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { TopNavbarComponent } from './component/top-navbar/top-navbar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MainTransactionComponent } from './main-transaction/main-transaction.component';
import { LoginComponent } from './component/login/login.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { MainProductComponent } from './main-product/main-product.component';
import { BuyPageComponent } from './component/buy-page/buy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopNavbarComponent,
    DashboardComponent,
    MainTransactionComponent,
    LoginComponent,
    TransactionComponent,
    MainDashboardComponent,
    ProductPageComponent,
    MainProductComponent,
    BuyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
