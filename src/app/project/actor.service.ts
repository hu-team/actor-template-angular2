import { Injectable } from '@angular/core';
import { AngularFire } from "angularfire2";
import { ActorTemplate } from './actor-template';

@Injectable()
export class ActorService {
  PATH: Array<any> = ["/projects", "/actor_templates"];
  constructor(public af: AngularFire) { }

  createActorTemplate(templateName: string, projectId: string, actorTemplate: ActorTemplate): firebase.Promise<void> {
    return this.af.database.object(this.PATH[0]+"/"+projectId+"/actor_templates/"+templateName).set(actorTemplate)
  }
}
