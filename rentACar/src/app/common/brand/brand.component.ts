
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { MessageService } from 'primeng/api';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[];
  selectedBrand:Brand;
 
  constructor(private brandService:BrandService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.brandService.getBrands().subscribe(data=>{
      this.brands=data
    })
  }
  selectCarId(brand:Brand){
    window.location.href=`brands/${brand.id}`//
  }

  selectCarId1(brand:Brand){
    window.location.href=`cars/${brand.id}`//
  }
  
  deleteBrand(val: number){
    if(confirm('Are you sure want to delete')){
      this.brandService.deleteBrand(val).subscribe(data=>{
        this.messageService.add({severity:'error', summary: 'Silindi!', detail: 'Marka başarıyla silindi !'});
        
      })
    }
  }
  selectedBrandId(selectedBrand:Brand):void{
    window.location.href= `cars/brandId/${selectedBrand.id}`
}



}
