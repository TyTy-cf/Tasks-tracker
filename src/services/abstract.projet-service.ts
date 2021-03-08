import { Guid } from 'guid-typescript';
import { Project } from '../models/project';

export interface ProjectInfo {
    id: Guid;
    project: Project;
}

export abstract class AbstractProjectService {
    abstract createProjectAsync(id: Guid, project: Project): Promise<ProjectInfo>;
    abstract deleteProjectAsync(id: Guid): Promise<void>;
    abstract editProjectAsync(id: Guid, project: Project): Promise<ProjectInfo>;
    abstract getProjectAsync(id: Guid): Promise<ProjectInfo>;
    abstract getProjectsList(): Promise<ProjectInfo[]>;
}
