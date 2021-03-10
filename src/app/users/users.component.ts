import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from '../../services/abstract.user-service';
import {faCheck, faCopy, faTrash, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {

  users: UserInfo[];
  private submitted = false;

  @Input()
  user: User;

  /** Icons */
  public faCheck = faCheck;
  public faCopy = faCopy;
  public faTrash = faTrash;
  public faPlusCircle = faPlusCircle;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.userService.getUsersList();
  }

  async addUser(): Promise<void> {
    await this.userService.addUserAsync(Guid.create(), this.user);
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async deleteTask(id: Guid): Promise<void> {
    await this.userService.deleteUserAsync(id);
  }

}
