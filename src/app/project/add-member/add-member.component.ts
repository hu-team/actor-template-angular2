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
  private userList: User[] = [];
  public selectedProject: Project;
  public selectedUser: User;

  private user: User;
  constructor(public ps: ProjectService, public us: UserAuthService) {
    this.us.getUser().subscribe(user => {
      if (user) {
        this.user = user;

        this.ps.getProjects(this.user.getUid())
        .subscribe(project => {
          if(project) {
            this.projectList = project;
            this.selectedProject = this.projectList[0];
          }
        });

        this.ps.getUsers(this.user.getUid())
        .subscribe(users => {
          if(users) {
            this.userList = users;
            this.selectedUser = this.userList[0];
          }
        });
      }
    });
  }

  createMember() {
    console.log(this.selectedProject);
    console.log(this.selectedUser);
    this.ps.createProjectMember(this.selectedProject.$key, this.selectedUser.getUid(), "member");
  }

  ngOnInit() {
  }

}
