import { Injectable } from '@angular/core';  
import { Http, RequestOptions , Headers } from '@angular/http';  
import { Observable } from 'rxjs';  
import { AdminLoginDetails } from '../classes/admin-login-details';  
import { Router } from '@angular/router'; 

import { JwtHelperService } from '@auth0/angular-jwt'; 

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  
  private  baseUrl = "http://localhost:8080/travelportal/";  
  // Base URL  
  // private  baseUrl = "http://localhost:3000/user/";

   

  
  // http://localhost:8080/finalexitproject/ 
  // http://localhost:3000/user/getusers   ---------- http://localhost:8080/bookapi/api/book
  
  constructor(private http: Http, private router : Router) { }   
  
  login(adminLoginDetail : AdminLoginDetails) : Observable<any>  
  {  
      let url = this.baseUrl + "user/login";  
      return this.http.post(url, adminLoginDetail);  
  }  
  
  logout()   
  {   
    // Remove the token from the localStorage.  
    localStorage.removeItem('token');  
  
    this.router.navigate(['']);  
  
  }  
  
  /* 
  * Check whether User is loggedIn or not. 
  */  
  
  isLoggedIn() {   
  
    // create an instance of JwtHelper class.  
    let jwtHelper = new JwtHelperService();  
  
    // get the token from the localStorage as we have to work on this token.  
    let token = localStorage.getItem('token');  
  
    // check whether if token have something or it is null.  
    if(!token)  
    {  
      return false;  
    }  
  
    // get the Expiration date of the token by calling getTokenExpirationDate(String) method of JwtHelper class. this method accepts a string value which is nothing but a token.  
  
    if(token)  
    {  
      let expirationDate = jwtHelper.getTokenExpirationDate(token);  
  
      // check whether the token is expired or not by calling isTokenExpired() method of JwtHelper class.  
  
      let isExpired = jwtHelper.isTokenExpired(token);  
  
      return !isExpired;      
    }     
  }  
    
    
  getAdminDetail(adminId) : Observable<any>  
  {  
      let url = this.baseUrl + "getAdminData/" + adminId;  
  
       // create an instance of Header object.  
      let headers = new Headers();  
  
      // get token from localStorage.  
      let token = localStorage.getItem('token');  
  
      // Append Authorization header.  
      headers.append('Authorization' , 'Bearer ' + token);  
  
      // create object of RequestOptions and include that in it.  
      let options = new RequestOptions( { headers : headers } );  
  
      return this.http.get(url , options);  
  }  
    
}  