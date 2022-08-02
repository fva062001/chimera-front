import { Component } from '@angular/core';
import { Sweetalert2ModuleConfig } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chimera Page';
  login:boolean = true;
  main:boolean = false;
  register:boolean = false;
  username:string = 'User';
  userId:number = 0;
  changeRoute(data:number){
    switch(data){
      case 0:
        this.main = false;
        this.register = false;
        this.login = true;
        break;

      case 1:
        this.main = false;
        this.register = true;
        this.login = false;
        break;
      
      case 2:
        this.main = true;
        this.login = false;
        this.register = false;
        break;
    }

  }

  putUser(data:any){
    console.log(data);
    this.username = data.username;
  }
  putUserId(data:number){
    this.userId = data;
  }
}
