import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  @Input('username') username:string = 'User';
  @Output('goLogin') goLogin = new EventEmitter<number>();
  @Output('goRegister') goRegister = new EventEmitter<number>();
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  changeModule(data:any){
    switch(data){
      case 'add':

      break;

      case 'catalog':

      break;

      case 'cart':

      break;

      case 'history':

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
