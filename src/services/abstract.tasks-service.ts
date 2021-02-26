import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task';

export interface TaskInfo {
    id: Guid;
    task: Task;
}

export abstract class AbstractTasksService {
    abstract createTaskAsync(id: Guid, task: Task): Promise<TaskInfo>;
    abstract editTaskAsync(id: Guid, task: Task): Promise<TaskInfo>;
    abstract deleteTaskAsync(id: Guid): Promise<void>;
    abstract getTaskAsync(id: Guid): Promise<Task>;
    abstract getListTasksAsync(): Promise<TaskInfo[]>;
    abstract getTasksListByUserAsync(userId: Guid): Promise<TaskInfo[]>;
    abstract getTasksListByUserAndLastDateAsync(userId: Guid): Promise<TaskInfo[]>;
}
