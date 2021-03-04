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

    tasks: TaskInfo[];

    constructor(
        private userService: UserService,
        private projectService: ProjectService
    ) {
        const task = new Task('Doing TrackR Drosalys', userService.users[0].user, projectService.projects[0].project, false);
        const task1 = new Task('1M2P', userService.users[0].user,  projectService.projects[1].project, false);
        const task2 = new Task('Doing trainings', userService.users[1].user,  projectService.projects[1].project, true);
        const task3 = new Task('Doing things on CDN', userService.users[2].user,  projectService.projects[0].project, false);
        task.duration = 2.5;
        task.taskNumber = 3541;
        task1.duration = 14;
        task1.taskNumber = 1458;
        task2.duration = 35;
        task2.taskNumber = 4589;
        task3.duration = 21;
        task3.taskNumber = 2145;
        this.tasks = [
            {
                id: Guid.create(),
                task
            },
            {
                id: Guid.create(),
                task: task1
            },
            {
                id: Guid.create(),
                task: task2
            },
            {
                id: Guid.create(),
                task: task3
            }
        ];
    }

    createTaskAsync(id: Guid, task: Task): void {
        this.tasks.push({
            id,
            task
        });
    }

    deleteTaskAsync(id: Guid): Promise<TaskInfo[]> {
        this.tasks = this.tasks.filter(task => task.id !== id);
        return Promise.resolve(this.tasks);
    }

    getTaskAsync(id: Guid): Promise<TaskInfo> {
        if (this.tasks.length === 0) {
            return Promise.reject(new Error('No task available'));
        }
        for (const task of this.tasks) {
            if (task.id === id) {
                return new Promise((resolve, reject) => {
                    resolve(task);
                });
            }
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
