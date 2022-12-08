import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyPageComponent } from './component/buy-page/buy-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';
import { ProductPageComponent } from './component/product-page/product-page.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainTransactionComponent } from './main-transaction/main-transaction.component';

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },
  {
    path:'product-page', component:ProductPageComponent
  },
  {
    path:'main-product', component:MainProductComponent
  },
  {
    path:'main-dashboard', component: MainDashboardComponent
  },
  {
    path:'main-transaction', component: MainTransactionComponent
  },
  {
    path:'dashboard', component: DashboardComponent
  },
  {
    path:'transaction', component: TransactionComponent
  },
  {
    path:'buy-page', component: BuyPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
