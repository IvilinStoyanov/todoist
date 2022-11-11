import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs/operators';
import { Task } from 'src/app/models/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';
import { DeleteTaskComponent } from './modals/delete-task/delete-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  isChecked: boolean = true;
  tasks: any[] = [];
  testTask: any = {
    name: 'Test',
    description: 'Test Desc'
  }

  form = this.fb.group({
    'priorities': new FormArray([])
  });

  get priorityFormArray(): FormArray {
    return this.form.get('priorities') as FormArray;
  }

  constructor(public taskService: TaskService, private modalService: NgbModal, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskService.tasks$.pipe(map(tasks => {
      tasks.forEach(task => {
        this.priorityFormArray.push(this.fb.group({
          'priorityP': task.priority
        }))
      })
    })).subscribe();
  }

  openDeleteModal(task: Task, index: number) {
    const modalRef = this.modalService.open(DeleteTaskComponent, { backdrop: true, keyboard: true });
    modalRef.componentInstance.task = task;

    modalRef.result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
        this.taskService.deleteTask(index);
      },
      (reason) => {
        console.log(reason);
        //	this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  submit(index: number) {
    const task = this.priorityFormArray.at(index);

    console.log(task);
  }
}
