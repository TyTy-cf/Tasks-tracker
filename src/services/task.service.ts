import { AbstractTaskService, TaskInfo } from './abstract.task-service';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task';
import { UserService } from './user.service';
import { ProjectService } from './project.service';

@Injectable({
    providedIn: 'root',
})
export class TaskService implements AbstractTaskService {

    tasks: TaskInfo[] = new Array<TaskInfo>();

    constructor(
        private userService: UserService,
        private projectService: ProjectService
    ) {
        const task = new Task();
        task.title = 'Doing TrackR Drosalys';
        task.user = userService.users[0].user;
        task.project = projectService.projects[0].project;
        task.continue = false;
        const task1 = new Task();
        task1.title = '1M2P';
        task1.user = userService.users[0].user;
        task1.project = projectService.projects[1].project;
        task1.continue = false;
        const task2 = new Task();
        task2.title = 'Doing trainings';
        task2.user = userService.users[1].user;
        task2.project = projectService.projects[1].project;
        task2.continue = true;
        const task3 = new Task();
        task3.title = 'Doing things on CDN';
        task3.user = userService.users[2].user;
        task3.project = projectService.projects[0].project;
        task3.continue = false;
        task.duration = 2.5;
        task.taskNumber = 3541;
        task1.duration = 14;
        task1.taskNumber = 1458;
        task2.duration = 35;
        task2.taskNumber = 4589;
        task3.duration = 21;
        task3.taskNumber = 2145;
        this.tasks.push({id: Guid.create(), task});
        this.tasks.push({id: Guid.create(), task: task1});
        this.tasks.push({id: Guid.create(), task: task2});
        this.tasks.push({id: Guid.create(), task: task3});
    }

    async addTask(id: Guid, task: Task): Promise<void> {
        await this.tasks.push({id, task});
    }

    deleteTaskAsync(id: Guid): Promise<TaskInfo[]> {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return Promise.resolve(this.tasks);
    }

    async getTaskAsync(id: Guid): Promise<TaskInfo> {
        if (this.tasks.length === 0) {
            return Promise.reject(new Error('No task available'));
        }
        const task = this.tasks.filter(t => t.id.equals(id))[0];
        if (task) {
            return Promise.resolve(task);
        }
        return Promise.reject(new Error('Didn\'t find the task'));
    }

    getTasksListAsync(): Promise<TaskInfo[]> {
        return Promise.resolve(this.tasks);
    }

    getTasksListByUserAsync(userId: Guid): Promise<TaskInfo[]> {
        return Promise.resolve([]);
    }

}
