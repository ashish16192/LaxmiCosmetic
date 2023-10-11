import { Component ,OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  adminTypes: userFromModel[]=[];
  clientType: userFromModel[]=[];
  orderData: saleFromModel[]=[];
  totalProduct:number=0;
  constructor(private profileService:ProfileService){

  }
  getAdminDetails(){
    debugger;
    this.profileService.GetAdmin("Admin").subscribe(response => {
      this.adminTypes = response.data;
      console.log('data',this.adminTypes);
    })}
    getClientDetails(){
      debugger;
      this.profileService.GetClient("Client").subscribe(response => {
        this.clientType = response.data.length; 
        // this.customer= this.clientType.length;
        // console.log('data',this.customer);
        // alert("client"+this.clientType);
        // console.log(this.clientType);
      })}
      totalOrder(){
        debugger;
        this.profileService.GetSaleHistory().subscribe(response => {
          this.orderData = response.data.length;
        })
      }
      totalProducts(){
        debugger;
        this.profileService.GetProduct().subscribe(response => {
          this.totalProduct = response.data.length;
        })
      }
    ngOnInit(): void {
      this.getAdminDetails();
      this.getClientDetails();
      this.totalOrder();
      this. totalProducts();
   }
  }
  export class userFromModel {
    name:string='';   
    gender:string='';   
    contactNo: number=0; 
    email:string=''; 
    dateOfBarth:Date=new Date; 
    address:string='';
    userName:string='';
    password:string='';
    userType:string='';
    profileImage:string='';
  }
  export class saleFromModel{
    saleId:number=0;
    customerId:number=0;
    productId:number=0;
    dateOfSale:Date=new Date;
    quantity:number=0;
    salePrice:number=0;
    totalValue:number=0;
    invNumber:string='';
    }
