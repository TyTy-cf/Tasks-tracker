import { Component, OnInit } from '@angular/core';
import { faEye, faCheck, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
import {TaskInfo } from '../../services/abstract.task-service';
import {Guid} from 'guid-typescript';
import {Task} from '../../models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  /**
   * @private TaskInfo
   */
  public tasks: TaskInfo[];

  /** Icons */
  public faCheck = faCheck;
  public faEye = faEye;
  public faCopy = faCopy;
  public faTrash = faTrash;

  constructor(private taskService: TaskService) { }

  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getTasksListAsync();
  }

  duplicateTask(id: Guid): void {
    this.taskService.getTaskAsync(id).then((t) => {
      const newTask = new Task();
      newTask.title = t.task.title;
      newTask.user = t.task.user;
      newTask.project = t.task.project;
      newTask.continue = t.task.continue;
      newTask.duration = t.task.duration;
      this.taskService.addTask(Guid.create(), newTask);
    });
  }

  async deleteTask(id: Guid): Promise<void> {
    await this.taskService.deleteTaskAsync(id);
  }

}
