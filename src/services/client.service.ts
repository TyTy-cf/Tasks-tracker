import { Injectable } from '@angular/core';
import { AbstractClientService, ClientInfo } from './abstract.client-service';
import { Guid } from 'guid-typescript';
import { Client } from '../models/client';


@Injectable({
    providedIn: 'root',
})
export class ClientService implements AbstractClientService {

    clients: ClientInfo[] = new Array<ClientInfo>();

    constructor() {
        const client = new Client('Clément', 'Barsalon', '0615595753', 'barsalon.clement@cdn.fr');
        const client1 = new Client('Maxime', 'BONNOT', '0612568754', 'maxime.bonnot@1m2p.fr');
        this.clients.push({id: Guid.create(), client});
        this.clients.push({id: Guid.create(), client: client1});
    }

    createClientAsync(id: Guid, client: Client): Promise<ClientInfo> {
        return Promise.resolve(undefined);
    }

    deleteClientAsync(id: Guid): Promise<void> {
        return Promise.resolve(undefined);
    }

    editClientAsync(id: Guid, client: Client): Promise<ClientInfo> {
        return Promise.resolve(undefined);
    }

    async getClientAsync(id: Guid): Promise<ClientInfo> {
        if (this.clients.length === 0) {
            return Promise.reject(new Error('No client available'));
        }
        const client = this.clients.filter(c => c.id.equals(id))[0];
        if (client) {
            return Promise.resolve(client);
        }
        return Promise.reject(new Error('Didn\'t find the client'));
    }

    getClientsList(): Promise<ClientInfo[]> {
        return Promise.resolve(this.clients);
    }
}
