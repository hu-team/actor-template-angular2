import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
