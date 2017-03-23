export class User {
  private uid: string;
  private name: string;
  private photoUrl: String;

  constructor(uid: string, name: string, photoUrl?: string) {
    this.uid = uid;
    this.name = name;
    if(photoUrl) {
      this.photoUrl = photoUrl;      
    }
  }
}
