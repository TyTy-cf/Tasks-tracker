import {Component, OnInit} from '@angular/core';
import {ServerInfo} from '../../services/abstract.server-service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {ServerService} from '../../services/server.service';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  servers: ServerInfo[];

  public faTrash = faTrash;

  constructor(private serverService: ServerService) { }

  async ngOnInit(): Promise<void> {
    this.servers = await this.serverService.getServersList();
  }

  async deleteServer(id: Guid): Promise<void> {
    await this.serverService.deleteServerAsync(id).then((servers) => {
      this.servers = servers;
    });
  }

}
