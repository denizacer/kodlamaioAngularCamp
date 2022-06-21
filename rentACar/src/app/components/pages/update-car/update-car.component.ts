import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  car: Car= new Car();
  colors:Color[];//color
  brands:Brand[]//brand 
  selectedId:number;
    constructor(private formBuilder:FormBuilder, private carService:CarService,
      private activatedRoute:ActivatedRoute, private messageService:MessageService,
      private brandService:BrandService, private colorService:ColorService
      ) { }
    
  
    carAddForm: FormGroup
    updateCarAddForm(){
      this. carAddForm=this.formBuilder.group({
        id:[this.car.id, Validators.required],
        brandId:[this.car.brandId, Validators.required],
        brandName:[this.car.brandName],
        colorId:[this.car.colorId, Validators.required],
        colorName:[this.car.colorName],
        dailyPrice:[this.car.dailyPrice, Validators.required],
        description:[this.car.description, Validators.required],
        
      })
    }
  
    ngOnInit(): void {
      this.getCarById()
      this.getColor()
      this.getBrand()
    }
  
    
    update(){
      let selectedBrands = this.brands.find(element=>element.id== this.carAddForm.value.brandId);
      let selectedColor= this.colors.find(element=>element.id== this.carAddForm.value.colorId);
      this.carAddForm.value.brandId=parseInt(this.carAddForm.value.brandId);
      this.carAddForm.value.colorId=parseInt(this.carAddForm.value.colorId);
      this.carAddForm.value.brandName=selectedBrands.name;
      this.carAddForm.value.colorName=selectedColor.name;
      if(this.carAddForm.valid){
        this.car=Object.assign({}, this.carAddForm.value)
        this.carService.updateCar(this.car).subscribe(data=>{
          
          this.messageService.add({severity:'success', summary: 'Güncellendi!', detail: 'Araba güncellendi !'});
  
           
          })
        }
      }
  
    
    getCarById(){
      this.activatedRoute.params.subscribe(params=>{
        if(params["id"])
        this.selectedId=params["id"]
      })
      this.carService.getCarsById(this.selectedId).subscribe(data=>{
        this.car=data
        this.updateCarAddForm()
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


}
