import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteTaskComponent } from './modals/delete-task/delete-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    DeleteTaskComponent
  ],
  imports: [
    SharedModule,
    TasksRoutingModule
  ],
  bootstrap: [DeleteTaskComponent],
  entryComponents: [DeleteTaskComponent]
})
export class TasksModule { }
