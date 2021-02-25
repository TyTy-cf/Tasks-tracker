import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { Guid } from 'guid-typescript';
import { faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
})

export class TasksComponent implements OnInit {

  /**
   * @private tasks
   */
  public tasks: Task[];

  /**
   * Icons
   */
  public trashIcon = faTrash;
  public faEye = faEye;

  constructor() {
  }

  ngOnInit(): void {
    this.tasks = [
      {
        guid: Guid.create(),
        name: 'Task de test',
        time: 1.5,
        worker: {
          guid: Guid.create(),
          firstName: 'Kévin',
          lastName: 'TOURRET',
          email: 'kevin@drosalys.fr',
          password: 'pwd',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 2',
        time: 2,
        worker: {
          guid: Guid.create(),
          firstName: 'Nicolas',
          lastName: 'AMBLARD',
          email: 'nicolas@drosalys.fr',
          password: 'pwd',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 3',
        time: 0.5,
        worker: {
          guid: Guid.create(),
          firstName: 'Théau',
          lastName: 'GONCALVES',
          email: 'theau@drosalys.fr',
          password: 'pwd',
        },
      },
      {
        guid: Guid.create(),
        name: 'Task de test 4',
        time: 5,
        worker: {
          guid: Guid.create(),
          firstName: 'Benjamin',
          lastName: 'GEORGEAULT',
          email: 'benjamin@drosalys.fr',
          password: 'pwd',
        },
      }
    ];
  }

}
