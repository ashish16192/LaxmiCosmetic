import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
private GetAdminDetails='https://localhost:44394/api/Account'
private GetSaleDetails='https://localhost:44394/api/GetDetails/GetSalesHistory'
private getProductDetails='https://localhost:44394/api/GetDetails/GetAllProduct'
  constructor(private http:HttpClient) { }
  GetAdmin(Admin:any): Observable<any> { 
    const url=`${this.GetAdminDetails}`;
    return this.http.get(url+"/GetUsers?userType="+Admin);
  }
  GetClient(Client:any): Observable<any> { 
    const url=`${this.GetAdminDetails}`;
    return this.http.get(url+"/GetUsers?userType="+Client);
  } 
  GetSaleHistory(): Observable<any> { 
    const url=`${this.GetSaleDetails}`;
    return this.http.get(url);
  } 
  GetProduct(): Observable<any> { 
    const url=`${this.getProductDetails}`;
    return this.http.get(url);
  } 
}
