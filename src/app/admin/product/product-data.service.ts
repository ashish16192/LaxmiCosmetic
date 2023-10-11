import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  
  private apiUrl1=`https://localhost:44394/api/Product/AddEditProduct`
  private apiUrl2=`https://localhost:44394/api/GetDetails/GetAllProduct`
  private apiUrl3=`https://localhost:44394/api/GetDetails/GetAllCategory`
  private apiUrl4=`https://localhost:44394/api/Product/DeleteProduct?p_Id=`
 
  constructor(private http: HttpClient) { }
  AddProduct(inputData: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}`, inputData);
  } 
  ProductDelete(p_Id:String):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    debugger; 
    return this.http.delete<number>(this.apiUrl4+p_Id);
  }
  GetProduct(): Observable<any> {
    const url=`${this.apiUrl2}`;
    return this.http.get(url);  
  }
  GetCategoryId(): Observable<any> {
    const url=`${this.apiUrl3}`;
    return this.http.get(url);  
  }
  sendImageToApi(base64Image: string) {
    const apiUrl = `https://localhost:44394/api/Product/AddEditProduct`; 
    const requestData = { image: base64Image };
  
    this.http.post(apiUrl, requestData).subscribe(
      (response) => {
      
        console.log('API Response:', response);
      },
      (error) => {
        
        console.error('API Error:', error);
      }
    );
  }

}


 
