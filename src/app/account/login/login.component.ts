import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../Service/userservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{ 
 
  public data:any;
  constructor(private userservice : UserserviceService,private router: Router) { }

  ngOnInit(): void {
    this.data="test";
    var utype=localStorage.getItem("userType");
    if(utype=="Admin")
    {
      this.router.navigate( ['/admin']);
    }
  }
  submitted=false;
  formModel: FormModel= new FormModel();
  saveNameForm(formModel:any){
    this.submitted = true;
    console.log(formModel);
    this.userservice.UserLogin(formModel).subscribe((result: any) => {          
      console.log(result,"result"); 
      if(result.statusCode==200)
      { debugger;
          if(result.data[0].userType=="Admin")
          {
            debugger;
            localStorage.setItem("userType", "Admin");
            this.router.navigate( ['/admin']);
          }
          else if (result.data[0].userType=="Employee")
          {
            localStorage.setItem("userType","Employee");
            this.router.navigate(['/employee']);
          }
          else if (result.data[0].userType=="Client")
          {
            localStorage.setItem("userType","Client");
            this.router.navigate(['/deskBoard'])
          }
      }
      else
      {
        alert("Incorrect UserName Password");
      }
  });
  }
}
export class FormModel {
  userName!: string;
  password:string | undefined;
 }
 