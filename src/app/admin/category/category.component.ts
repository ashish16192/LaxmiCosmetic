import { Component } from '@angular/core';
import { CategoryserviceService } from './categoryservice.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  data:any[]=[];
  inputData :any={
    name:'',
    productImage:''
  } 
  constructor(private categoryservice:CategoryserviceService){}
  getCategoryDetails(){
    this.categoryservice.GetCategory().subscribe(response => {
      this.data=response.data;
    });
  }
  saveCategory(){
    this.categoryservice.AddCategory(this.inputData).subscribe(response=>
      { 
        this.inputData.parentId=0,
        this.inputData.name='',
        this.inputData.productImage='',     
      console.log('Category added successfully:', response);
      this.getCategoryDetails();
    },
    error => {     
      console.error('Error adding Category:', error);
    } );
}
editClick(index: number) {
  debugger;
  console. log(this.inputData.length)
  
  if (index >= 0 && index < this.data.length) {
      const selectedItem = this.data[index];  
      this.inputData.p_Id = selectedItem.p_Id;
      this.inputData.name = selectedItem.name;
      this.inputData.productImage = selectedItem.productImage;
}
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


ngOnInit(): void {   
  this.categoryservice.GetCategory().subscribe(response => {
    this.data=response.data;
  });
}
}
