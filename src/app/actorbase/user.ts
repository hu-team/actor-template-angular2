export class User {
  private uid: string;
  private name: string;
  private email: string;
  private username: string;
  private profilePhoto: String;

  constructor(name: string, email: string, profilePhoto?: string) {
    this.name = name;
    this.email = email;
    this.username = this.email.split("@")[0];
    if(profilePhoto) {
      this.profilePhoto = profilePhoto;      
    }
  }
}
