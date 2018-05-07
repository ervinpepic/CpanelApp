import { Injectable } from "@angular/core";

import { AngularFireAuth } from 'angularfire2/auth';

import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor (
        private router: Router,
        public afAuth: AngularFireAuth
    ) {}

    canActivate(): Observable<boolean> {
        return this.afAuth.authState.map(autentikacija => {
            if (!autentikacija) {
                this.router.navigate(['/login']);
                return false
            } else {
                return true
            }
        });
    }

 }
