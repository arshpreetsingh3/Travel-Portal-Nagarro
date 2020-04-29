import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';  
import { AdminDetail } from '../classes/admin-detail';  
import { TicketService } from '../services/ticket.service';  
import { Router } from '@angular/router'; 
import { TicketDetails } from '../classes/ticket-details';

@Component({
  selector: 'app-generate-ticket',
  templateUrl: './generate-ticket.component.html',
  styleUrls: ['./generate-ticket.component.css']
})
export class GenerateTicketComponent implements OnInit {

  private ticketdetail = new TicketDetails();

  constructor(private ticketService : TicketService , private router : Router) { }

  ngOnInit() {
  }

  form =  new FormGroup({

    requestType : new FormControl('' , Validators.required),
    priority :  new FormControl('' , Validators.required),
    travelCity : new FormControl('' , Validators.required),
    locationCity : new FormControl('' , Validators.required),
     startDate : new FormControl('' , Validators.required),
    endDate : new FormControl('' , Validators.required),
    passportNumber : new FormControl('' , Validators.required),
    projectName :  new FormControl('' , Validators.required),
    expenses : new FormControl('' , Validators.required),
    approverName : new FormControl('' , Validators.required),
    duration : new FormControl('' , Validators.required),
    upperBound : new FormControl('' , Validators.required),
    additionalDetails : new FormControl('' , Validators.required),

  });

  TicketForm(TicketInformation){

    this.ticketdetail.requestType  = this.RequestType.value;
    this.ticketdetail.priority = this.Priority.value; 
    this.ticketdetail.travelCity = this.TravelCity.value;
    this.ticketdetail.locationCity = this.LocationCity.value;
    this.ticketdetail.startDate =this.StartDate.value;
    this.ticketdetail.endDate =this.EndDate.value;
    this.ticketdetail.passportNumber = this.PassportNumber.value;
    this.ticketdetail.projectName = this.ProjectName.value;
    this.ticketdetail.expenses =this.Expenses.value;
    this.ticketdetail.approverName =this.ApproverName.value;
    this.ticketdetail.duration = this.Duration.value;
    this.ticketdetail.upperBound =this.UpperBound.value;
    this.ticketdetail.additionalDetails =this.AdditionalDetails.value;

   this.ticketService.saveTicketDetails(this.ticketdetail).subscribe(  
          response => {  
              let result = response.json();  
              console.log(result)
              if(result > 0)  
              {  
                this.router.navigate(['/view-ticket']);  
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
  
  get RequestType(){  
    return this.form.get('requestType');  
  }

  get Priority(){  
    return this.form.get('priority');  
  }

  get TravelCity(){  
    return this.form.get('travelCity');  
  }

  get LocationCity(){  
    return this.form.get('locationCity');  
  }

  get StartDate(){  
    return this.form.get('startDate');  
  }

  get EndDate(){  
    return this.form.get('endDate');  
  }

  get PassportNumber(){  
    return this.form.get('passportNumber');  
  }

  get ProjectName(){  
    return this.form.get('projectName');  
  }

  get Expenses(){  
    return this.form.get('expenses');  
  }

  get ApproverName(){  
    return this.form.get('approverName');  
  }

  get Duration(){  
    return this.form.get('duration');  
  }
  
  get UpperBound(){  
      return this.form.get('upperBound');  
  }  
  
  get AdditionalDetails(){  
      return this.form.get('additionalDetails');  
  }  
  
  
}  
