import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {ClientInfo} from '../../services/abstract.client-service';
import {Client} from '../../models/client';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {

  clients: ClientInfo[];
  private submitted = false;

  @Input()
  client: Client;

  public faPlusCircle = faPlusCircle;

  constructor(private clientService: ClientService) {
    this.client = new Client();
  }

  async ngOnInit(): Promise<void> {
    this.clients = await this.clientService.getClientsList();
  }

  async addClient(): Promise<void> {
    await this.clientService.addClient(Guid.create(), this.client);
  }

  onSubmit(): void {
    this.submitted = true;
  }

  async deleteClient(id: Guid): Promise<void> {
    await this.clientService.deleteClientAsync(id);
  }

}
