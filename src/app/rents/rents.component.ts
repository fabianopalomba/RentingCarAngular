import { Component, OnInit } from '@angular/core';
import {RentsDataService} from '../services/data/rents-data.service';
import {Car} from '../cars/cars.component';
import {User} from '../user/user.component';

export class Rent {
  constructor(
    public rentid: number,
    public car: Car,
    public user: User,
    public initDate: Date,
    public finDate: Date,
  ) {
  }
}
@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {

  rents:Rent[];

  constructor(private rentService: RentsDataService) { }

  ngOnInit() {
    this.rentService.getRents().subscribe(response => {
      this.rents = response;
    })
  }
}
