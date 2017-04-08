import { Actor } from './actor';

export class ActorTemplate {
  public name: string;
  public description: string;
  public archive: Boolean;
  public actors: Actor[];
  
  constructor(name: string, description: string, archive: Boolean, actors?: Actor[]) {
    this.name = name;
    this.description = description;
    this.archive = archive;
    
    if(actors) {
      this.actors = actors;
    }
  }
}
