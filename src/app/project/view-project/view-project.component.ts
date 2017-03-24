import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../actorbase/user-auth.service';

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  constructor(public userAuth: UserAuthService) { 
    this.userAuth.getUser().subscribe(user => {
      if(user) {
        console.log("User is ingelogt");
      }
    });
  }

  ngOnInit() {
  }

}
