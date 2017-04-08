import { ActorTemplate } from './actor-template';

export class Project {
  public name: string;
  public summary: string;
  public $key: string;
  public role: string;
  public actor_templates: ActorTemplate[];
  
  constructor(name: string, description: string) {
    this.name = name;
    this.summary = description;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getDescription(): string {
    return this.summary;
  }

  setDescription(description: string): void {
    this.summary = description;
  }
}
