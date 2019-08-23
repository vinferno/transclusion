import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'vf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'transclusion';
  data;
  constructor(public users: UsersService) { }
  ngOnInit () : void {
    this.users.data.subscribe( data => {
      console.log(data);
      // this.data = data;
    });
  }
}
