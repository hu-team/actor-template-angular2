import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from "../project.service";
import { User } from "../../actorbase/user";
import { UserAuthService } from "../../actorbase/user-auth.service";


@Component({
  selector: 'add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
  private projectList: Project[] = [];
  
  private user: User;
  constructor(public ps: ProjectService, public us: UserAuthService) {
    this.us.getUser().subscribe(user => {
      if (user) {
        this.user = user;

        this.ps.getProjects(this.user.getUid())
        .subscribe(project => {
          console.log(project);
        });
        // .subscribe(project => {
        //   if (project) {
        //     let isNew = true;

        //     this.projectList.forEach((val) {
        //       if
        //     });
        //     console.log(project);
        //     this.projectList.push(project);
        //     console.log(this.projectList);
        //   }
        // });
      }
    });
  }

  ngOnInit() {
  }

}
