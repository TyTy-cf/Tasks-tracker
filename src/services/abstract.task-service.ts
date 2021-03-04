import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task';

export interface TaskInfo {
    id: Guid;
    task: Task;
}

export abstract class AbstractTaskService {
    abstract createTaskAsync(id: Guid, task: Task): void;
    abstract deleteTaskAsync(id: Guid): Promise<void>;
    abstract getTaskAsync(id: Guid): Promise<TaskInfo>;
    abstract getTasksListAsync(): Promise<TaskInfo[]>;
    abstract getTasksListByUserAsync(userId: Guid): Promise<TaskInfo[]>;
}
