import { AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
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

  clients: any[];
  totalOwed: number;
  constructor(
    public clientService: ClientService
  ) { 
  }

  ngOnInit() {
    
   this.clientService.getClients().snapshotChanges().map(klijenti => {
     return klijenti.map(
       action => ({ key: action.key, ...action.payload.val()}));  
   }).subscribe(klijenti => {
        return this.clients = klijenti;
   });

  }

  getTotalOwed() {
    let ukupno = 0;
    for(let i = 0; i < this.clients.length; i++) {
      ukupno += parseFloat(this.clients[i].balance);
    }
    this.totalOwed = ukupno;
  
  }

}
