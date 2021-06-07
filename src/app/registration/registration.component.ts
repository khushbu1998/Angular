import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{Customer} from '../Customer';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() {
    
   }

 
   public customer: Customer=new Customer()

  ngOnInit(): void {
  }


  

  mySubmit(regForm:any){

    console.log("form submitted",regForm);
    console.log(this.customer.name,"---",this.customer.email,"---",this.customer.mobile);
    alert("form submitted");
  }




}
