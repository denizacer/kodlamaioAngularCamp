import { City } from './../../../models/city';
import { CityService } from './../../../services/city.service';
import { AdditionalServices } from './../../../models/additionalService';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {
  cities:City[];
  cartItems:CartItem[];
  additionalCartItems:AdditionalCartItem[];
  

  constructor(private messageService:MessageService,
    public cartService:CartService, private cityService:CityService) { }

  ngOnInit(): void {
    this.getCart()
    this.getCities()
  }

  getCart() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems=this.cartService.list2()
  }
  getCities()
  {
    this.cityService.getCities().subscribe(data=>{
      this.cities=data;
    })
  }

  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    this.messageService.add({severity:'success', summary: 'car is Add', detail: DataTransfer.name});
  }

  removeFromCart2(additionalService:AdditionalServices){
    this.cartService.removeFromCart2(additionalService);
    this.messageService.add({severity:'success', summary: 'car is Add', detail: DataTransfer.name});
  }


  

}
