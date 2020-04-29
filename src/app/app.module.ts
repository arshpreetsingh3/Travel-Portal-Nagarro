import { SignupComponent } from './signup/signup.component';
// import { SignupComponent } from './signup/singup.component';
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, Component } from '@angular/core';  
  
// import Http module  
import { HttpModule} from '@angular/http';  
  
// import ReactiveFormsModule for reactive form  
import { ReactiveFormsModule } from '@angular/forms';  
  
// import module for Routing.  
import { RouterModule } from '@angular/router';  
  
import { AppComponent } from './app.component';  
import { LoginComponent } from './login/login.component';  
import { HomeComponent } from './home/home.component';  
// import { SignupComponent } from './signup/signup.component';  
import { AdminService } from './services/admin.service';  
import { ProfileComponent } from './profile/profile.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { TicketConfirmationComponent } from './ticket-confirmation/ticket-confirmation.component';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    LoginComponent,  
    HomeComponent,  
    SignupComponent,  
    ProfileComponent, SignupsuccessComponent, GenerateTicketComponent, ViewTicketComponent, ForgotPasswordComponent, AdminLoginComponent, TicketConfirmationComponent  
  ],  
  imports: [  
    BrowserModule,  
    ReactiveFormsModule,  
    HttpModule,  
    RouterModule.forRoot([  
      {  
        path : '',  
        component : LoginComponent   
      }, 
      {  
        path : 'forgot-password',  
        component : ForgotPasswordComponent  
      },
      {  
        path : 'admin-login',  
        component : AdminLoginComponent  
      }, 
        
      {  
        path : 'signup',  
        component : SignupComponent   
      },  
      {  
        path : 'profile/:adminId',  
        component : ProfileComponent  
      } ,
      // {  
      //   path : 'profile',  
      //   component : ProfileComponent  
      // },
      {

        path : 'signupsuccess',
        component : SignupsuccessComponent 
      },
      {

        path : 'view-ticket',
        component : ViewTicketComponent 
      },
      {

        path : 'ticket-confirmation',
        component : TicketConfirmationComponent 
      },
      {

        path : 'generate-ticket',
        component : GenerateTicketComponent 
      }
    ])  
  
  ],  
  providers: [  
    AdminService  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  