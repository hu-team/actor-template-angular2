import { EmailPasswordCredentials } from 'angularfire2/auth'

export class Fireuser implements EmailPasswordCredentials {
  private name: string
  private uid: string
  email: string
  password: string
  
  constructor(name: string, uid: string, email: string, password: string) {
    this.name = name;
    this.uid = uid;
    this.email = email;
    this.password = password;
  }
}
