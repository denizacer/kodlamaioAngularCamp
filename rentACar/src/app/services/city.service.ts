import { City } from './../models/city';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 

  constructor(private httpClient:HttpClient) { }
  getCities():Observable<City[]>{
    return this.httpClient.get<City[]>("http://localhost:3000/cities")
  }
}
