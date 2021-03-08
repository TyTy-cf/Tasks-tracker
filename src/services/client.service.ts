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
        const client = new Client();
        client.lastName = 'Barsalon';
        client.firstName = 'Clément';
        client.phone = '0615595753';
        client.email = 'barsalon.clement@cdn.fr';
        const client1 = new Client();
        client1.lastName = 'Maxime';
        client1.firstName = 'BONNOT';
        client1.phone = '0612568754';
        client1.email = 'maxime.bonnot@1m2p.fr';
        this.clients.push({id: Guid.create(), client});
        this.clients.push({id: Guid.create(), client: client1});
    }

    async addClient(id: Guid, client: Client): Promise<void> {
        await this.clients.push({id, client});
    }

    async deleteClientAsync(id: Guid): Promise<ClientInfo[]> {
        this.clients = this.clients.filter(client => client.id !== id);
        return Promise.resolve(this.clients);
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
