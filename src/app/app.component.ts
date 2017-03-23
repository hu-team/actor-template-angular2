import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginController } from './actorbase/login-controller';
import { UserAuthService } from './actorbase/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ LoginController, UserAuthService ]
})
export class AppComponent {
  title = 'app works!';

  constructor( public userAuth: UserAuthService) {
  }

  login() {

  }

  logout() {
    //this.lc.logout();
  }
}
