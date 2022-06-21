import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

 
  cars:Car[];
  selectedCarsId: any;
  constructor(private carService:CarService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCar();
  }
  getCar(){
    this.carService.getCar().subscribe(params => {
      if(params['id']) this.selectedCarsId =params['id'];
    });
  }
  /*getCars() {
    this.activedRoute.params.subscribe(params => {
      if(params['id']) this.selectedCarsId =params['id'];
    });*/
}
