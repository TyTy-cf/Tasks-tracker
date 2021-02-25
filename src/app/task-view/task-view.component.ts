import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
})
export class TaskViewComponent implements OnInit {

  public taskGuid: Guid;
  private activatedRoute: ActivatedRoute;

  constructor() { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.taskGuid = Guid.parse(params.id);
    });
  }

}
