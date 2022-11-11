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
      { name: 'Test 1', description: '', dateCreated: new Date(), priority: 100, status: 'Done' },
      { name: 'Test 2', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout', dateCreated: new Date(), priority: 4, status: 'Done' },
      { name: 'Test 3', description: 'description test', dateCreated: new Date(), priority: 50, status: 'Done' },
      { name: 'Test 4 ', description: 'description test', dateCreated: new Date(), priority: 10, status: 'Done' },
      { name: 'Test 5', description: 'description test', dateCreated: new Date(), priority: 100, status: 'Done' },
      { name: 'Test 6', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don t look even slightly believable. ', dateCreated: new Date(), priority: 4, status: 'Done' },
      { name: 'Test 7', description: '', dateCreated: new Date(), priority: 4, status: 'Done' },
      { name: 'Test 8', description: 'description test', dateCreated: new Date(), priority: 64, status: 'Done' },
      { name: 'Test 9', description: 'description test', dateCreated: new Date(), priority: 34, status: 'Done' }
    ];

    this.setTasks(mockTasks);

  }

  addNewTask(task: any) {
    let tasks = this.getTaks;

    tasks.push(task);

    this.setTasks(tasks);
  }

  deleteTask(index: number) {
    let tasks = this.getTaks;

    tasks.splice(index, 1)

    this.setTasks(tasks);
  }

  setTasks(tasks: Task[]) {
    this.taskSource.next(tasks);
  }
}
