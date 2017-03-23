import { Injectable } from '@angular/core';
import { User } from './user';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserAuthService {
  private isLoggedIn: Boolean = false;
  private userAuth: Subject<User> = new BehaviorSubject<User>(null);

  constructor() {

  }

  public getUser() {
    return this.userAuth;
  }
  
  public setUser(user: User): void {
    this.userAuth.next(user);
  }

}
