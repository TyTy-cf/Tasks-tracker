import { Guid } from 'guid-typescript';
import { Server } from 'src/models/server';

export interface ServerInfo {
    id: Guid;
    server: Server;
}

export abstract class AbstractServersService {
    abstract addServer(id: Guid, client: Server): Promise<void>;
    abstract deleteServerAsync(id: Guid): Promise<ServerInfo[]>;
    abstract editServerAsync(id: Guid, client: Server): Promise<ServerInfo>;
    abstract getServerAsync(id: Guid): Promise<ServerInfo>;
    abstract getServersList(): Promise<ServerInfo[]>;
}
