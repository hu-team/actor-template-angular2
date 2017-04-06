export class Project {
  private name: string;
  private description: string;
  public $key: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }
}
