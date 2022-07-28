import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { user } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http:UserService, private formBuilder:FormBuilder, private route:Router) { }

  @Output('goHome') goHome = new EventEmitter<number>();
  @Output('goLogin') goLogin = new EventEmitter<number>();

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
    username:['',[Validators.required]],
    password:['',[Validators.required]]
  });

  createUser(event:any):void{
    const user = this.registerForm.value;
    let finalUser:user = {
      username:user.username,
      password:user.password
    };

    this.http.postUser(finalUser).subscribe(data =>{
      Swal.fire({
        title:'Gracias!',
        text:`${data.message}`,
        icon:'success',
        confirmButtonText:'Entendido'

      })
    }, error =>{
      Swal.fire({
        title:'Error!',
        text:`El usuario no ha podido ser registrado`,
        icon:'error',
        confirmButtonText:'Ok'
      })
      this.registerForm.reset();
    });
  }

  goBack(data:number){
    if(data == 0)
    {
      this.goHome.emit(2);
    }
    else if(data == 1)
    {
      this.goLogin.emit(0);
    }
  }
}
