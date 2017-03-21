import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class LoginModule { }
