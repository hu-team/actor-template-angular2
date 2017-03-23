import { Injectable } from '@angular/core';
import { Fireuser } from './fireuser';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserAuthService {
  private isLoggedIn: Boolean = false;
  private userAuth: Subject<Fireuser> = new BehaviorSubject<Fireuser>(null);

  constructor() {

  }

  public setUser(user: Fireuser): void {
    this.userAuth.next(user);
  }

}
