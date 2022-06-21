import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  colors:Color[];
  selectedColor:Color;
  constructor(private colorService:ColorService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getColors()

  }

  getColorId(colors:Color){
    window.location.href="cars/colors/"+ colors.id
  }
  getColors() {
    this.colorService.getColors().subscribe(data=>{
      this.colors=data
    })
  }

  deleteColor(val: number){

    if(confirm('Are you sure want to delete')){

      this.colorService.deleteColor(val).subscribe()}
      this.messageService.add({severity:'error', summary: 'Silindi!', detail: 'Marka başarıyla silindi !'});
    }

    selectedColorId(selectedColor:Color):void{
      window.location.href= `cars/colorId/${selectedColor.id}`
    }

}
