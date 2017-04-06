import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Injectable, Inject } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { UserAuthService } from './user-auth.service';
import { EmailPasswordCredentials } from 'angularfire2/auth'
import { Fireuser } from './fireuser';
import { User } from './user';
import {Observable} from "rxjs";

@Injectable()
export class LoginController {

  constructor(public af: AngularFire, @Inject(UserAuthService) userAuth) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  register(type: string): firebase.Promise<FirebaseAuthState> {
    let obj: Object;

    switch(type) {
      case 'facebook':
      obj = this.getFacebookProvider();
      break;
      case 'google':
      obj = this.getGoogleProvider();
      break;
    }
    return this.af.auth.login(obj);
  }

  login(type: string, data?: EmailPasswordCredentials): firebase.Promise<FirebaseAuthState> {
    let obj: Object;
    let eobj: EmailPasswordCredentials;
    let email: Boolean = false;
    switch(type) {
      case 'facebook':
      obj = this.getFacebookProvider();
      break;
      case 'google':
      obj = this.getGoogleProvider();
      break;
      case 'email': {
        eobj = data
      }
      email = true;
      break;
    }
    if(!email) {
      return this.af.auth.login(obj);      
    } else {
      return this.af.auth.login(eobj, this.getPasswordProvider());
    }
  }

  logout(): void {
    this.af.auth.logout();
  }

  getFacebookProvider(): Object {
    return {
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }
  }

  getGoogleProvider(): Object {
    return {
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }
  }

  getPasswordProvider(): Object {
      return {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }
  }

  createFireUser(user: Fireuser): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.createUser(user)
  }

  createUser(user: User, uid: string) {
    return this.af.database.object("/users/"+uid).set(user)
  }

  findUser(uid: string): Observable<any> {
    return this.af.database.object("/users/"+uid)
  }
}
