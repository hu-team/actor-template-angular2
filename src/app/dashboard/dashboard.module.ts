import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { MdMenuModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MdMenuModule,
    MdIconModule
  ],
  declarations: [BoardComponent, NavigationComponent]
})
export class DashboardModule { }
