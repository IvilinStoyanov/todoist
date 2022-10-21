import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskSource = new BehaviorSubject<Array<Task>>([]);
  tasks$ = this.taskSource.asObservable();

  get getTaks() {
    return this.taskSource.getValue();
  }

  constructor() {
    let mockTasks: Task[] = [
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'},
      {name: 'Test', description: 'description test', dateCreated: new Date(), priority: 4, status: 'Done'}
    ];

    this.setTasks(mockTasks);

   }

  addNewTask(task: any) {
    let tasks = this.getTaks;

    tasks.push(task);

    this.setTasks(tasks);
  }

  deleteTask(index: number) {
   const tasks = this.getTaks.splice(index, 1);

    this.setTasks(tasks);
  }

  setTasks(tasks: Task[]) {
    this.taskSource.next(tasks);
  }
}
