import { Component, OnInit } from '@angular/core';

import { Client } from './../../models/client.model';


import { ClientService } from './../../services/client.service';


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
  disabledBalanceOnAdd: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
