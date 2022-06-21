import { AdditionalCartItems } from './../../models/cartItems';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from 'src/app/models/car';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { AdditionalCartItem } from 'src/app/models/additionalCartItem';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems: CartItem[]=[];
  additionalCartItems: AdditionalCartItem[]=[]

  constructor(public cartService:CartService,private messageService:MessageService) {}

  ngOnInit(): void {
    this.getCart();
  }

  getCart() {
    this.cartItems = this.cartService.list();
    this.additionalCartItems=this.cartService.list2()
  }

  removeFromCart(car:Car){
    this.cartService.removeFromCart(car);
    this.showSuccess()
  }

  showSuccess() {
    this.messageService.add({severity:'success', summary: 'car is Add', detail: DataTransfer.name});
}
}
