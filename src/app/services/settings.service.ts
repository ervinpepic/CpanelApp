import { Injectable } from '@angular/core';

import { Settings } from './../models/settings.model';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false,
  }

  constructor() {
    if (localStorage.getItem('podesavanja') != null) {
      this.settings = JSON.parse(localStorage.getItem('podesavanja'))
    }
   }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings:Settings) {
    localStorage.setItem('podesavanja', JSON.stringify(settings));
  }

}
