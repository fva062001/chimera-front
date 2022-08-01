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
    this.price = this.price + price;
  }

  addToCart(data:car){
    this.cart.push(data);
  }
}
