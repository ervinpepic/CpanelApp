import { Component, OnInit } from '@angular/core';

//Routers
import { Router } from '@angular/router';
//Services
import { AuthService } from './../../services/auth.service';
import { SettingsService } from './../../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';

//Observable
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessageService: FlashMessagesService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(autentikacija => {
      if(autentikacija) {
        this.isLoggedIn = true
        this.loggedInUser = autentikacija.email;
      } else {
        this.isLoggedIn = false
      }
    });
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessageService.show('Your are logged out', { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/login']);
  }

}
