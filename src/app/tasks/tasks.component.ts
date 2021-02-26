import { Component, OnInit } from '@angular/core';
import { faTrash, faEye, faCheck } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
import { TaskInfo } from '../../services/abstract.tasks-service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {

  /**
   * @private TaskInfo
   */
  public tasks: TaskInfo[];

  /**
   * Icons
   */
  public trashIcon = faTrash;
  public faEye = faEye;
  public faCheck = faCheck;

  constructor(private taskService: TaskService) {
  }

  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getListTasksAsync(true);
  }

}
