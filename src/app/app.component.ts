import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'for loops';
  user = ['Nayan', 'Rutuja', 'Adesh', 'Nitin', 'Gaurav'];

  client = [
    {name : 'Arush', service : ['Social Media Handle'], Location : 'Paris'},
    {name : 'Ajay', service : ['SEO','Marketing','Client Handeling'], Location : 'India'},
    {name : 'Nilesh', service : ['Accountant','Marketing','Client Handeling'], Location : 'Itely'},
    {name : 'Ravi', service : ['Aadhar Enrol','License','MSME'], Location : 'India'},
  ];
}
