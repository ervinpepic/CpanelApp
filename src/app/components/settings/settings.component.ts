import { Component, OnInit } from '@angular/core';

import { Settings } from './../../models/settings.model';

import { SettingsService } from './../../services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';

import { Router } from '@angular/router';



@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings: Settings;
  constructor(
    public settingsService: SettingsService,
    public flashMessagesService: FlashMessagesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show('Settings saved successfully', { cssClass: 'alert-success', timeout: 6000 });
    this.router.navigate(['/settings']);
  }

}
