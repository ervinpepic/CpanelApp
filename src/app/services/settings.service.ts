import { Injectable } from '@angular/core';

import { Settings } from './../models/settings.model';

@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: false,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false,
  }

  constructor() { }

  getSettings() {
    return this.settings;
  }

}
