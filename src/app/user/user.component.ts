import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../services/data/user-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from "@angular/common";

export class User{
  constructor(
    public firstName:string,
    public lastName:string,
    public phone:string,
    public email:string,
    public password:string,
) {
  }
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  email: string = '';
  user: User = new User ("","","","","")
  onlyread : boolean = false;
  onlyreaduser: boolean = false;

  constructor(private route:Router,private userService: UserDataService,location:Location) {
    route.events.subscribe(val => {
      if (location.path() == "/user") {
        this.getUser(sessionStorage.getItem("utente"));
        this.onlyread = true;
        this.onlyreaduser = true;
      }
      if (location.path() == "/editUser") {
        this.getUser(sessionStorage.getItem("utente"));
        this.onlyread = false;
        this.onlyreaduser = true;
      }
      if (location.path() == "/register") {
        this.onlyread = false;
        this.onlyreaduser = false;
      }

    })
  }

  ngOnInit(){
  }

  public getUser(email : string){
    this.userService.getUserByEmail(email).subscribe(response => {
      this.user = response;
    })
  }
  addUser(firstName:string, lastName:string, phone:string, email:string, password:string){
    this.user = new User(firstName, lastName, phone, email, password);
    this.userService.addNewUser(this.user).subscribe(response =>{
      sessionStorage.setItem("utente",this.user.email);
      this.route.navigate(['welcome',this.user.email]);
    })
  }
  deleteUser(){
    this.userService.deleteUser().subscribe(response =>{
      sessionStorage.removeItem("utente");
      this.route.navigate(['login']);
    })

  }
}
