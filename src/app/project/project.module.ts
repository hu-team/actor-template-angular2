import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './view-project/view-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MdCardModule
  ],
  exports: [ViewProjectComponent, CreateProjectComponent],
  declarations: [ViewProjectComponent, CreateProjectComponent, AddMemberComponent]
})
export class ProjectModule { }
