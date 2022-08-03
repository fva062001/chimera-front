import { Injectable } from '@angular/core';
import { car } from '../models/car.model';
import Swal from 'sweetalert2';

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

  clearCart(){
    this.cart = [];
    this.price = 0;
    Swal.fire({
      title:'Important!',
      text:`Cart has been deleted`,
      icon:'info',
      confirmButtonText:'Entendido'

    })
  }
}
