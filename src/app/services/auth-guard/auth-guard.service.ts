import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService: AuthenticationService,
    private navCtrl: NavController,
  ) { }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated) {
      this.navCtrl.navigateRoot(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
