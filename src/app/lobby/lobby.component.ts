import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  goLogin(dec:boolean){
    if(dec){
      console.log("login");
      this.route.navigate(['/','login']);      
    }
    else{
      console.log("register");
      
      this.route.navigate(['/','register']);
    }
  }
}
