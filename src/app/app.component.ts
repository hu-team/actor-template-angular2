import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginController } from './actorbase/login-controller';
import { UserAuthService } from './actorbase/user-auth.service';
import { User } from './actorbase/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoginController, UserAuthService]
})
export class AppComponent {
  title = 'app works!';

  constructor(public userAuth: UserAuthService, public af: AngularFire, public lc: LoginController) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        lc.findUser(auth.uid).subscribe(user => {
          if(user) {
            let photo = null;

            if(user.photoUrl) {
              photo = user.photoUrl;
            }

            let newUser = new User(user.name, user.email, photo, auth.uid);
            userAuth.setUser(newUser);
          }                
        });
      }
    });
  }

  login() {

  }

  logout() {
    //this.lc.logout();
  }

  ngOnInit() {

  }
}
