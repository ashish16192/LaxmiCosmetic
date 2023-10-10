import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginPortalComponent } from './login-portal/login-portal.component';
// import { RegistrationPortalComponent } from './registration-portal/registration-portal.component';


const routes: Routes = [
  // {path:"",component:HomeComponent},
  // {path:"home",component:HomeComponent},
  // {path:"loginportal",component:LoginPortalComponent},
  // {path: "registrationportal",component:RegistrationPortalComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
