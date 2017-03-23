import { Component, OnInit } from '@angular/core';
import { LoginController } from '../../actorbase/login-controller';
import { Fireuser } from "../../actorbase/fireuser";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [LoginController]
})
export class RegisterComponent implements OnInit {
  private firstName: String = "";
  private lastName: String = "";
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
            this.router.navigateByUrl('login');
          })
          .catch(err => {
            this.error = true;
            this.errorM = err.message;
          })
        break;
      case 'email':
        const user = new Fireuser(this.firstName, "0", this.email, this.password);
        this.lc.createUser(user)
          .then(data => {
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
