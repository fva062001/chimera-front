import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:UserService, private formBuilder:FormBuilder, private route:Router) { }
  @Output('goHome') goHome = new EventEmitter<number>();
  @Output('goRegister') goRegister = new EventEmitter<number>();
  @Output('username') sendUser = new EventEmitter<user>();
  @Output('userId') sendId = new EventEmitter<number>();

  loginForm = this.formBuilder.group({
    username:['admin'],
    password:['12345'],
  });
  ngOnInit(): void {
  }


  login():void{
    const user = this.loginForm.value;
    let finalUser:user ={
      username: user.username,
      password: user.password
    } 
    this.http.loginUser(finalUser).subscribe(data =>{
      this.goHome.emit(2);
      this.sendUser.emit(finalUser);
      this.sendId.emit(data.user.id);
      if(data.user.isAdmin == true){

        this.goHome.emit(3);
      }
    }, error =>{
      Swal.fire({
        title:'Error!',
        text:`No se ha podido iniciar sesion`,
        icon:'error',
        confirmButtonText:'Ok'
      })
      this.loginForm.reset();
    })
  }

  goBack(data:number){
    if(data == 1)
    {
      this.goRegister.emit(1);
    }
  }
}
