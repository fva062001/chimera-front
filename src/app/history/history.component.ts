import { Component, Input, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';
import { car } from '../shared/models/car.model';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  @Input('userId') userId:number = 0;
  constructor(private carService:CarsService) { }
  public catalog: any[] = [];
  ngOnInit(): void {
    this.carService.getCatalogById(this.userId).subscribe(data =>{
      this.catalog = data;
      console.log(data);
    })
  }

}
