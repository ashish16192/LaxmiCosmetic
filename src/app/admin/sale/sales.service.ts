import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private UserDetails=`https://localhost:44394/api/Account`
  private AddToSale=`https://localhost:44394/api/Product/AddToSale`
  private ProductDetails=`https://localhost:44394/api/GetDetails/GetAllProduct`
  
  constructor(private http:HttpClient) { }
  GetClient(value:any): Observable<any> {
    debugger;
    const url=`${this.UserDetails}`;
    return this.http.get(url+"/GetUsers?contactNo="+value);
  }
  GetProduct(): Observable<any> {
    const url=`${this.ProductDetails}`;
    return this.http.get(url);
  }
  AddPurchases(productData:any): Observable<any> {  
    debugger;
    console.log("apiresult",productData);
    return this.http.post(`${this.AddToSale}`, productData);
  } 
}
