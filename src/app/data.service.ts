import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  xskating=[{"id":1,"name":"skateboard1", "description":"smooth", price:"1200.0"},
   {"id":2,"name":"skateboard2", "description":"rough", price:"1600.0"},
   {"id":3,"name":"skateboard3", "description":"hard", price:"2100.0"},
   {"id":4,"name":"skateboard4", "description":"rough", price:"5000.0"}
  ];

  xbadminton=[{"id":1,"name":"badminton1", "description":"best", price:"4500.0"},
  {"id":2,"name":"badminton2", "description":"good", price:"2700.0"},
  {"id":3,"name":"badminton3", "description":"v.good", price:"3100.0"},
  {"id":4,"name":"badminton4", "description":"average", price:"2000.0"}
  ];

  xcricketBat=[{"id":1,"name":"bat1", "description":"best", price:"7500.0"},
  {"id":2,"name":"bat2", "description":"good", price:"4700.0"},
  {"id":3,"name":"bat3", "description":"v.good", price:"5500.0"},
  {"id":4,"name":"bat4", "description":"average", price:"2500.0"}
  ];

  constructor() {}
  
    getSkatingData(){
      return this.xskating;
    }

}
