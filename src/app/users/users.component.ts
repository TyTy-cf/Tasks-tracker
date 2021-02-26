import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit(): void {
  }

}
