import { Injectable } from "@angular/core";


import { SettingsService } from './../services/settings.service';

import { CanActivate, Router } from '@angular/router';



@Injectable()
export class RegisterGuard implements CanActivate {
    constructor (
        private router: Router,
        private settingsService: SettingsService
        
    ) {}

    canActivate(): boolean {
        if (this.settingsService.getSettings().allowRegistration) {
            return true
    } else {
        this.router.navigate(['/login']);
    }

 }
}
