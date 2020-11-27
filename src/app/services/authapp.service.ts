import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthappService {
  private id: string[];

  constructor(private httpClient:HttpClient) { }

  autentica(Userid : string ,Password : string){
    this.id = [Userid,Password];
    return this.httpClient.post(`http://localhost:8080/untitledspring_war/api/login`,this.id);
  }

  loggedUser(){
    let utente = sessionStorage.getItem("utente");
    return (sessionStorage.getItem("utente")!=null)? utente :"";
  }
  isLogged = () => (sessionStorage.getItem("utente")!=null)?true :false;

  clearAll = () => sessionStorage.removeItem("utente");

}
