import {Component, Input, OnInit} from '@angular/core';
import {SelezionadateComponent} from '../selezionadate/selezionadate.component';
import {Car} from '../cars/cars.component';
import {FormControl, FormGroup} from '@angular/forms';
import {RentsDataService} from '../services/data/rents-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selezionaauto',
  templateUrl: './selezionaauto.component.html',
  styleUrls: ['./selezionaauto.component.css']
})
export class SelezionaautoComponent implements OnInit {

  form = new FormGroup({
    car: new FormControl(),});

  @Input() dateRange:string[];

  @Input() cars:Car[];

  @Input() errore:string;

  constructor(public rentService : RentsDataService, public route: Router) { }

  ngOnInit(){
    console.log(this.dateRange[0]);
  }
  addRent(dateRange: string[], car: Car){
    this.rentService.addNewRent(this.dateRange, car.carsid.toString(), sessionStorage.getItem("utente")).subscribe(response => {
      if(response == null){
        this.route.navigate(['welcome',sessionStorage.getItem("utente")]);}
    });

  }
}
