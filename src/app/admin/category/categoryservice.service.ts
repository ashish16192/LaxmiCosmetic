import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private apiUrl1=`https://localhost:44394/api/Product/AddEditCategory`
  private apiUrl2=`https://localhost:44394/api/GetDetails/GetAllCategory`
  constructor(private http:HttpClient) { }
  AddCategory(inputData: any): Observable<any> {
    return this.http.post(`${this.apiUrl1}`, inputData);
  } 
  GetCategory(): Observable<any> {
    const url=`${this.apiUrl2}`;
    return this.http.get(url);  
  }
  sendImageToApi(base64Image: string) {
    const apiUrl = `https://localhost:44394/api/Product/AddEditCategory`; 
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
