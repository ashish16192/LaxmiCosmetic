import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskBoardComponent } from './desk-board.component';

const routes: Routes =[
  {path: '', component: DeskBoardComponent,children:[
  {path:'deskBoard',component: DeskBoardComponent},
  ] }]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeskBoardRoutingModule { }
