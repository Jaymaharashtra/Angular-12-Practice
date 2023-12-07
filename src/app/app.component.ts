import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserDataService} from './Service/user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send Data From Parent to Child';
  users:any;
  constructor(private userdata : UserDataService){
    console.log("userdata",userdata.user());
    this.users = userdata.user();
  }
 
}
