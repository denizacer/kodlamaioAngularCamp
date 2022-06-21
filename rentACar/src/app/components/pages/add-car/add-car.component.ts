import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private carService:CarService, 
    private messageService:MessageService
    ,private brandService:BrandService, private colorService:ColorService) { }
  CarAddForm: FormGroup;
  cars: Car;//car
  colors:Color[];//color
  brands:Brand[]//brand



  createCarAddForm(){
    this.CarAddForm=this.formBuilder.group({
      
      brandId:["", Validators.required],
      colorId:["", Validators.required],
      dailyPrice:["", Validators.required],
      description:["", Validators.required],

    })
  }
  ngOnInit(): void {
    this.createCarAddForm(),
    this.getColor(),
    this.getBrand()
  }

  add(){
    let selectedBrands = this.brands.find(element=>element.id== this.CarAddForm.value.brandId);
    let selectedColor= this.colors.find(element=>element.id== this.CarAddForm.value.colorId);
   
    this.CarAddForm.value.brandId=parseInt(this.CarAddForm.value.brandId);
    this.CarAddForm.value.colorId=parseInt(this.CarAddForm.value.colorId);
    this.CarAddForm.value.brandName=selectedBrands.name;
    this.CarAddForm.value.colorName=selectedColor.name;

    if(this.CarAddForm.valid){
      this.cars=Object.assign({},this.CarAddForm.value)
    }
    this.carService.addCar(this.cars).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Araba başarıyla eklendi !'});
      
    })

    

  }

  getColor(){
    this.colorService.getColors().subscribe(data=>{
      this.colors=data
    })
  }
  getBrand(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }
  canExit():boolean{
    if(confirm('Emin misiniz?')){
      return true;
    }else{
      return false;
    }
  }

}
