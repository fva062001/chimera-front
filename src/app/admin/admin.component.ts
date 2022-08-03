import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { car } from '../shared/models/car.model';
import { AdminService } from '../shared/services/admin.service';
import { CarsService } from '../shared/services/cars.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @Output('refresh') refresh = new EventEmitter<boolean>();
  @Output('goHome') home = new EventEmitter<number>();
  setAdminOn:boolean = true;
  setAdminOff:boolean = false;
  constructor(private app:AdminService) { }
  cars:any = []
  users:any = []
  ngOnInit(): void {
      this.app.getAllCars().subscribe(data => {
      this.cars = data.data;
    });
      this.app.getAllUsers().subscribe(data => {
      this.users = data.data;
    });
  }
  deleteCar(car:any){
    this.app.deleteCar(car.id).subscribe(data => {
      this.refresh.emit(true);
    });
  }

  deleteUser(user:any){
    this.app.deleteUser(user.id).subscribe(data => {
      this.refresh.emit(true);
    });
  }

  setAdmin(user:any){
    let body = {
      admin: true
    }
    this.app.setAdmin(user.id,body).subscribe(data => {
      
      this.refresh.emit(true);
    }
    );
  }

  setAdminOf(user:any){
    let body = {
      admin: false
    }
    this.app.setAdmin(user.id,body).subscribe(data => {
      this.refresh.emit(true);
    }
    );
  }

  goHome(){
    this.home.emit(0);
  }

}
