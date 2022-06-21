import { AdditionalServices } from './../models/additionalService';
import { AdditionalCartItem } from '../models/additionalCartItem';
import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { CartItem } from '../models/cartItem';
import { AdditionalCartItems, CartItems } from '../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(car:Car){
    let item = CartItems.find(c=>c.car.id===car.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem = new CartItem();
      cartItem.car = car;
      cartItem.quantity =1;
      CartItems.push(cartItem)
    }
  }


  addToCart2(additionalService:AdditionalServices){
    let item = AdditionalCartItems.find(c=>c.additionalServices.id===additionalService.id);
    if(item){
      item.quantity+=1;
    }else{
      let cartItem2 = new AdditionalCartItem();
      cartItem2.additionalServices = additionalService;
      cartItem2.quantity =1;
      AdditionalCartItems.push(cartItem2)
    }
  }



  removeFromCart(car:Car){
    let item:CartItem = CartItems.find(c=>c.car.id===car.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }
  removeFromCart2(additionalServices:AdditionalServices){
    let item:AdditionalCartItem = AdditionalCartItems.find(c=>c.additionalServices.id===additionalServices.id);
    AdditionalCartItems.splice(AdditionalCartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }

  list2():AdditionalCartItem[]{
    return AdditionalCartItems;
  }

  getTotal():any{
    let total = 0;
    CartItems.forEach(element => {
      total = total + element.quantity * element.car.dailyPrice
    });

    AdditionalCartItems.forEach(element => {
      total = total + element.quantity * element.additionalServices.price   
    });
    return total;
  }

  getTotalQuantity(){
    let total = 0;
    CartItems.forEach(element => {
      total = total + element.quantity
    });

    AdditionalCartItems.forEach(element => {
      total = total + element.quantity 
    });
    return total;
  }
 
}
