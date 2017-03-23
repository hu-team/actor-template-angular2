import { EmailPasswordCredentials } from 'angularfire2/auth'

export class Fireuser implements EmailPasswordCredentials {
  private name: String
  private uid: String
  email: string
  password: string
  
  constructor(name: String, uid: String, email: string, password: string) {
    this.name = name;
    this.uid = uid;
    this.email = email;
    this.password = password;
  }
}
