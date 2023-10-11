import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeskBoardRoutingModule } from './desk-board-routing.module';
import { DeskBoardComponent } from './desk-board.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DeskBoardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DeskBoardRoutingModule
  ]
})
export class DeskBoardModule { }
