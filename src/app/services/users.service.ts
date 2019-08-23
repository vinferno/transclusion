import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public types: { Users: User};

  public data = new BehaviorSubject({users: [{name: 'vinson'}]});


  constructor() { }

  public addUser(user) {
    const users = this.data.value.users;
    users.push(user);
    this.data.next({ ...this.data.value, ...{users}});
  }
}
