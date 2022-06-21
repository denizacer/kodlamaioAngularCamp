import { Brand } from './../../../models/brand';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css'],
  
})
export class UpdateBrandComponent implements OnInit {

  brandUpdateForm:FormGroup;
  brand:Brand;
  selectedBrandId:number;
  
  constructor(private formBuilder:FormBuilder, private brandService:BrandService,private messageService:MessageService, 
    private activatedRoute:ActivatedRoute) { }
  createBrandUpdateForm(){
    this.brandUpdateForm=this.formBuilder.group({
      id:[this.brand.id,Validators.required],
      name:[this.brand.name,Validators.required],
      logo:[this.brand.logo,Validators.required],
    
    })
  }

  ngOnInit(): void {
    this.getBrandById();
  }

  getBrandById(){
    this.activatedRoute.params.subscribe(params =>{
      if(params['id']) this.selectedBrandId=params['id'];   
    })    
      this.brandService.getBrandById(this.selectedBrandId).subscribe(data =>{
        this.brand = data
        this.createBrandUpdateForm();
      })        
  }

  update(){
    if(this.brandUpdateForm.valid){
      this.brand=Object.assign({},this.brandUpdateForm.value)
    }
    this.brandService.updateBrand(this.brand).subscribe(data=>{
        //alert(data.name+ "Güncellendi")
        this.showSuccess()
      })
    }

    showSuccess() {
      this.messageService.add({severity:'success', summary: 'Uptated', detail: 'Message Content'});
  }
  
  

}
