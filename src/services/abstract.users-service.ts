import { Guid } from 'guid-typescript';
import { User } from 'src/models/user';

export interface UserInfo {
    id: Guid;
    task: User;
}

export abstract class AbstractUsersService {
    abstract createUserAsync(id: Guid, user: User): Promise<UserInfo>;
    abstract deleteUserAsync(id: Guid): Promise<void>;
    abstract editUserAsync(id: Guid, user: User): Promise<UserInfo>;
    abstract getUserAsync(id: Guid): Promise<User>;
    abstract getUsersList(): Promise<UserInfo[]>;
}
