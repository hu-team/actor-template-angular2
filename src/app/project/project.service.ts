import { Injectable } from '@angular/core';
import { Project } from './project';
import { AngularFire } from "angularfire2";

@Injectable()
export class ProjectService {
  PATH = "/projects";

  constructor(private af: AngularFire) { }

  public createProject(project: Project) {
    this.af.database.list(this.PATH).push(project)
  }
}
