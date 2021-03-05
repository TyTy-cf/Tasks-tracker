import { Injectable } from '@angular/core';
import { AbstractUserService, UserInfo } from './abstract.user-service';
import { Guid } from 'guid-typescript';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root',
})
export class UserService implements AbstractUserService {

    users: UserInfo[] = new Array<UserInfo>();

    constructor() {
        const user = new User('Kevin', 'TOURRET', 'kevin@drosalys.fr', 'pwd');
        const user1 = new User('Théau', 'GONCALVES', 'theau@drosalys.fr', 'pwd');
        const user2 = new User('Benjamin', 'GEORGEAULT', 'benjamin@drosalys.fr', 'pwd');
        const user3 = new User('Nicolas', 'AMBLARD', 'nicolas@drosalys.fr', 'pwd');
        this.users.push({id: Guid.create(), user});
        this.users.push({id: Guid.create(), user: user1});
        this.users.push({id: Guid.create(), user: user2});
        this.users.push({id: Guid.create(), user: user3});
    }

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
        return Promise.resolve(this.users);
    }

}
