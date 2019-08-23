import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'vf-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.scss']
})
export class SubsComponent implements OnInit {

  public test = 0;

  public data;
  constructor(public users: UsersService) { }
  ngOnInit () : void {
    this.users.data.subscribe( data => {
      console.log(data);
      this.data = data;
    });
    this.test = 1;
  }

}
