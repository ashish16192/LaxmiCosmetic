import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ProductComponent } from './product/product.component';
import { RegistrationComponent } from './registration/registration.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { SaleComponent } from './sale/sale.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductDataService } from './product/product-data.service';
import { CategoryComponent } from './category/category.component';
import { CategoryserviceService } from './category/categoryservice.service';
import { PurchaseService } from './purchases/purchase.service';
import { TryingService } from './trial/trying.service';
import { TrialComponent } from './trial/trial.component';
import { SalesService } from './sale/sales.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { MakePaymentComponent } from './make-payment/make-payment.component';
import { ReceivePaymentComponent } from './receive-payment/receive-payment.component';
import { MakepayService } from './make-payment/makepay.service';
import { ReceiveService } from './receive-payment/receive.service';


@NgModule({
  declarations: [
    AdminComponent,
    ProductComponent,
    RegistrationComponent,
    PurchasesComponent,
    SaleComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CategoryComponent,
    TrialComponent,
    ProfileComponent,
    MakePaymentComponent,
    ReceivePaymentComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [
    ProductDataService,
    CategoryserviceService, 
    PurchaseService,
    SalesService,
    TryingService,
    MakepayService,
    ReceiveService,
    ProfileService
  ]
 
})
export class AdminModule { }
