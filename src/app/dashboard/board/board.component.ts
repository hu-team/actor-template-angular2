import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../actorbase/user-auth.service';
import { Router } from '@angular/router';
import { User } from '../../actorbase/user';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  private user: User;
  private create: Boolean = false;
  private view: Boolean = false;

  constructor(public userAuth: UserAuthService, public router: Router) { 
    this.userAuth.getUser().subscribe(user => {
      if(!user) {
        //this.router.navigateByUrl("login");
      } else {
        this.user = user;
      }
    });
  }

  ngOnInit() {
    const url = this.router.url;

    switch(url) {
      case '/dasboard':
        this.view = true;
      break;
      case '/project/create':
        this.create = true;
      break;
      default:
        this.view = true;
      break;
    }
  }

}
