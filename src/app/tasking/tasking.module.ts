import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoDashboardComponent } from './to-do-dashboard/to-do-dashboard.component';

@NgModule({
  declarations: [
    ToDoListComponent,
    ToDoDashboardComponent
  ],
  exports: [
    ToDoListComponent,
    ToDoDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskingModule { }
