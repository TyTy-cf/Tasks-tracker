import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  /**
   * @private task
   */
  public task: Task = {
    guid: Guid.create(),
    name: 'Task de test',
    time: '5h',
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
