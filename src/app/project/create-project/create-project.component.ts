import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers: [ProjectService]
})
export class CreateProjectComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder, public projectService: ProjectService) { 
    this.form = fb.group({
      project_name: [''],
      project_description: ['']
    });
  }

  ngOnInit() {
  }

  saveProject(value: Object) {
    const name: string = this.form.controls["project_name"].value;
    const description: string = this.form.controls["project_description"].value;

    let project: Project = new Project(name, description);

    this.projectService.createProject(project);
  }
}
