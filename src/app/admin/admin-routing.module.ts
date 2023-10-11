import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SaleComponent } from './sale/sale.component';
import { TrialComponent } from './trial/trial.component';
import { ProfileComponent } from './profile/profile.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ReceivePaymentComponent } from './receive-payment/receive-payment.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children:[
    { path:'', component:HomeComponent},
    { path:'home', component:HomeComponent},
    { path:'product', component:ProductComponent},
    { path:'category', component:CategoryComponent},
    { path:'pucchases', component:PurchasesComponent},
    { path:'sales', component:SaleComponent},
    {path:'profile',component:ProfileComponent},
    {path:'billspaid',component:MakePaymentComponent},
    {path:'billsreceive',component:ReceivePaymentComponent},
    {path:'trying',component:TrialComponent}
  ]}  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }