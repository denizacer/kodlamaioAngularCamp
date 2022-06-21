import { Brand } from './../../../models/brand';

import { Car } from './../../../models/car';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandAddForm:FormGroup
  brand:Brand=new Brand()//modelsden oluşturdum.
  constructor(private formBuilder:FormBuilder, private brandService:BrandService,
    private messageService:MessageService) { }

  ngOnInit(): void {

    this.createBrandAddForm();   
  }

  createBrandAddForm(){
    this.brandAddForm=this.formBuilder.group({
     
      name:["",Validators.required],
      logo:[".../assests/logos",Validators.required]
      

    })
  }
  add(){
    if(this.brandAddForm.valid){
      this.brand=Object.assign({},this.brandAddForm.value)
    }
    this.brandService.addBrand(this.brand).subscribe(data=>{
        //alert(data.name + "Eklendi")
        this.showSuccess()
      })

    }
    showSuccess() {
      this.messageService.add({severity:'success', summary: 'Brand is Add', detail: DataTransfer.name});
  }
}
