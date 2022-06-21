import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient:HttpClient) { }

  getCar():Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars")
  }
  addCar(car:Car):Observable<Car>{
    return this.httpClient.post<Car>("http://localhost:3000/cars/",car)
  }
  deleteCar(val:number):Observable<Car>{
    return this.httpClient.delete<Car>("http://localhost:3000/cars/"+val)
  }
  updateCar(car:Car):Observable<Car>{
    return this.httpClient.put<Car>("http://localhost:3000/cars/"+car.id,car)
  }
  getBrandById(brandId:number):Observable<Car>{
    let newPath = "http://localhost:3000/cars/" + (brandId)
    return this.httpClient.get<Car>(newPath)

  }
  getColorById(colorId:number):Observable<Car>{
    let newPath = "http://localhost:3000/cars/" + (colorId)
    return this.httpClient.get<Car>(newPath)

  }
  getCarsById(val:number):Observable<Car>{
    return this.httpClient.get<Car>("http://localhost:3000/cars/"+val)
  }

  getCarsByBrand(val:number):Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars?brandId="+val)
  }

  getRentCarsById(selectedId:number):Observable<Car[]>{
    return this.httpClient.get<Car[]>("http://localhost:3000/cars?id="+selectedId)
  }

}
