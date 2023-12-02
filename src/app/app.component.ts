import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Send Data From Parent to Child';
  
  userDetails = [
    {name : "Suraj", Role : "Data Science"},
    {name : "Amit", Role : "DevOps"},
    {name : "Nishant", Role : "Data Engineer"},
    {name : "Yogiraj", Role : "App Mod"},
    {name : "Nitin", Role : "Angular Developer"}
  ]
}
