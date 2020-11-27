import { Component, OnInit } from '@angular/core';
import {CarsDataService} from '../services/data/cars-data.service';

export class Car {
  constructor(
    public carsid: number,
    public brand: string,
    public model: string,
  ) {
  }
}
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Car[];

  constructor(private CarService: CarsDataService) { }

  ngOnInit() {
    this.CarService.getCars().subscribe(response => {
      console.log(response);
      this.cars = response;
    })
  }

}
