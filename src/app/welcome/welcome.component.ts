import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SalutiDataService} from '../services/data/saluti-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  messaggio = 'Benvenuto in RentingCar';
  utente = '';

  constructor(private route: ActivatedRoute, private salutiSrv : SalutiDataService) { }

  ngOnInit() {
    this.utente = this.route.snapshot.params['userid'];
  }
}
