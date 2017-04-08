import { Injectable } from '@angular/core';
import { Project } from './project';
import { User } from "../actorbase/user";

import { AngularFire } from "angularfire2";
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  PATH: Array<any> = ["/projects", "/project_members/", "/users"];
  private projectList: Subject<Project []> = new BehaviorSubject<Project []>(null);
  private userList: Subject<User []> = new BehaviorSubject<User []>(null);
  private list: Project[] = [];
  private ulist: User[] = [];

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

    this.af.database.list(this.PATH[0]).subscribe(val => {
      this.list = [];
      let projects = val;
      let isProjectMember = false;

      //Loop over all projects
      val.forEach(data => {
        this.af.database.object(this.PATH[1]+"/"+data.$key).subscribe(member => {
          let keys = Object.keys(member);

          //Check if the key is equal to user id;
          if(keys[0] === uid) {
            data.role = member[keys[0]].role;
            this.list.push(data);
            this.projectList.next(this.list);
            console.log("item ok");
          }
        
        });
      });
    });

    return this.projectList;
  }

  public getUsers(uid: String): Observable<User []> {
    this.af.database.list(this.PATH[2]).subscribe(val => {
      this.ulist = [];

      val.map(user => {
        user.uid = user.$key;

        let uu = new User(user.name, user.email, null, user.$key);
        if(user.$key != uid) {
          this.ulist.push(uu);
        }
        this.userList.next(this.ulist);
      }) 
      
    });

    return this.userList;
  }

  public getProject(projectId: string): Observable<Project> {
    return this.af.database.object(this.PATH[0]+"/"+projectId);
  }

  public getProjectMembers(projectId: string): Observable<any> {
    return this.af.database.object(this.PATH[1]+"/"+projectId);
  }
}
