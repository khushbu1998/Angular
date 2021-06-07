import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//import { Customer } from '../Customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 private url: string="http://localhost:9090/cust/list";
public customer:any;
 constructor(private http: HttpClient) { }
//constructor(){}
  ngOnInit(): void {
   // let obv= this.http.get(this.url);
//obv.subscribe(()=> console.log('response recieved'));

   //2. let obv= this.http.get(this.url);
 //obv.subscribe((resData)=>console.log(resData));
  
 //3. wa

this.http.get(this.url)
.subscribe((resData)=>{
   this.customer = resData
   console.log(this.customer);
})
  
  }


}
