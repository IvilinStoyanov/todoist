import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTaskForm } from 'src/app/models/interfaces/create-task-form';

@Component({
  selector: 'app-create-task',
  templateUrl: 'create-task.component.html',
  styleUrls: ['create-task.component.scss']
})

export class CreateTaskComponent implements OnInit {
  date = new Date();
  createTaskFromGroup = new FormGroup<CreateTaskForm>({
    name: new FormControl(null, Validators.required),
    description: new FormControl(''),
    status: new FormControl(null, Validators.required),
    priority: new FormControl(1, { nonNullable: true }),
    dateCreated: new FormControl({ day: this.date.getDate(), month: this.date.getMonth(), year: this.date.getFullYear() }, { nonNullable: true })
  });

  constructor() { }

  ngOnInit(): void {
  }

  createTask() {
    this.createTaskFromGroup.markAllAsTouched();

    if (this.createTaskFromGroup.valid) {
      console.log(this.createTaskFromGroup);
    }
  }

}
