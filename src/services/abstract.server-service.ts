import { Guid } from 'guid-typescript';
import { Server } from 'src/models/server';

export interface ServerInfo {
    id: Guid;
    server: Server;
}

export abstract class AbstractServersService {
    abstract createServerAsync(id: Guid, client: Server): Promise<ServerInfo>;
    abstract deleteServerAsync(id: Guid): Promise<void>;
    abstract editServerAsync(id: Guid, client: Server): Promise<ServerInfo>;
    abstract getServerAsync(id: Guid): Promise<Server>;
    abstract getServersList(): Promise<ServerInfo[]>;
}
