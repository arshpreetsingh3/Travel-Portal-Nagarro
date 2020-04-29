import { Component, OnInit } from '@angular/core';  
import { FormGroup, Validators, FormControl } from '@angular/forms';   
import { AdminLoginDetails } from '../classes/admin-login-details';  
import { AdminLoginService } from '../services/admin-login.service';  
import { Router } from '@angular/router';  

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  private adminLoginDetail = new AdminLoginDetails();  
  
  constructor(private adminLoginService : AdminLoginService, private router : Router) { }  
  
  ngOnInit() {  
    if((this.adminLoginService.isLoggedIn()) )  
    {  
        this.router.navigate(['/profile']);  
    }  
    else  
    {  
        console.log("login unsuccesssful");
        this.router.navigate(['/login']);  
    }  
  }  
  
  // create the form object.  
  form = new FormGroup({  
    email : new FormControl('' , Validators.required),  
    password : new FormControl('' , Validators.required)  
  });  
  
  Login(AdminLoginInformation)  
  {  
      this.adminLoginDetail.email = this.Email.value;  
      this.adminLoginDetail.password = this.Password.value;  
  
      this.adminLoginService.login(this.adminLoginDetail).subscribe(  
        response => {  
            let result =  response.json();  
            console.log(result);
              
            if(result > 0)  
            {  
              let token = response.headers.get("Authorization");  
              console.log(token)
  
              localStorage.setItem("token" , token);  
              localStorage.setItem("id" , result);  
    
              this.router.navigate(['/profile', result]);  
              
              // this.router.navigate(['/profile']);
            }  
            if(result == -1)  
            {  
              alert("please register before login Or Invalid combination of Email and password");  
            }  
             
        },  
        error => {  
            console.log("Error in authentication");  
        }  
      );  
  }  
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  
  
}  
