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
    this.servers.push({
        id: Guid.create(),
        server: new Server('drosalys-php-1m2p', 'http://127.126.125.124:4200')
    });
    this.servers.push({
      id: Guid.create(),
      server: new Server('drosalys-php-cdn', 'http://127.0.0.1:8080')
    });
  }

  createServerAsync(id: Guid, client: Server): Promise<ServerInfo> {
    return Promise.resolve(undefined);
  }

  deleteServerAsync(id: Guid): Promise<void> {
    return Promise.resolve(undefined);
  }

  editServerAsync(id: Guid, client: Server): Promise<ServerInfo> {
    return Promise.resolve(undefined);
  }

  getServerAsync(id: Guid): Promise<Server> {
    return Promise.resolve(undefined);
  }

  getServersList(): Promise<ServerInfo[]> {
    return Promise.resolve(this.servers);
  }
}
