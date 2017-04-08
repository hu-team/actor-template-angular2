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
  private single: Boolean = false;

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
    let urlString = url;

    if(url.split("/").length > 2) {
      urlString = url.split("/")[2];
    }

    switch(urlString) {
      case '/dasboard':
        this.view = true;
      break;
      case 'create':
        this.create = true;
      break;
      case 'single':
        this.single = true;
      break;
      default:
        this.view = true;
      break;
    }
  }

}
