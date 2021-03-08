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
        private clientService: ClientService,
    ) {
        const project = new Project();
        project.name = 'CDN';
        project.server = this.serverService.servers[1].server;
        project.client = this.clientService.clients[0].client;
        const project1 = new Project();
        project1.name = '1Max2Pistes';
        project1.server = this.serverService.servers[0].server;
        project1.client = this.clientService.clients[1].client;
        this.projects.push({id: Guid.create(), project});
        this.projects.push({id: Guid.create(), project: project1});
    }

    async addProject(id: Guid, project: Project): Promise<void> {
        await this.projects.push({id, project});
    }

    deleteProjectAsync(id: Guid): Promise<ProjectInfo[]> {
        this.projects = this.projects.filter(project => !project.id.equals(id));
        return Promise.resolve(this.projects);
    }

    editProjectAsync(id: Guid, project: Project): Promise<ProjectInfo> {
        return Promise.resolve(undefined);
    }

    getProjectAsync(id: Guid): Promise<ProjectInfo> {
        if (this.projects.length === 0) {
            return Promise.reject(new Error('No project available'));
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
