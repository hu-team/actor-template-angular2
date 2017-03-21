import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private firstName: String;
  private lastName: String;
  private email: String;
  private password: String;

  constructor() { }

  ngOnInit() {
  }

  public register() {
    console.log(this.firstName)
  }

}
