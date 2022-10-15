import { NgModule } from '@angular/core';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    SharedModule,
    CreateTaskRoutingModule
  ]
})
export class CreateTaskModule { }
