import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './view-project/view-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ViewProjectComponent, CreateProjectComponent],
  declarations: [ViewProjectComponent, CreateProjectComponent]
})
export class ProjectModule { }
