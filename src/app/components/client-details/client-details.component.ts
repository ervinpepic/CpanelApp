import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';

import { Client } from './../../models/client.model';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    public clientService: ClientService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    //Get ID from url
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

    //Get client
    this.clientService.getClient(this.id).valueChanges().subscribe(klijent => {
      if (klijent.balance > 0) {
        this.hasBalance = true;
  
      }
      this.client = klijent;
    });
  }

  updateBlance(id: string) {
    //Update client
    this.clientService.updateClient(this.id, this.client);
    this.flashMessagesService.show('Successfully updated', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/client/'+this.id]);
  }

  onDeleteClick() {
    if (confirm("Are you sure you want to delete this user?")) {
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client deleted!', { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }

}
