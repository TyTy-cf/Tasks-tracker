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
        const user = new User();
        user.firstName = 'Kevin';
        user.lastName = 'TOURRET';
        user.email = 'kevin@drosalys.fr';
        user.phone = '0693827146';
        user.password = 'pwd';
        const user1 = new User();
        user1.firstName = 'Théau';
        user1.lastName = 'GONCALVES';
        user1.email = 'theau@drosalys.fr';
        user1.password = 'pwd';
        user1.phone = '0673918246';
        const user2 = new User();
        user2.firstName = 'Benjamin';
        user2.lastName = 'GEORGEAULT';
        user2.email = 'benjamin@drosalys.fr';
        user2.password = 'pwd';
        user2.phone = '0626488642';
        const user3 = new User();
        user3.firstName = 'Nicolas';
        user3.lastName = 'AMBLARD';
        user3.email = 'nicolas@drosalys.fr';
        user3.password = 'pwd';
        user3.phone = '0641638975';
        this.users.push({id: Guid.create(), user});
        this.users.push({id: Guid.create(), user: user1});
        this.users.push({id: Guid.create(), user: user2});
        this.users.push({id: Guid.create(), user: user3});
    }

    async addUserAsync(id: Guid, user: User): Promise<void> {
        await this.users.push({id, user});
    }

    deleteUserAsync(id: Guid): Promise<UserInfo[]> {
        this.users = this.users.filter(user => user.id !== id);
        return Promise.resolve(this.users);
    }

    editUserAsync(id: Guid, user: User): Promise<UserInfo> {
        return Promise.resolve(undefined);
    }

    getUserAsync(id: Guid): Promise<UserInfo> {
        if (this.users.length === 0) {
            return Promise.reject(new Error('No users available'));
        }
        const user = this.users.filter(t => t.id.equals(id))[0];
        if (user) {
            return Promise.resolve(user);
        }
        return Promise.reject(new Error('Didn\'t find the user'));
    }

    getUsersList(): Promise<UserInfo[]> {
        return Promise.resolve(this.users);
    }

}
