import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from './../../models/client.model';

import { ClientService } from './../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }
  disableBalanceOnAdd: boolean = true;

  constructor(
    public router: Router,
    public flashMessagesService: FlashMessagesService,
    public clientService: ClientService
  ) { }

  ngOnInit() {
  }

  onSubmit({value, valid} : {value:Client, valid: boolean})  {
    if (this.disableBalanceOnAdd) {
      this.client.balance = 0;
    }
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 6000})
      this.router.navigate(['add-client']);
    } else {
      //Add new Client
      this.clientService.newClient(value);
      this.flashMessagesService.show('New user added successfully', {cssClass: 'alert-success', timeout: 6000})
      this.router.navigate(['/']);
    }
  }
}
