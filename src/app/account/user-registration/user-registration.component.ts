import { Component } from '@angular/core';
import { SaveUserService } from './save-user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  inputData: inputFormModel= new inputFormModel();
  
constructor (private saveUserService:SaveUserService){

}
saveUser(){
  debugger;
  console.log(this.inputData);
  // this.onFileSelected
  //this.inputData.isReturnable=(this.inputData.isReturnable=='true'?true:false);
  this.saveUserService.AddUser(this.inputData).subscribe(response=>
    {   
       alert('Record saved Successfully');
  },
  error => {     
    console.error('Error adding product:', error);
  } );

}
onFileSelected(event:any){
  const file = event.target.files[0];
  const reader = new FileReader();
  debugger;
  reader.onload = (e: any) => {       
    const base64Image = e.target.result;        
    this.inputData.profileImage=base64Image;
  };
  
  reader.readAsDataURL(file);
}
}
 export class inputFormModel {

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

