import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-addcolor',
  templateUrl: './addcolor.component.html',
  styleUrls: ['./addcolor.component.css']
})
export class AddcolorComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
     private colorService:ColorService,
      private messageService:MessageService) { }
  colorAddForm: FormGroup;
  color: Color;
  colors: Color[]
  


  createColorAddForm(){
    this.colorAddForm=this.formBuilder.group({
      id:["", Validators.required],
      name:["", Validators.required],
      img:["./assets/logos/", Validators.required],
    })
  }
  ngOnInit(): void {
    this.createColorAddForm()
  }

  add(){
    if(this.colorAddForm.valid){
      this.colors=Object.assign({},this.colorAddForm.value)
    }
    this.colorService.addColor(this.color).subscribe(data=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Ürün başarıyla eklendi !'});
      //location.reload()
    })
  }

}
