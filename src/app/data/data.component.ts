import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-data',
  //template:
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {


  name="Skate Board";
  pid=99999;
  age="Not applicable";
  avai="In Stock";
  delivery="green";
  btnSend=true;
  blue="blue";
  isMember: boolean=true;

  isShow: boolean=false;

  food = "Chocolate Milk Shake";

  products = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];

   skating=[{"id":1,"name":"skateboard1", "description":"smooth", price:"1200.0"},
   {"id":2,"name":"skateboard2", "description":"rough", price:"1600.0"},
   {"id":3,"name":"skateboard3", "description":"hard", price:"2100.0"},
   {"id":4,"name":"skateboard4", "description":"rough", price:"5000.0"}
  ];

  badminton=[{"id":1,"name":"badminton1", "description":"best", price:"4500.0"},
  {"id":2,"name":"badminton2", "description":"good", price:"2700.0"},
  {"id":3,"name":"badminton3", "description":"v.good", price:"3100.0"},
  {"id":4,"name":"badminton4", "description":"average", price:"2000.0"}
  ];

  cricketBat=[{"id":1,"name":"bat1", "description":"best", price:"7500.0"},
  {"id":2,"name":"bat2", "description":"good", price:"4700.0"},
  {"id":3,"name":"bat3", "description":"v.good", price:"5500.0"},
  {"id":4,"name":"bat4", "description":"average", price:"2500.0"}
  ];

  cskating: boolean=false
  cbadminton: boolean=false
  ccricketBat: boolean =false

  showAlert():void{
    console.log("Hola! "+this.food);
    alert("Hola!!")
  }
  
  showSkating():void{
    if(this.cskating==false){
      this.cskating=true; 
    }
    else if(this.cskating==true){
      this.cskating=false;
    }
  }

  showBadminton():void{
    if(this.cbadminton==false){
      this.cbadminton=true; 
    }
    else if(this.cbadminton==true){
      this.cbadminton=false;
    } 
  }

  showCricket():void{
    if(this.ccricketBat==false){
      this.ccricketBat=true; 
    }
    else if(this.ccricketBat==true){
      this.ccricketBat=false;
    }
  }

  skatingData:any;

  constructor(private dataService: DataService){}

  callService():void{
    this.skatingData=this.dataService.getSkatingData();

  }

  ngOnInit(): void {
  }

}
