import { Component, OnInit } from '@angular/core';
import { Worker } from '../../models/worker';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit {

  workers: Worker[];

  constructor() { }

  ngOnInit(): void {
    this.workers = [
      {
        guid: Guid.create(),
        firstName: 'Kévin',
        lastName: 'TOURRET',
        email: 'kevin@drosalys.fr',
      },
      {
        guid: Guid.create(),
        firstName: 'Nicolas',
        lastName: 'AMBLARD',
        email: 'nicolas@drosalys.fr',
      },
      {
        guid: Guid.create(),
        firstName: 'Théau',
        lastName: 'GONCALVES',
        email: 'theau@drosalys.fr',
      },
      {
        guid: Guid.create(),
        firstName: 'Benjamin',
        lastName: 'GEORGEAULT',
        email: 'benjamin@drosalys.fr',
      }
    ];
  }

}
