import { Guid } from 'guid-typescript';
import { Client } from 'src/models/client';

export interface ClientInfo {
    id: Guid;
    client: Client;
}

export abstract class AbstractClientService {
    abstract addClient(id: Guid, client: Client): Promise<void>;
    abstract deleteClientAsync(id: Guid): Promise<void>;
    abstract editClientAsync(id: Guid, client: Client): Promise<ClientInfo>;
    abstract getClientAsync(id: Guid): Promise<ClientInfo>;
    abstract getClientsList(): Promise<ClientInfo[]>;
}
