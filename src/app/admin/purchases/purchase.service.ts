import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'  
})
export class PurchaseService {
  private apiUrl1=`https://localhost:44394/api/Account`
  private apiUrl2=`https://localhost:44394/api/Product/AddToPurchase`
  private apiUrl3=`https://localhost:44394/api/Product`
  
  constructor(private http:HttpClient) { }
  GetVendor(vendor:any): Observable<any> { 
    const url=`${this.apiUrl1}`;
    return this.http.get(url+"/GetUsers?userType="+vendor);
  }
  GetProduct(venId:any): Observable<any> {
    const url=`${this.apiUrl3}`;
    return this.http.get(url+"/VendorsProduct?venId="+venId);
  }
  AddPurchases(productData:any): Observable<any> {  
    debugger;
    console.log("apiresult",productData);
    return this.http.post(`${this.apiUrl2}`, productData);
  } 
}
