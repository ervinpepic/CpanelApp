import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
    this.authService.register(this.email, this.password)
    .then((odgovor) => {
      this._flashMessagesService.show('New user added successfully', {cssClass: 'alert-success', timeout: 6000 });
      this.router.navigate(['/']);
    })
    .catch((greska) => {
      this._flashMessagesService.show(greska.message, {cssClass: 'alert-warning', timeout: 6000 });
      this.router.navigate(['/register']);
    });
  }

}
