import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user(){
    return [
      {name:'Prathamesh',Age:23, Email : 'pratham@test.com'},
      {name:'Nitin',Age:24, Email : 'Nitin@test.com'},
      {name:'Yogiraj',Age:26, Email : 'yogi@test.com'}
    ]
  }
}
