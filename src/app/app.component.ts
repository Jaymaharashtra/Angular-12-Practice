import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'for loops';
  task:any[]=[];

  addTask(item:string){
    console.log(item);
    this.task.push({id:this.task.length, name:item});
  }

  remove(id:number){
    this.task = this.task.filter(item=>item.id!==id);
  }
  
}
