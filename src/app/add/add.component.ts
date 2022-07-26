import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { car } from '../shared/models/car.model';
import { CarsService } from '../shared/services/cars.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input('userID') userID:number = 0;
  @ViewChild('file') file: any;
  myForm:FormGroup;

  tempCar:any = {    
    image:"",
    model:"",
    brand: "",
    year: 0,
    price: 0,
    color: '',
    traction: 'string',
    motor: {
      type: 'string',
      hp: 0,
      turbo: 'false',
      cylinders:0,
      motor_liters: 0
    },
    seller_id: 0}

  constructor(private router:Router,private fb:FormBuilder, private app:CarsService){
    this.myForm = this.fb.group({
      model: ['',[Validators.required]],
      brand:  ['',[Validators.required]],
      year:  ['',[Validators.required]],  
      price: ['',[Validators.required]],
      color: ['',[Validators.required]],
      traction: ['',[Validators.required]],
      type:['',[Validators.required]],
      hp:['',[Validators.required]],
      cylinders:['',[Validators.required]],
      motor_liters:['',[Validators.required]],
      turbo:['',[Validators.required]]
    })
   }

  ngOnInit(){
  }

  //? Listo
  async carRegister()
  {
    let tempCarPost:any = this.myForm.value;    
    this.tempCar.brand  = tempCarPost.brand;
    let image:any = await  this.getBase64(this.file.nativeElement.files[0]);
    let final = image.toString().split(',')[1];
    
    this.tempCar.image = final;
    this.tempCar.model = tempCarPost.model;
    this.tempCar.year = tempCarPost.year;
    this.tempCar.price = tempCarPost.price;
    this.tempCar.color = tempCarPost.color;
    this.tempCar.traction = tempCarPost.traction;
    this.tempCar.motor.type = tempCarPost.type;
    this.tempCar.motor.hp = tempCarPost.hp;
    this.tempCar.motor.cylinders = tempCarPost.cylinders;
    this.tempCar.motor.motor_liters = tempCarPost.motor_liters;
    if(tempCarPost.turbo == true)
    { 
      
      this.tempCar.motor.turbo = 1;
    }
    else
    {
      this.tempCar.motor.turbo = 0;
    }
    this.tempCar.seller_id = this.userID;
    console.log(this.tempCar);
      this.app.addCar(this.tempCar).subscribe(data =>{        
        Swal.fire({
          title:'Thank you!',
          text:`Car added successfully`,
          icon:'success',
          confirmButtonText:'Entendido'

        })          
        this.myForm.reset();
    },error => {      
        Swal.fire({
          title:'Error!',
          text:'Car could not be added',
          icon:'error',
          confirmButtonText:'Ok'
        })
        this.myForm.reset();
    })
  }

  get model(){
    return this.myForm.get('model');
  }
  get brand(){
    return this.myForm.get('brand');
  }
  get year(){
    return this.myForm.get('year');
  }
  get price(){
    return this.myForm.get('price');
  }
  get color(){
    return this.myForm.get('color');
  }
  get traction(){
    return this.myForm.get('traction');
  }
  get type(){
    return this.myForm.get('type');
  }
  get hp(){
    return this.myForm.get('hp');
  }
  get cylinders(){
    return this.myForm.get('cylinders');
  }
  get motor_liters(){
    return this.myForm.get('motor_liters');
  }
  get turbo(){
    return this.myForm.get('turbo');
  }


  getBase64(file:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
}
