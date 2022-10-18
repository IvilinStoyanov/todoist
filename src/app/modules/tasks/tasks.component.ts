import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  isChecked: boolean = true;
  tasks: any[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    const taskSubscription$ = this.taskService.tasks$.subscribe(task => {
      this.tasks.push(task);
      console.log(task);
    });

    this.subscription.add(taskSubscription$);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
