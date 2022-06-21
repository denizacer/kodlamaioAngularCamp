import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  
  selectedBrandId
  cars:Car[];
 
 
 
   constructor(private carService:CarService, private messageService:MessageService,
     private activatedRoute:ActivatedRoute,private cartService:CartService) { }
 
   ngOnInit(): void {
    this.getCarsByBrand();
  }
 
  deleteCar(val:number){
    if(confirm("Ürünü silmek istediğine emin misin?")){
      this.carService.deleteCar(val).subscribe(data=>{
        this.messageService.add({severity:'error', summary: 'Silindi!', detail: 'Araba başarıyla silindi !'})
      })
     
    }
  }
  getCarsByBrand(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedBrandId=params['id'];   
    })
    if(this.selectedBrandId==undefined){
      this.carService.getCar().subscribe(data => {
        this.cars = data;
      })
    }
    else{
      this.carService.getCarsByBrand(this.selectedBrandId).subscribe(data =>{
        this.cars = data;
      })
    }
    
  }
  addToCart(car:Car){
    this.cartService.addToCart(car)
  }


}
