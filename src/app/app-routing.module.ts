import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
  { path: 'deskBoard', loadChildren: () => import('./desk-board/desk-board.module').then(m => m.DeskBoardModule) }]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
