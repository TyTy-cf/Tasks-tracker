
import { Server } from './server';
import { Client } from './client';

export class Project {
  name: string;
  server: Server;
  client: Client;

  constructor(name: string, server: Server, client: Client) {
    this.name = name;
    this.server = server;
    this.client = client;
  }
}
