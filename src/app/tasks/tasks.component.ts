import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
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
  public tasks: Task[];

  constructor() {
  }

  ngOnInit(): void {
    this.tasks = [
      {
        guid: Guid.create(),
        name: 'Task de test',
        time: 56112,
        worker: {
          guid: Guid.create(),
          firstName: 'Kévin',
          lastName: 'TOURRET',
          email: 'kevin@drosalys.fr',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 2',
        time: 98756,
        worker: {
          guid: Guid.create(),
          firstName: 'Nicolas',
          lastName: 'AMBLARD',
          email: 'nicolas@drosalys.fr',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 3',
        time: 45369,
        worker: {
          guid: Guid.create(),
          firstName: 'Théau',
          lastName: 'GONCALVES',
          email: 'theau@drosalys.fr',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 4',
        time: 45896,
        worker: {
          guid: Guid.create(),
          firstName: 'Benjamin',
          lastName: 'GEORGEAULT',
          email: 'benjamin@drosalys.fr',
        },
      }
    ];
  }

}
