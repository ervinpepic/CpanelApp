
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
   
   getClient(id: string) {
     this.client = this.af.object('/clients/' + id);
     return this.client;
   }

   newClient(client: Client) {
    this.af.list<Client>('/clients').push(client);
   }

   updateClient(id: string, client: Client) {
     return this.af.list<Client>('/clients').update(id, client);
   }
}
