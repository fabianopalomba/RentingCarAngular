import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Rent} from '../../rents/rents.component';
import {Car} from '../../cars/cars.component';

@Injectable({
  providedIn: 'root'
})
export class RentsDataService {
  constructor(private httpClient:HttpClient) { }

  getRents(){
    return this.httpClient.post<Rent[]>('http://localhost:8080/untitledspring_war/api/rents',sessionStorage.getItem("utente"));
  }
  addNewRent(dateRange : string[], car: string, user:string){
    dateRange.push(car, user);
    return this.httpClient.post<Rent[]>('http://localhost:8080/untitledspring_war/api/addRent',dateRange);
  }
}
