import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  private apiUrl = 'https://localhost:44394/api/GetDetails/GetAllCategory';
  constructor(private http:HttpClient) { }
  getDetails(): Observable<any> {
    const url=`${this.apiUrl}`;
    return this.http.get(url);  
  }
}