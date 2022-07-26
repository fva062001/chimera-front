import { Component, OnInit } from '@angular/core';
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


  loginForm = this.formBuilder.group({
    username:[''],
    password:['']
  });
  ngOnInit(): void {
  }


  login():void{
    const user = this.loginForm.value;
    console.log(user);
    let finalUser:user ={
      username: user.username,
      password: user.password
    } 
    this.http.loginUser(finalUser).subscribe(data =>{
      this.route.navigate(['/','lobby']);
    }, error =>{
      Swal.fire({
        title:'Error!',
        text:`No se ha podido iniciar sesion`,
        icon:'error',
        confirmButtonText:'Ok'
      })
    })
  }

  goBack(){
    this.route.navigate(['/','lobby']);
  }
}
