import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSource = new ReplaySubject<Array<any>>;
  tasks$ = this.taskSource.asObservable();

  constructor() { }

  addNewTask(task: any) {
    this.taskSource.next(task);
  }
}
