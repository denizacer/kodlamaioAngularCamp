import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  isLoggedIn(){
    const token=localStorage.getItem('token');
    if(token){
      return true;
    }
    else{
      return false
    }
  }

  logOut(){
    localStorage.removeItem("token");
  }
}
