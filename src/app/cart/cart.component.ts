import { Component, OnInit, ViewChild } from '@angular/core';
import { car } from '../shared/models/car.model';
import { CartService } from '../shared/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  cart:car[] = []
  total:number = 0;
  ngOnInit(): void {
      this.cart = this.cartService.cart;
      this.total = this.cartService.price;
  }

}
