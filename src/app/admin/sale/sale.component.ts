import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SalesService } from './sales.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  userTypes: any[]=[];
  userData:FormModel[]=[];
  status:any;
  sale:any={
    name:"",
    clientId:0 , 
    contactNo:"", 
    address:""
  }
  value:any[]=[];
  dataForm: FormGroup;
  Prooductdata: any;
  isClientSelected = false;
  CustomerNotMatch=false;
  selectedOption: string = 'none'; 
  isCheckboxVisible: boolean = false; 
  selectedVendorDetails: any;
  selectedVendor: any;
  constructor(private formBuilder: FormBuilder,private userSaleService: SalesService, private toastr:ToastrService) { 
    this.dataForm = this.formBuilder.group({    
      products: this.formBuilder.array([])
    });
  }
  ngOnInit(): void {
    
}
createProductFormGroup(): FormGroup {
  return this.formBuilder.group({
    productid: 0,
    quantity: 0
  });
}
getClientDetails(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  const value = inputElement.value;
  if (value.length === 10) {
    //console.log('Maxlength reached. Value:', value);
    this.userSaleService.GetClient(value).subscribe(
      response => {
        this.status=response.statusCode;
        if(this.status==200){
          this.userTypes = response.data;
          this.isClientSelected = true;
          this.fillCustomerData();
        }
        else{
          alert("Customer Not Found");
          this.CustomerNotMatch = true;
          this.cashInvoice();
        }
    }, );
  }
}
fillCustomerData() {
  console. log(this.userData.length)
  if (this.userTypes.length >= 0) {
      const selectedItem = this.userTypes[0];  
      this.sale.name = selectedItem.name;
      this.sale.clientId = selectedItem.user_Id;
      this.sale.contactNo = selectedItem.contactNo;
      this.sale.address = selectedItem.address;
      this.getAllProducts();
    }
    else{
      alert("something went wrong");
    }
  } 
  cashInvoice() {
    console. log(this.userData.length)
    if (this.userTypes.length >= 0) {
        const selectedItem = this.userTypes[0];  
        this.sale.name = "Mrs Cash Sale";
        this.sale.clientId = 2004;
        this.sale.contactNo = this.value;
        this.sale.address = "Counter Sale";
        this.getAllProducts();
      }
      else{
        alert("something went wrong");
      }
    } 

  getAllProducts(){
    debugger
    this.userSaleService.GetProduct().subscribe(response => {
      this.Prooductdata = response.data; 
      console.log('data',this.Prooductdata);
      this.isClientSelected = true;
    })}
addNewProduct() {
  const products = this.dataForm.get('products') as FormArray;
  products.push(this.createProductFormGroup());
}
get products() {
  return this.dataForm.get('products') as FormArray;
}
onSubmit() {
  debugger;
  if (this.dataForm.valid) {
    const formData = {
      customerId: this.sale.clientId,
      saleDetails: this.products.value
    };
    this.userSaleService.AddPurchases(formData).subscribe(response => {
      this.toastr.success('Sale added successfully','Success');
      this.sale.vendorid=0      
    })
    console.log(formData); 
  }
}
}

export class FormModel {
  clientId:any;   
    constructor(){
      this.clientId=0;
}
}