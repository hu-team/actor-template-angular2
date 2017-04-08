import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../actorbase/user-auth.service';
import { Router } from '@angular/router';
import { ProjectService } from "../project.service";
import { Project } from "../project";
import {MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { CreateTemplateComponent } from "../create-template/create-template.component";

@Component({
  selector: 'single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
  providers: [ProjectService]
})
export class SingleProjectComponent implements OnInit {
  private currProject: Project = new Project("Project x", "Project x");
  private haveActorTemplate: Boolean = false;
  private editAble = false;
  private actorTemplateList: Array<any> = [];
  private dialogConfig: MdDialogConfig = {
    disableClose: true,
    width: '80%',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      projectId: '0'
    }
  };

  constructor(public userAuth: UserAuthService, public router: Router, public ps: ProjectService, public dialog: MdDialog) {
    const url = this.router.url.split("/");
    const projectId = url[url.length - 1];
    this.userAuth.getUser().subscribe(user => {
      if (user) {
        this.ps.getProject(projectId).subscribe(project => {
          if (project) {
            this.currProject = project;
            this.dialogConfig.data.projectId = project.$key;
            this.actorTemplateList = [];

            //Check if there is ant actor template
            if(project.actor_templates) {
              let keys = Object.keys(project.actor_templates);

              keys.forEach(val => {
                this.actorTemplateList.push(project.actor_templates[val]);
              });
              
              //console.log(this.actorTemplateList);
              this.haveActorTemplate = true;
            }

            this.ps.getProjectMembers(project.$key).subscribe(members => {
              if(members) {
                const keys = Object.keys(members);

                if(keys[0] === user.getUid() && members[keys[0]].role === "analysist") {
                  this.editAble = true;             
                }
              }
            }); 
          }
        })
      } else {
        //this.router.navigateByUrl("login");
      }
    })
  }

  createTemplate() {
    let dialogRef = this.dialog.open(CreateTemplateComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      //this.selectedOption = result;
    });
  }

  ngOnInit() {
  }

}
