import { Component, OnInit } from '@angular/core';
import { LoginController } from '../../actorbase/login-controller';
import { EmailPasswordCredentials } from 'angularfire2/auth'
import { UserAuthService } from '../../actorbase/user-auth.service';
import { User } from '../../actorbase/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private email: string = "";
  private password: string = "";
  private error: Boolean = false;
  private errorM: string = "";

  constructor(public lc: LoginController, public userAuth: UserAuthService, public router: Router) { }

  ngOnInit() {
  }

  login(type: string) {
    switch (type) {
      case 'facebook':
        this.lc.login('facebook')
          .then(data => {
            let user  = new User(data.auth.displayName, data.auth.email, data.auth.photoURL, data.uid);

            this.userAuth.setUser(user);
            this.router.navigateByUrl('dashboard');
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'google':
        this.lc.login('google')
          .then(data => {
            let user = new User(data.auth.displayName, data.auth.email, data.auth.photoURL, data.uid);

            this.userAuth.setUser(user);
            this.router.navigateByUrl('dashboard');
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'email':
        if (this.email != "" && this.password != "") {
          const obj: EmailPasswordCredentials = {
            email: this.email,
            password: this.password
          }
          this.lc.login('email', obj)
            .then(data => {
              let user = new User("", data.auth.email, null, data.uid);
              this.userAuth.setUser(user);
              this.router.navigateByUrl('dashboard');
            })
            .catch(err => {
              this.error = true;
              this.errorM = err.message;
              console.log(err);
            })
        }
        break;
      default:
        break;
    }
  }



}
