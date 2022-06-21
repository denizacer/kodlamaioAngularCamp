import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<Color[]>{
    return this.httpClient.get<Color[]>("http://localhost:3000/colors")
  }
  addColor(color:Color):Observable<Color>{
    return this.httpClient.post<Color>("http://localhost:3000/colors",color)
  }
  deleteColor(val:number):Observable<Color>{
    return this.httpClient.delete<Color>("http://localhost:3000/colors/"+val)
  }
}
