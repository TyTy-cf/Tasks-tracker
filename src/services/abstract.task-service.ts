import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task';

export interface TaskInfo {
    id: Guid;
    task: Task;
}

export abstract class AbstractTaskService {
    abstract addTask(id: Guid, task: Task): Promise<void>;
    abstract deleteTaskAsync(id: Guid): Promise<TaskInfo[]>;
    abstract getTaskAsync(id: Guid): Promise<TaskInfo>;
    abstract getTasksListAsync(): Promise<TaskInfo[]>;
    abstract getTasksListByUserAsync(userId: Guid): Promise<TaskInfo[]>;
}
