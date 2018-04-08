import { AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

//serviecs
import { ClientService } from './../../services/client.service';

//models
import { Client } from './../../models/client.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit() {
   this.clientService.getClients().valueChanges().subscribe(klijenti => {
     this.clients = klijenti;
     console.log(this.clients);
   });
   
  
  }

}
