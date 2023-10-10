import { Component } from '@angular/core';
import {LoginService} from './login.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any ;
  constructor (private loginservice:LoginService){}
  ngOnInit():void{
    this.loginservice.getDetails().subscribe(response =>{
      this.data=response;
    });
  }

}
  
  

