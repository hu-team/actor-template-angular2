import { Component, OnInit } from '@angular/core';
import { LoginController } from '../../actorbase/login-controller';
import { Fireuser } from "../../actorbase/fireuser";
import { User } from "../../actorbase/user";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LoginController]
})
export class RegisterComponent implements OnInit {
  private firstName: string = "";
  private lastName: string = "";
  private email: string = "";
  private password: string = "";
  private error: Boolean = false;
  private errorM: string = "";

  constructor(public lc: LoginController, public router: Router) { }

  ngOnInit() {
  }

  public register(data: String): void {

    switch (data) {
      case 'facebook':
        this.lc.register('facebook')
          .then(data => {
            return this.lc.createUser(new User(data.auth.displayName, data.auth.email, data.auth.photoURL), data.auth.uid);
          })
          .then(req => {
            this.router.navigateByUrl('login');            
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'google':
        this.lc.register('google')
          .then(data => {
            return this.lc.createUser(new User(data.auth.displayName, data.auth.email, data.auth.photoURL), data.auth.uid);
          })
          .then(req => {
            this.router.navigateByUrl('login');            
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'email':
        const user = new Fireuser(this.firstName, "0", this.email, this.password);
        this.lc.createFireUser(user)
          .then(data => {
            return this.lc.createUser(new User(this.firstName, this.email), data.auth.uid);
          })
          .then(req => {
            this.router.navigateByUrl('login');            
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
    }
  }

}
