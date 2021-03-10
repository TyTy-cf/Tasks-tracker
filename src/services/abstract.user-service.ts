import { Guid } from 'guid-typescript';
import { User } from 'src/models/user';

export interface UserInfo {
    id: Guid;
    user: User;
}

export abstract class AbstractUserService {
    abstract addUserAsync(id: Guid, user: User): Promise<void>;
    abstract deleteUserAsync(id: Guid): Promise<UserInfo[]>;
    abstract editUserAsync(id: Guid, user: User): Promise<UserInfo>;
    abstract getUserAsync(id: Guid): Promise<UserInfo>;
    abstract getUsersList(): Promise<UserInfo[]>;
}
