import { Component } from '@angular/core';
import { ProductDataService} from './product-data.service';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  data:any[]=[];
  category:any[]=[];
  productList:FormModel[]=[];
  editData:any={};
  inputData :any={
    p_Id:0,
    parentId:0,
    name:'',
    mrp:0,
    brand:'',
    isReturnable:Boolean,
    productImage:''
  } 
  deleteProductId:any={
    p_Id:0,
  };
  constructor (private prodataser:ProductDataService){}
  getProductDetails(){
    this.prodataser.GetProduct().subscribe(response => {
      this.data=response.data;
    });
    this.prodataser.GetCategoryId().subscribe(response=> {
      this.category=response.data;
    });
  }
  saveProduct(){
    this.onFileSelected
    //this.inputData.isReturnable=(this.inputData.isReturnable=='true'?true:false);
    this.prodataser.AddProduct(this.inputData).subscribe(response=>
      {   
         this.inputData.parentId=0,
         this.inputData.name='',
         this.inputData.mrp=0,
         this.inputData.isReturnable=false,
         this.inputData.productImage='',
         this.inputData.brand=''
         this.inputData.isReturnable=0
         alert('Record saved Successfully');
        this.getProductDetails();
    },
    error => {     
      console.error('Error adding product:', error);
    } );
    
}
// deleteProduct1(j:any  )
// {
// console.log(j);
// }
DeleteProduct(p_Id:string){
  debugger;
  if(confirm("Are you sure to delete "+p_Id)){

    this.prodataser.ProductDelete(p_Id)
    .subscribe((response:any)=>{
      
      if(response.statusCode==200)
    {
      alert('Record Deleted Successfully'); 
    }
    this.getProductDetails();
    
  })
 
}
  }
editClick(index: number) {
  debugger;
  console. log(this.productList.length)
  
  if (index >= 0 && index < this.data.length) {
      const selectedItem = this.data[index];  
      this.inputData.p_Id = selectedItem.p_Id;
      this.inputData.name = selectedItem.name;
      this.inputData.parentId = selectedItem.parentId;
      this.inputData.mrp = selectedItem.mrp;
      this.inputData.isReturnable = selectedItem.isReturnable;
      this.inputData.productImage = selectedItem.productImage;
      this.inputData.brand = selectedItem.brand;
}}


ngOnInit(): void {   
  this.prodataser.GetProduct().subscribe(response => {
    this.data=response.data;
  });
  this.prodataser.GetCategoryId().subscribe(response=> {
    this.category=response.data;
  });
}
onFileSelected(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  debugger;
  reader.onload = (e: any) => {       
    const base64Image = e.target.result;        
    this.inputData.productImage=base64Image;
  };
  
  reader.readAsDataURL(file);
}
}

export class FormModel {
  p_Id:number;
  name:string;   
  parentId:number;   
  mrp: number; 
  isReturnable:boolean; 
  productImage:string; 
  brand:string; 
    constructor(){
      this.p_Id=0;
      this.name="";
      this.parentId=0;
      this.mrp=0;
      this.isReturnable=true;
      this.productImage="";     
      this.brand="";
}
}

