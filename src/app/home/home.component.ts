import { Component,OnInit } from '@angular/core';
import {LoginService} from '../login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
data:any[]=[];  
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {   
    this.loginService.getDetails().subscribe(response => {
      this.data=response.data;
    });
  }
}
