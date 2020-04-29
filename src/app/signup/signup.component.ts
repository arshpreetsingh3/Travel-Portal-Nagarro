import { Component, OnInit } from '@angular/core';  
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { AdminDetail } from '../classes/admin-detail';  
import { AdminService } from '../services/admin.service';  
import { Router } from '@angular/router';  
  
@Component({  
  selector: 'app-signup',  
  templateUrl: './signup.component.html',  
  styleUrls: ['./signup.component.css']  
})  
export class SignupComponent implements OnInit {  
  
  private userDetail = new AdminDetail();  
  
  constructor(private adminService : AdminService, private router : Router) { }  
  
  ngOnInit() {  
  }  
  
  // create the form object.  
  form = new FormGroup({  
      firstName : new FormControl('' , Validators.required), 
      lastName : new FormControl('' , Validators.required),
      bussinessUnit : new FormControl('' , Validators.required),
      title : new FormControl('' , Validators.required),   
      email : new FormControl('' , Validators.required),
      telephone : new FormControl('' , Validators.required), 
      address1 : new FormControl('' , Validators.required),
      address2 : new FormControl('' , Validators.required), 
      city : new FormControl('' , Validators.required),
      state : new FormControl('' , Validators.required), 
      zip : new FormControl('' , Validators.required),
      country : new FormControl('' , Validators.required), 
      password : new FormControl('' , Validators.required),  
      confirmPassword : new FormControl('' , Validators.required),  
      // role : new FormControl('' , Validators.required),  
  });  
  
  UserForm(UserInformation)  
  {  
     let pass = this.Password.value;  
     let confirmPass = this.ConfirmPassword.value;  
  
     if(pass == confirmPass)  
     {  

        this.userDetail.firstName = this.FirstName.value;
        this.userDetail.lastName = this.LastName.value;
        this.userDetail.bussinessUnit = this.BussinessUnit.value;
        this.userDetail.title = this.Title.value;
        this.userDetail.email = this.Email.value;
        this.userDetail.telephone = this.Telephone.value;
        this.userDetail.address1 = this.Address1.value;
        this.userDetail.address2 = this.Address2.value;
        this.userDetail.city = this.City.value;
        this.userDetail.state = this.State.value;
        this.userDetail.zip = this.Zip.value;
        this.userDetail.country = this.Country.value;
        this.userDetail.password = this.Password.value;   
  
        this.adminService.saveAdminDetails(this.userDetail).subscribe(  
          response => {  
              let result = response.json();  
              console.log(result)
              if(result > 0)  
              {  
                this.router.navigate(['/signupsuccess']);  
              }  
              else  
              {  
                  alert("error occur while registring User. please try after sometime.")  
              }  
          },  
          error => {  
            alert("error occur while registring User. please try after sometime.")  
          }  
        );  
          
     }  
     else  
     {  
        alert("Password and confirm password not match.");  
     }  
  }  
  
  get FirstName(){  
    return this.form.get('firstName');  
  }

  get LastName(){  
    return this.form.get('lastName');  
  }

  get BussinessUnit(){  
    return this.form.get('bussinessUnit');  
  }

  get Title(){  
    return this.form.get('title');  
  }

  get Telephone(){  
    return this.form.get('telephone');  
  }

  get Address1(){  
    return this.form.get('address1');  
  }

  get Address2(){  
    return this.form.get('address2');  
  }

  get City(){  
    return this.form.get('city');  
  }

  get State(){  
    return this.form.get('state');  
  }

  get Zip(){  
    return this.form.get('zip');  
  }

  get Country(){  
    return this.form.get('country');  
  }
  
  get Email(){  
      return this.form.get('email');  
  }  
  
  get Password(){  
      return this.form.get('password');  
  }  
  
  get ConfirmPassword(){  
      return this.form.get('confirmPassword');  
  }  
  
  
}  