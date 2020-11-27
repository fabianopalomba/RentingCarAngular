import { Component, OnInit } from '@angular/core';
import {AuthappService} from '../services/authapp.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userid = '';
  password = '';
  response;

  constructor(public BasicAuth: AuthappService, private route:Router) {
  }

  ngOnInit() {
  }

  gestAuth() {
    this.BasicAuth.autentica(this.userid, this.password).subscribe(response => {
      if(response == null){
        sessionStorage.setItem("utente",this.userid);
        this.route.navigate(['welcome',this.userid]);
      }
    });
  }
}
