import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../actorbase/user-auth.service';
import { Router } from '@angular/router';
import { User } from '../../actorbase/user';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  private user: User;

  constructor(public userAuth: UserAuthService, public router: Router) { 
    this.userAuth.getUser().subscribe(user => {
      if(!user) {
        this.router.navigateByUrl("login");
      } else {
        this.user = user;
      }
    });
  }

  ngOnInit() {

  }

}
