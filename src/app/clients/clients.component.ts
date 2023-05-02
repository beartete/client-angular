import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent  implements OnInit{

  clients: Client[] = [];

  constructor (private clienteService: ClientService){}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clienteService.getClients().subscribe(
      {
        next: data => this.clients = data,
        error: msg => console.log("Erro ao chamar o endpont" + msg)
      }
    )
  }

}
