import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'vf-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @Input()
  public usersAbility: UsersService;

  @Input()
  public something;

  @Input()
  public data: { users: User[]};

  @Output()
  public emitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
