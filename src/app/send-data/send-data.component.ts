import { Component, OnInit } from '@angular/core';
import { custommer } from '../custommer';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-send-data',
  templateUrl: './send-data.component.html',
  styleUrls: ['./send-data.component.css']
})
export class SendDataComponent implements OnInit {
  private url: string="http://localhost:9090/cust/new";
  public cust: custommer=new custommer()
  constructor(private http: HttpClient) { }
 // constructor() { }

 public cst:any;
 mySubmit(regForm:any){

  console.log("form submitted",regForm);
  console.log(this.cust.name,"---",this.cust.balance);
  
  this.http.post(this.url,this.cust)
   .subscribe((resData)=>{
   this.cst = resData
})
  alert("form submitted");

}

  ngOnInit(): void {

  }

 

}
