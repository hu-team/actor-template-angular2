import { Injectable } from '@angular/core';
import { Project } from './project';
import { AngularFire } from "angularfire2";
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  PATH: Array<any> = ["/projects", "/project_members"];
  private projectList: Observable<Project []>;

  constructor(private af: AngularFire) { }

  public createProject(project: Project): firebase.Promise<any> {
    //const toSend = this.af.database.object(this.PATH[0]+"*").set(project);

    //return toSend;
    return this.af.database.list(this.PATH[0]).push(project)
  }

  public createProjectMember(project_key: any, uid: string, role: string) : firebase.Promise<any> {
    return this.af.database.object(this.PATH[1]+"/"+project_key+"/"+uid).set({
      role: role
    });
  }

  public getProjects(uid: String): Observable<Project []> {
    let list = this.projectList;
    //Observable<Project []>
    //this.af.database.list(this.PATH[0])
    this.af.database.list(this.PATH[0]).subscribe(val => {
      let projects = val;
      let isProjectMember = false;

      //Loop over all projects
      val.forEach(data => {
        this.af.database.object(this.PATH[1]+"/"+data.$key).subscribe(member => {
          let keys = Object.keys(member);

          //Check if the key is equal to user id;
          if(keys[0] === uid) {
            this.projectList.pu
          }
        
        });
      });
    });

    return this.projectList;
  }
}
