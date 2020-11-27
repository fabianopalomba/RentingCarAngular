import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient:HttpClient) { }

  getUserByEmail(email:string){
    return this.httpClient.get<User>(`http://localhost:8080/untitledspring_war/api/user/${email}`);
  }
  addNewUser(user : User){
    return this.httpClient.post(`http://localhost:8080/untitledspring_war/api/register`,user);
  }

  deleteUser() {
    return this.httpClient.delete(`http://localhost:8080/untitledspring_war/api/delete/${sessionStorage.getItem("utente")}`,);
  }
}
