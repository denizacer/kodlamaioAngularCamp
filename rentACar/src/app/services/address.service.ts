import { Address } from './../models/address';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<Address[]>{
    return this.httpClient.get<Address[]>("http://localhost:3000/address/")
  }
  getAddressByUserId(val:number):Observable<Address>{
   
    return this.httpClient.get<Address>("http://localhost:3000/address/%22+val")

  }
}
