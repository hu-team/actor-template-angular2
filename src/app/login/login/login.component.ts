import { Component, OnInit } from '@angular/core';
import { LoginController } from '../../actorbase/login-controller';
import { EmailPasswordCredentials } from 'angularfire2/auth'

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

  constructor(public lc: LoginController) { }

  ngOnInit() {
  }

  login(type: string) {
    switch (type) {
      case 'facebook':
        this.lc.login('facebook')
          .then(data => {
            //this.router.navigateByUrl('login');
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'google':
        this.lc.login('google')
          .then(data => {
            //this.router.navigateByUrl('login');
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
              //this.router.navigateByUrl('login');
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
