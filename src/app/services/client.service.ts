
import { Injectable } from '@angular/core';

//Firebase
import{ FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

//Observables
import { Observable } from 'rxjs';

//models
import { Client } from './../models/client.model';

@Injectable()
export class ClientService {

  clients: AngularFireList<any[]>;
  client: AngularFireObject<any>;

  constructor(
    public af: AngularFireDatabase
  ) { }

   getClients() {
     return this.af.list<Client>('/clients');
   }

   newClient(client: Client) {
    this.af.list<Client>('/clients').push(client);
   }
}
