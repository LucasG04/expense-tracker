import { Injectable } from '@angular/core';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService: AuthenticateService
      ) {}

  canActivate(): boolean {
    return this.authenticationService.isAuthenticated;
  }
}
