import { CartService } from './../../../services/cart.service';
import { AdditionalServices } from './../../../models/additionalService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { AdditionalServicesService } from 'src/app/services/additional-services.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  cars:Car
  additionalServices:AdditionalServices[];
  selectedCarId:number;

  constructor(private activatedRoute:ActivatedRoute,
    private carService:CarService,private additionalServicesService:AdditionalServicesService, private cartService:CartService) { }

  ngOnInit(): void {
    this.getCarById();
    this.getAdditionalServices();
  }

  getCarById(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedCarId=params['id'];   
    })    
      this.carService.getCarsById(this.selectedCarId).subscribe(data =>{
        this.cars = data
      })        
  }

  getAdditionalServices(){
    this.additionalServicesService.getAdditionalServices().subscribe(data =>{
      this.additionalServices = data
    })
  }

  addToCart2(additionalService:AdditionalServices){
    this.cartService.addToCart2(additionalService)
  }
}
