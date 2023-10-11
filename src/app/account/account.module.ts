import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from './Service/userservice.service';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { SaveUserService } from './user-registration/save-user.service';
@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserserviceService,
    SaveUserService,
  ] 
})
export class AccountModule { }
