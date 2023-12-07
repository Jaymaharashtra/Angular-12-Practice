import { Component, OnInit } from '@angular/core';
import {UserDataService} from '../Service/user-data.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
users:any;
  constructor(private user : UserDataService) { 
    this.users = user.user();
  }

  ngOnInit(): void {
  }

}
