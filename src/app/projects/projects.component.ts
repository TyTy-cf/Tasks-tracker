import {Component, Input, OnInit} from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {ProjectInfo} from '../../services/abstract.projet-service';
import {ClientInfo} from '../../services/abstract.client-service';
import {Guid} from 'guid-typescript';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {ClientService} from '../../services/client.service';
import {ServerInfo} from '../../services/abstract.server-service';
import {ServerService} from '../../services/server.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  submitted = false;
  projects: ProjectInfo[];
  clients: ClientInfo[];
  servers: ServerInfo[];

  @Input()
  project: Project;
  selectedClientGuid: Guid;
  selectedServerGuid: Guid;

  /** Icons */
  public faPlusCircle = faPlusCircle;

  constructor(
      private clientService: ClientService,
      private projectService: ProjectService,
      private serverService: ServerService
  ) {
    this.project = new Project();
  }

  async ngOnInit(): Promise<void> {
    await this.projectService.getProjectsList().then((projects) => {
      this.projects = projects;
    });
    await this.clientService.getClientsList().then((clients) => {
      this.clients = clients;
    });
    await this.serverService.getServersList().then((servers) => {
      this.servers = servers;
    });
  }

  async addProject(): Promise<void> {
    await this.serverService.getServerAsync(this.selectedServerGuid).then((s) => {
      this.project.server = s.server;
    });
    await this.clientService.getClientAsync(this.selectedClientGuid).then((c) => {
      this.project.client = c.client;
      this.projectService.addProject(Guid.create(), this.project);
    });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async deleteTask(id: Guid): Promise<void> {
    await this.projectService.deleteProjectAsync(id).then((projects) => {
      this.projects = projects;
    });
  }
}
