import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http:HttpClient) { }

  apiURL:string = environment.api;

  getCatalog():Observable<any>{
    return this.http.get<any>(this.apiURL+`cars`);
  }


  getCatalogById(userID:number):Observable<any[]>{
    return this.http.get<any[]>(this.apiURL+ `cars/list/${userID}`);
  }

  addCar(car:car):Observable<any>{
    return this.http.post<any>(this.apiURL+`cars`,car);
  }
  



}
