import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
const routes: Routes = [
  { path: '', component: AccountComponent, children:[
    { path:'', component:LoginComponent},
    {path:'userRegistration',component:UserRegistrationComponent},
  ]  
}    
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
