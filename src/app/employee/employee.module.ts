import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ProductComponent } from './product/product.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SaleComponent } from './sale/sale.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    ProductComponent,
    PurchasesComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
