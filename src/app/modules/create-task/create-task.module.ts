import { NgModule } from '@angular/core';
import { CreateTaskRoutingModule } from './create-task-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CreateTaskComponent } from './components/create-task.component';

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
