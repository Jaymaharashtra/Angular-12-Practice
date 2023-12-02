import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
@ Input() data : {name:string, Role:string}={name:'',Role:''};
  ngOnInit(): void {
  } 

}
