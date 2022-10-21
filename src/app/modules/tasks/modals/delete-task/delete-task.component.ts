import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from 'src/app/models/interfaces/Task';

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html'
})
export class DeleteTaskComponent implements OnInit {

  @Input() task!: Task;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() { }

  close() {
    this.activeModal.close(this.task);
  }

}
