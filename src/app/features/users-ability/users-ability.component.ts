import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'vf-users-ability',
  templateUrl: './users-ability.component.html',
  styleUrls: ['./users-ability.component.scss']
})
export class UsersAbilityComponent implements OnInit {

  constructor(public usersService: UsersService) { }

  ngOnInit() {
  }

}
