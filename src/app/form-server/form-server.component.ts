import {Component, Input, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Guid} from 'guid-typescript';
import {Server} from '../../models/server';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-form-server',
  templateUrl: './form-server.component.html',
  styleUrls: ['./form-server.component.scss']
})
export class FormServerComponent implements OnInit {

  @Input()
  server: Server;
  private submitted = false;
  public faPlusCircle = faPlusCircle;

  constructor(private serverService: ServerService) {
    this.server = new Server();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async addServer(): Promise<void> {
    return this.serverService.addServer(Guid.create(), this.server).then((s) => { });
  }

}
