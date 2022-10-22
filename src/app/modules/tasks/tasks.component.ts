import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  constructor(public taskService: TaskService, private modalService: NgbModal) { }

  ngOnInit(): void { }

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
}
