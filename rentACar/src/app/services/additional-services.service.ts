import { AdditionalServices } from './../models/additionalService';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdditionalServicesService {

  constructor(private httpClient:HttpClient) { }

  getAdditionalServices():Observable<AdditionalServices[]>{
    return this.httpClient.get<AdditionalServices[]>("http://localhost:3000/additionalServices")
  }
}
