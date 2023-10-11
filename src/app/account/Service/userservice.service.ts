import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  apiUrl="https://localhost:44394/api/Account";
  constructor(private http: HttpClient) { }
  UserLogin(data:any):Observable<any>
  { 
    console.log("data",data);
    return this.http.post(this.apiUrl+"/UserLogin",data);
  }
}
