import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL:string = environment.api;


  constructor(private http:HttpClient) { }


  postUser(body:user):Observable<any>{
    return this.http.post<any>(this.apiURL+'users',body);
  }

  loginUser(body:user):Observable<JSON>{
    return this.http.post<JSON>(this.apiURL+'users/login',body);
  }
}
