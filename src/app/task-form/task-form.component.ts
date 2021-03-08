import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from '../../services/task.service';
import {Guid} from 'guid-typescript';
import {ProjectInfo} from '../../services/abstract.projet-service';
import {ProjectService} from '../../services/project.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {

  submitted = false;
  task: Task;
  projects: ProjectInfo[];

  constructor(
      private taskService: TaskService,
      private projectService: ProjectService
  ) {
    this.task = new Task();
  }

  onSubmit(): void {
    this.submitted = true;
  }

  addTask(): void {
    this.taskService.addTask(Guid.create(), this.task);
  }

  async ngOnInit(): Promise<void> {
    this.projects = await this.projectService.getProjectsList();
  }
}
