import {Injectable, OnInit} from '@angular/core';
import { AbstractProjectService, ProjectInfo } from './abstract.projet-service';
import { Project } from '../models/project';
import { Guid } from 'guid-typescript';
import { ServerService } from './server.service';
import { ClientService } from './client.service';

@Injectable({
    providedIn: 'root',
})
export class ProjectService implements AbstractProjectService {

    projects: ProjectInfo[] = new Array<ProjectInfo>();

    constructor(
        private serverService: ServerService,
        private clientService: ClientService
    ) {
        this.projects.push({
            id: Guid.create(),
            project: new Project(
                'CDN',
                this.serverService.servers[1].server,
                this.clientService.clients[0].client
            )
        });
        this.projects.push({
            id: Guid.create(),
            project: new Project(
                '1M2P',
                this.serverService.servers[0].server,
                this.clientService.clients[1].client
            )
        });
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

    getProjectAsync(id: Guid): Promise<ProjectInfo> {
        if (this.projects.length === 0) {
            return Promise.reject(new Error('No task available'));
        }
        const project = this.projects.filter(p => p.id.equals(id))[0];
        if (project) {
            return Promise.resolve(project);
        }
        return Promise.reject(new Error('Didn\'t find the project'));
    }

    getProjectsList(): Promise<ProjectInfo[]> {
        return Promise.resolve(this.projects);
    }
}
