import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../shared/models/car.model';
import { CarsService } from '../shared/services/cars.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../shared/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  add:boolean = false;
  catalog:boolean = false;
  cart:boolean = false;
  history:boolean = false;
  lobby:boolean = true;
  exist:boolean = true;
  catalogList:car[] = [];
  closeResult = '';

  @Input('username') username:string = 'user';
  @Input('userId') userId = 0;
  @Output('goLogin') goLogin = new EventEmitter<number>();
  @Output('goRegister') goRegister = new EventEmitter<number>();
  constructor(private route:Router,private carService:CarsService, private modalService:NgbModal, private cartService:CartService) { }

  ngOnInit(): void {
    this.carService.getCatalog().subscribe(data =>{
      this.catalogList = data.data;
      this.exist = true;
    },error =>{
      this.exist = false;
    })
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  toCart(data:car){
    this.cartService.addToCart(data);
    this.cartService.addPrice(data.price);
    this.modalService.dismissAll();
    Swal.fire({
      title:'Added',
      text:`The car has been added to the cart`,
      icon:'success',
      confirmButtonText:'Got it'
    })
  }

  changeModule(data:any){
    switch(data){
      case 'add':

      break;

      case 'catalog':

      break;

      case 'cart':
        this.add = false;
        this.catalog = false;
        this.cart = true;
        this.history = false;
        this.lobby= false;
      break;

      case 'history':

      break;
      case 'home':
        this.add = false;
        this.catalog = false;
        this.cart = false;
        this.history = false;
        this.lobby= true;
      break;
      case 'login':
        this.goLogin.emit(0);
      break;

      case 'register':
        this.goRegister.emit(1);
      break;
    }
  }
}
