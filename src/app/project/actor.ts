export class Actor {
  public email: string;
  public function: string;
  public name: string;
  public note: string;
  public phone: string;
  public $key: string;
  
  constructor(name: string, email: string, note: string, phone: string, fn: string) {
    this.name = name;
    this.email = email;
    this.note = note;
    this.phone = phone;
    this.function = fn;
  }
  
}
