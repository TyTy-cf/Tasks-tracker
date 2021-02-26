import { Injectable } from '@angular/core';
import { AbstractUsersService, UserInfo } from './abstract.users-service';
import { Guid } from 'guid-typescript';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root',
})
export class UserService implements AbstractUsersService {

    users: UserInfo[];

    createUserAsync(id: Guid, user: User): Promise<UserInfo> {
        return Promise.resolve(undefined);
    }

    deleteUserAsync(id: Guid): Promise<void> {
        return Promise.resolve(undefined);
    }

    editUserAsync(id: Guid, user: User): Promise<UserInfo> {
        return Promise.resolve(undefined);
    }

    getUserAsync(id: Guid): Promise<User> {
        return Promise.resolve(undefined);
    }

    getUsersList(): Promise<UserInfo[]> {
        return Promise.resolve([]);
    }

}
