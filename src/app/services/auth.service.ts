import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email: string, password: string) {
    return new Promise((rijesi, odbaci) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(kornisckiPodaci => rijesi(kornisckiPodaci), 
      greska => odbaci(greska));
    });
  }

  //Login Checking
  getAuth() {
    return this.afAuth.authState.map(autentikacija => autentikacija);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((prihvati, odbij) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(korisnickiPodaci => prihvati(korisnickiPodaci),
        greska => odbij(greska))
    });
  }
  
}
