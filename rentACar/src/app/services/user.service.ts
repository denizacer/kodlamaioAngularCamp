import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private httpClient:HttpClient) { }


  addUser(user:User):Observable<User>{
   
    return this.httpClient.post<User>("http://localhost:3000/users",user)

  }

  login(user:User):Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users?email="+user.email+"&password="+user.password)
  }
}
