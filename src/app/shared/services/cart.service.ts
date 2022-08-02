import { Injectable } from '@angular/core';
import { car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public price:number = 0;
  public cart:car[] = []
  constructor() { }

  addPrice(price:any)
  {
    const totalPrice = parseFloat(price) * 1000;
    this.price = this.price + totalPrice;
  }

  addToCart(data:car){
    this.cart.push(data);
  }
}
