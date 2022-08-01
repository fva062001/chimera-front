import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  @Output('toCatalog') goCatalog = new EventEmitter<string>();
  @Output('toAdd') goAdd = new EventEmitter<string>();
  @Output('toCart') goCart = new EventEmitter<string>();
  @Output('toHistory') goHistory = new EventEmitter<string>();
  @Output('toLogin') goLogin = new EventEmitter<string>();
  @Output('toRegister') goRegister = new EventEmitter<string>();
  @Output('toHome') goHome =  new EventEmitter<string>();

  //Method to send persons to respective zone
  goTo(caseNumber:number):void{

    switch(caseNumber){
      case 1:
        this.goHome.emit('home');
      break;
      case 2:
        this.goCatalog.emit('catalog');
      break;
      case 3:
        this.goAdd.emit('add');
      break;
      case 4:
        this.goCart.emit('cart');
      break;
      case 5:
        this.goHistory.emit('history');
      break;
      case 6:
        this.goLogin.emit('login')
      break;
      case 7:
        this.goRegister.emit('register')
      break;
    }
  }
}
