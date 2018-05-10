import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { Client } from './../../models/client.model';

import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from './../../services/client.service';
import { SettingsService } from './../../services/settings.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    balance: 0
  }

  disableBalanceOnEdit: boolean = true;
  constructor(
    public clientService: ClientService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public flashMessagesService: FlashMessagesService,
    public settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.clientService.getClient(this.id).valueChanges().subscribe(klijent => {
      this.client = klijent;
    });
    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;
  }

  onSubmit({value, valid} : {value:Client, valid: boolean})  {
    if (!valid) {
      this.flashMessagesService.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 6000})
      this.router.navigate(['edit-client'+this.id]);
    } else {
      //Edit Client
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client Updated', {cssClass: 'alert-success', timeout: 6000})
      this.router.navigate(['/client/'+this.id]);
    }
  }
} 
