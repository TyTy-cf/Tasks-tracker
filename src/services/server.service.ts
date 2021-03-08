import { Injectable } from '@angular/core';
import { AbstractServersService, ServerInfo } from './abstract.server-service';
import { Guid } from 'guid-typescript';
import { Server } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService implements AbstractServersService {

  servers: ServerInfo[] = new Array<ServerInfo>();

  constructor() {
    const server = new Server();
    server.name = 'drosalys-php-1m2p';
    server.url = 'http://127.126.125.124:4200';
    const server1 = new Server();
    server1.name = 'drosalys-php-cdn';
    server1.url = 'http://127.0.0.1:8080';
    this.servers.push({id: Guid.create(), server});
    this.servers.push({id: Guid.create(), server: server1});
  }

  async addServer(id: Guid, server: Server): Promise<void> {
    await this.servers.push({id, server});
  }

  deleteServerAsync(id: Guid): Promise<void> {
    return Promise.resolve(undefined);
  }

  editServerAsync(id: Guid, client: Server): Promise<ServerInfo> {
    return Promise.resolve(undefined);
  }

  getServerAsync(id: Guid): Promise<ServerInfo> {
    if (this.servers.length === 0) {
      return Promise.reject(new Error('No server available'));
    }
    const server = this.servers.filter(s => s.id.equals(id))[0];
    if (server) {
      return Promise.resolve(server);
    }
    return Promise.reject(new Error('Didn\'t find the server'));
  }

  getServersList(): Promise<ServerInfo[]> {
    return Promise.resolve(this.servers);
  }
}
