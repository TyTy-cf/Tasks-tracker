import {Component, Input, OnInit} from '@angular/core';
import { faEye, faCheck, faCopy, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from '../../services/task.service';
import {TaskInfo } from '../../services/abstract.task-service';
import {Guid} from 'guid-typescript';
import {Task} from '../../models/task';
import {ProjectInfo} from '../../services/abstract.projet-service';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {

  /**
   * @private TaskInfo
   */
  public tasks: TaskInfo[];
  projects: ProjectInfo[];
  submitted = false;

  @Input()
  task: Task;
  selectedProjectGuid: Guid;

  /** Icons */
  public faCheck = faCheck;
  public faEye = faEye;
  public faCopy = faCopy;
  public faTrash = faTrash;
  public faPlusCircle = faPlusCircle;

  constructor(
      private taskService: TaskService,
      private projectService: ProjectService
  ) {
    this.task = new Task();
  }

  async ngOnInit(): Promise<void> {
    this.tasks = await this.taskService.getTasksListAsync();
    this.projects = await this.projectService.getProjectsList();
  }

  async duplicateTask(id: Guid): Promise<void> {
    await this.taskService.getTaskAsync(id).then((t) => {
      const newTask = new Task();
      newTask.title = t.task.title;
      newTask.user = t.task.user;
      newTask.project = t.task.project;
      newTask.createAt = t.task.createAt;
      newTask.continue = t.task.continue;
      newTask.duration = t.task.duration;
      this.taskService.addTask(Guid.create(), newTask);
    });
  }

  async addTask(): Promise<void> {
    await this.projectService.getProjectAsync(this.selectedProjectGuid).then((p) => {
      const newTask = new Task();
      newTask.title = this.task.title;
      newTask.user = this.task.user;
      newTask.project = p.project;
      newTask.createAt = this.task.createAt;
      newTask.continue = this.task.continue;
      newTask.duration = this.task.duration;
      this.taskService.addTask(Guid.create(), newTask);
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async deleteTask(id: Guid): Promise<void> {
    await this.taskService.deleteTaskAsync(id);
  }

}
