import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './view-project/view-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material/card';
import { MdIconModule } from '@angular/material/icon';
import { SingleProjectComponent } from './single-project/single-project.component';
import { MdButtonModule } from '@angular/material/button';
import { MdDialogModule } from '@angular/material/dialog';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { ViewTemplateComponent } from './view-template/view-template.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MdCardModule,
    MdIconModule,
    MdButtonModule,
    MdDialogModule
  ],
  exports: [ViewProjectComponent, CreateProjectComponent, SingleProjectComponent],
  declarations: [ViewProjectComponent, CreateProjectComponent, AddMemberComponent, SingleProjectComponent, CreateTemplateComponent, ViewTemplateComponent],
  entryComponents: [ CreateTemplateComponent, ViewTemplateComponent]
})
export class ProjectModule { }
