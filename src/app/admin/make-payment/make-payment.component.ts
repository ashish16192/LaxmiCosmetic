import { Component, OnInit } from '@angular/core';
import { MakepayService } from './makepay.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent implements OnInit {
  userTypes: any[]=[];
  venId:any[]=[];
  purchas:any={
    vendorid:0   
  }
  dataForm: FormGroup;
  data: any;
  isVendorSelected = false;
  selectedOption: string = 'none'; 
  isCheckboxVisible: boolean = false; 
  selectedVendorDetails: any;
  selectedVendor: any;
  constructor(private formBuilder: FormBuilder,private makepay: MakepayService, private toastr:ToastrService) { 
    this.dataForm = this.formBuilder.group({    
      products: this.formBuilder.array([])
    });
  }
  ngOnInit(): void {
   this.getVendor();  
}
createProductFormGroup(): FormGroup {
  return this.formBuilder.group({
    productid: 0,
    quantity: 0,
    price: 0
  });
}
getVendor(){
  // this.makepay.GetVendor("vendor").subscribe(response => {
  //   this.userTypes = response.data; 
  //   console.log('data',this.userTypes);
  // })
}
  getVendorProducts(venId:number){
    // debugger
    // this.makepay.GetProduct(venId).subscribe(response => {
    //   this.data = response.data; 
    //   console.log('data',this.data);
    //   this.isVendorSelected = true;
    // })}
//     getVendorProduct(VenID:number){
//       debugger;
//       this.userPurchasService.getVendorDetails(VenID).subscribe(response=> {
//       this.productData=response.data
//   })
// }
// addNewProduct() {
//   // const products = this.dataForm.get('products') as FormArray;
//   // products.push(this.createProductFormGroup());
// }
// addNewProduct() {
//   const products = this.dataForm.get('products') as FormArray;
//   products.push(this.formBuilder.group({
//    // vendorid: [this.data, Validators.required],
//   //  productid: 0, 
//   //  quantity: 0,
//   //  price: 0
//   }));
// }
// get products() {
//   return this.dataForm.get('products') as FormArray;
// }

// addProduct() {
//   this.products.push(
//     this.formBuilder.group({
//       productid: [0, Validators.required],
//       quantity: [0, Validators.required],
//       price: [0, Validators.required],
//     })
//   );
// }
// onSubmit() {
//   debugger;
//   if (this.dataForm.valid) {
//     const formData = {
//       vendorid: this.purchas.vendorid,
//       purchaseDetailsObj: this.products.value
//     };
//     this.makepay.AddPurchases(formData).subscribe(response => {
//       this.toastr.success('Purchase added successfully','Success');
//       this.purchas.vendorid=0      
//     })
//    // const formData = this.dataForm.value;
//     console.log(formData); 
//   }
}

}