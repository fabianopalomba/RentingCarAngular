import { Component, OnInit } from '@angular/core';
import {AuthappService} from '../services/authapp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public BasicAuth: AuthappService,public route:Router) { }

  ngOnInit(){
  }
  logOut(){
    this.BasicAuth.clearAll();
  }
}
