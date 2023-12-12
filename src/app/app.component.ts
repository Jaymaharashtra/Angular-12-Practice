import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserDataService} from './Service/user-data.service'
import {DataSetService} from './Service/data-set.service'

interface dataType{
  name:string,
  id:number,
  add:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send Data From Parent to Child';
 
  constructor(){  }

  getdata(){
    const data:dataType= {
      name:'pratham',
      id:100,
      add: "19 Bhosari Pune"
    }
    return data;
   }
  
 
}
