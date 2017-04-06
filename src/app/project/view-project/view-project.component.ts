import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../actorbase/user-auth.service';
import { ProjectService } from "../project.service";
import { Project } from "../project";

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
  providers: [ ProjectService ]
})
export class ViewProjectComponent implements OnInit {
  private projectList: Project[] = [];

  constructor(public userAuth: UserAuthService, public ps: ProjectService) { 
    this.userAuth.getUser().subscribe(user => {
      if(user) {
        console.log("User is ingelogt");
        this.ps.getProjects(user.getUid()).subscribe(project => {
          this.projectList = project;
          console.log(project);
        });
      }
    });
  }

  ngOnInit() {
  }

}
