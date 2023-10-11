import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveUserService {

  private AddUserApi=`https://localhost:44394/api/Account/AddEditUser`
 
  constructor(private http: HttpClient) { }
  AddUser(inputData: any): Observable<any> {
    return this.http.post(`${this.AddUserApi}`, inputData);
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
