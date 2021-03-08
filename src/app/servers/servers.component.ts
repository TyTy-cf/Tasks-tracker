import {Component, Input, OnInit} from '@angular/core';
import {ServerInfo} from '../../services/abstract.server-service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {ServerService} from '../../services/server.service';
import {Server} from '../../models/server';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  servers: ServerInfo[];
  private submitted = false;

  @Input()
  server: Server;

  public faPlusCircle = faPlusCircle;

  constructor(private serverService: ServerService) {
    this.server = new Server();
  }

  async ngOnInit(): Promise<void> {
    this.servers = await this.serverService.getServersList();
  }

  async addServer(): Promise<void> {
    await this.serverService.addServer(Guid.create(), this.server);
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async deleteTask(id: Guid): Promise<void> {
    await this.serverService.deleteServerAsync(id);
  }

}
