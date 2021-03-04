import { Component, OnInit } from '@angular/core';
import { TaskInfo } from '../../services/abstract.task-service';
import { User } from '../../models/user';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
})
export class UserProfilComponent implements OnInit {

  public user: User;
  public myCurrentTasks: TaskInfo[];
  public myTasks: TaskInfo[];

  constructor(private taskService: TaskService) { }

  async ngOnInit(): Promise<void> {
    this.myTasks = await this.taskService.getTasksListAsync();
  }

}
