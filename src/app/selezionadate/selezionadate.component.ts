import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CarsDataService} from '../services/data/cars-data.service';
import {Car} from '../cars/cars.component';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-selezionadate',
  templateUrl: './selezionadate.component.html',
  styleUrls: ['./selezionadate.component.css']
})
export class SelezionadateComponent implements OnInit{
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  minDate: Date;
  maxDate: Date;
  public isButtonVisible = true;
  dateRange: string[];
  data1 : Date;
  data2 : Date;
  datainizio : string;
  datafine : string;
  cars : Car[];
  errore : string = "";

  constructor(public carsService:CarsDataService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date;
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  showCars(range: FormGroup){
    this.data1 = range.get("start").value;
    this.data2 = range.get("end").value;
    this.datainizio = this.data1.getFullYear()+ "-" + (this.data1.getUTCMonth()+1)+ "-" + this.data1.getDate();
    this.datafine = this.data2.getFullYear()+ "-" + (this.data2.getUTCMonth()+1)+ "-" + this.data2.getDate();
    this.dateRange = [this.datainizio,this.datafine];
    this.carsService.getAvailableCars(this.dateRange).subscribe(response => {
      this.cars = response;
    },
      error => {
      this.errore = "Nessun auto disponibile per questo periodo";
      });
  }
  ngOnInit() {
  }

}
