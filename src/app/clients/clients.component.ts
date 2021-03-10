import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ClientInfo} from '../../services/abstract.client-service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
})
export class ClientsComponent implements OnInit {

  clients: ClientInfo[];

  public faTrash = faTrash;

  constructor(private clientService: ClientService) { }

  async ngOnInit(): Promise<void> {
    this.clients = await this.clientService.getClientsList();
  }

  async deleteClient(id: Guid): Promise<void> {
    await this.clientService.deleteClientAsync(id).then((clients) => {
      this.clients = clients;
    });
  }

}
