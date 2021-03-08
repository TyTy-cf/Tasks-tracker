
import { Server } from './server';
import { Client } from './client';

export class Project {

  //#region property createAt
  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  //#endregion

  //#region property project
  private _server: Server;
  public get server(): Server {
    return this._server;
  }
  public set server(value: Server) {
    this._server = value;
  }
  //#endregion

  //#region property user
  private _client: Client;
  public get client(): Client {
    return this._client;
  }
  public set client(value: Client) {
    this._client = value;
  }
  //#endregion

  constructor() { }
}
