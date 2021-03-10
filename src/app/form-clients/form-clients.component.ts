import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../../models/client';
import {ClientService} from '../../services/client.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Guid} from 'guid-typescript';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.scss']
})
export class FormClientsComponent implements OnInit {

  @Input()
  client: Client;
  private submitted = false;
  public faPlusCircle = faPlusCircle;

  constructor(private clientService: ClientService) {
    this.client = new Client();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }

  addClient(): void {
    this.clientService.addClient(Guid.create(), this.client).then((c) => {});
  }

}
