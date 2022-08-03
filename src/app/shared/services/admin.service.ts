import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http:HttpClient) { }

  apiURL:string = environment.api;

  getAllCars():Observable<any>{
    return this.http.get<any>(this.apiURL+`cars`);
  }

  getAllUsers():Observable<any>{
    return this.http.get<any>(this.apiURL+`users`);
  }

  deleteCar(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL+`cars/${id}`);
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete<any>(this.apiURL+`users/${id}`);
  }

  setAdmin(id:number,body:any):Observable<any>{
    return this.http.put<any>(this.apiURL+`users/${id}`,body);
  }
}
