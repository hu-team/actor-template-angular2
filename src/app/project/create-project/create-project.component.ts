import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { UserAuthService } from "../../actorbase/user-auth.service";
import { User } from "../../actorbase/user"; 

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {
  form: FormGroup;
  user: User;

  constructor(@Inject(FormBuilder) fb: FormBuilder, public projectService: ProjectService, public uc: UserAuthService) { 
    this.form = fb.group({
      project_name: [''],
      project_description: ['']
    });

    this.uc.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

  saveProject(value: Object) {
    const name: string = this.form.controls["project_name"].value;
    const description: string = this.form.controls["project_description"].value;
    const user = this.user;
    let project: Project = new Project(name, description);

    this.projectService.createProject(project)
    .then(data => {
      console.log(data);
      this.projectService.createProjectMember(data.key, this.user.getUid(), "analysist");
    })
    .then(l => {
      console.log("project member created");
    });
  }
}
