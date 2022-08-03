import { Component, EventEmitter, OnInit, ViewChild,Output } from '@angular/core';
import { car } from '../shared/models/car.model';
import { CartService } from '../shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Output('clearBasket') clear = new EventEmitter<boolean>(); 
  constructor(private cartService:CartService) { }
  cart:car[] = []
  total:number = 0;
  ngOnInit(): void {
      this.cart = this.cartService.cart;
      this.total = this.cartService.price;
  }

  clearBasket(){
    this.clear.emit(true);
    this.cartService.clearCart();
  }

}
