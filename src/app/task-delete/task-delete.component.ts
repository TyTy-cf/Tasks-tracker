import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
})
export class TaskDeleteComponent implements OnInit {

  /**
   * @var task ongoing to be deleted
   */
  public task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
