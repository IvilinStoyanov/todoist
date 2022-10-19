import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject();
  isChecked: boolean = true;
  tasks: any[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.tasks$.pipe(
      takeUntil(this.destroy$))
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
