import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
import { TaskService } from '../../services/task.service';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent implements OnInit {

  submitted = false;
  task: Task;

  constructor(private taskService: TaskService) {
    this.task = new Task();
  }

  onSubmit(): void {
    this.submitted = true;
  }

  ngOnInit(): void {
  }

  addTask(): void {
    this.taskService.createTaskAsync(Guid.create(), this.task);
    alert(this.taskService.tasks.length);
  }
}
