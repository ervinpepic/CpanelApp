import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.email, this.password).then((odgovor) => {
      this._flashMessagesService.show('Successfully logged in.', { cssClass: 'alert-success', timeout: 6000 });
      this.router.navigate(['/']);
    }).catch((greska) => {
      this._flashMessagesService.show(greska.message, { cssClass: 'alert-danger', timeout: 6000 });
      this.router.navigate(['/login']);
    });
  }
}
