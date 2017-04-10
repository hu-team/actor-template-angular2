import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginController } from '../../actorbase/login-controller';
import { UserAuthService } from '../../actorbase/user-auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  providers: [ LoginController ]
})
export class NavigationComponent implements OnInit {
  private photoUrl: string = '';

  constructor(public router: Router, public lc: LoginController, public userAuth: UserAuthService) {
    this.userAuth.getUser().subscribe(user =>{
      if(user) {
        let photo = user.getprofilePhoto();

        if(photo) {
          this.photoUrl = photo;
        }
      }
    });
   }

  ngOnInit() {
  }

  logout() {
    this.lc.logout();
    this.userAuth.setUser(null);
    this.router.navigateByUrl("login");
  }

  projectOverview() {
    this.router.navigateByUrl("dashboard");
  }
}
