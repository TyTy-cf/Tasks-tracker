
import { Server } from './server';
import { Client } from './client';

export class Project {
  name: string;
  server: Server;

  //#region property firstName
  private _client: Client;
  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    // falsy : undefined, 0, null, NaN, "", false
    if (!value) {
      throw new Error('The client cannot be empty ');
    }
    this._client = value;
  }
  //#endregion

  constructor(name: string, server: Server) {
    this.name = name;
    this.server = server;
  }
}
