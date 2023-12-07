import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserDataService} from './Service/user-data.service'
import {DataSetService} from './Service/data-set.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send Data From Parent to Child';
  users:any;
  constructor(private dataset : DataSetService){
   
     dataset.funDataSet().subscribe((data)=>{
      this.users = data;
      console.log('data',data);
    })
  }

  
 
}
