import { AbstractTasksService, TaskInfo } from './abstract.tasks-service';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task';
import {User} from '../models/user';
import {Project} from '../models/project';
import {Server} from '../models/server';
import {Client} from '../models/client';

@Injectable({
    providedIn: 'root',
})
export class TaskService implements AbstractTasksService {

    tasks: TaskInfo[];

    constructor() {
        const user = new User('Kevin', 'TOURRET', 'kevin@drosalys.fr', 'pwd');
        const server = new Server('drosalys JS', 'http://127.0.0.1:4200');
        const server2 = new Server('drosalys-php-cdn', 'http://127.0.0.1:8080');
        const client = new Client('Clément', 'Barsalon', '0698969392');
        const project = new Project('Drosalys projects', server);
        const project2 = new Project('CDN', server2);
        project2.client = client;
        // project.client = client;
        const task = new Task('Doing TrackR Drosalys', user, project);
        const task2 = new Task('Doing trainings', user, project);
        const task3 = new Task('Doing things on CDN', user, project2);
        task.webMastering = true;
        task.duration = 2.5;
        task.taskNumber = 3541;
        task2.webMastering = false;
        task2.duration = 35;
        task2.taskNumber = 4589;
        task3.webMastering = true;
        task3.duration = 21;
        task3.taskNumber = 2145;
        const taskInfo = {
            id: Guid.create(),
            task
        };
        const taskInfo2 = {
            id: Guid.create(),
            task: task2
        };
        const taskInfo3 = {
            id: Guid.create(),
            task: task3
        };
        this.tasks = [taskInfo, taskInfo2, taskInfo3];
    }

    createTaskAsync(id: Guid, task: Task): Promise<TaskInfo> {
        return Promise.resolve(undefined);
    }

    deleteTaskAsync(id: Guid): Promise<void> {
        return Promise.resolve(undefined);
    }

    editTaskAsync(id: Guid, task: Task): Promise<TaskInfo> {
        return Promise.resolve(undefined);
    }

    getTaskAsync(id: Guid): Promise<Task> {
        return Promise.resolve(undefined);
    }

    getTasksListByUserAsync(userId: Guid): Promise<TaskInfo[]> {
        return Promise.resolve([]);
    }

    getListTasksAsync(): Promise<TaskInfo[]> {
        return Promise.resolve(this.tasks);
    }

    getTasksListByUserAndLastDateAsync(userId: Guid): Promise<TaskInfo[]> {
        return Promise.resolve([]);
    }

}
