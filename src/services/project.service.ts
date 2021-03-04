import { Injectable } from '@angular/core';
import { AbstractProjectService, ProjectInfo } from './abstract.projet-service';
import { Project } from '../models/project';
import { Guid } from 'guid-typescript';
import { ServerService } from './server.service';
import { ClientService } from './client.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService implements AbstractProjectService {

    projects: ProjectInfo[];

    constructor(
        private serverService: ServerService,
        private clientService: ClientService
    ) {
        this.projects = [
            {
                id: Guid.create(),
                project: new Project('CDN', serverService.getServersList()[1], clientService.getClientsList()[0])
            },
            {
                id: Guid.create(),
                project: new Project('1M2P', serverService.getServersList()[0], clientService.getClientsList()[1])
            },
        ];
    }

    createProjectAsync(id: Guid, project: Project): Promise<ProjectInfo> {
        return Promise.resolve(undefined);
    }

    deleteProjectAsync(id: Guid): Promise<void> {
        return Promise.resolve(undefined);
    }

    editProjectAsync(id: Guid, project: Project): Promise<ProjectInfo> {
        return Promise.resolve(undefined);
    }

    getProjectAsync(id: Guid): Promise<Project> {
        return Promise.resolve(undefined);
    }

    getProjectsList(): Promise<ProjectInfo[]> {
        return Promise.resolve(this.projects);
    }
}
