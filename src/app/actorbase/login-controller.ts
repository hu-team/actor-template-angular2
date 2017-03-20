import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginController {
  
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  login(obj: Object): void {
    console.log(obj);
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

  logout(): void {
    this.af.auth.logout();
  }
}
