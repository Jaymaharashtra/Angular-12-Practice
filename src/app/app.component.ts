import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  num = 0;

  counter(type:string){
      if(type=='add'){
        this.num++;
      }else{
        this.num--;
      }
  }

}
