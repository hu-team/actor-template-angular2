import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MdMenuModule, MdIconModule } from '@angular/material';
import { ProjectModule } from '../project/project.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdMenuModule,
    MdIconModule,
    ProjectModule
  ],
  declarations: [BoardComponent, NavigationComponent]
})
export class DashboardModule { }
