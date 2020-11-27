import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../../cars/cars.component';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private httpClient:HttpClient) { }

  getCars(){
    return this.httpClient.get<Car[]>('http://localhost:8080/untitledspring_war/api/cars');
  }
  getAvailableCars(range:string[]){
    return this.httpClient.post<Car[]>('http://localhost:8080/untitledspring_war/api/selectCars',range);
  }
}
