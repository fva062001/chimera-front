import { Component, OnInit } from '@angular/core';
import { CarsService } from '../shared/services/cars.service';
import { car } from '../shared/models/car.model';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private carService:CarsService) { }
  private catalog: car[] = [];
  ngOnInit(): void {
    this.catalog = this.carService.getCatalogById()
  }

}
