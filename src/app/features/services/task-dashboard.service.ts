import { Injectable } from '@angular/core';

import { Observable, Subject, ReplaySubject } from 'rxjs';

import { Task } from './task.model';
import { TaskSummary } from './task-summary.model';

@Injectable({
  providedIn: 'root'
})
export class TaskDashboardService {
  taskSummary$: Observable<TaskSummary>;

  private taskSummary: TaskSummary;
  private taskSummarySubject: Subject<TaskSummary> = new ReplaySubject<TaskSummary>(1);

  constructor() {
    this.taskSummary$ = this.taskSummarySubject.asObservable();
    this.taskSummary = new TaskSummary();
  }

  setTaskSummary(tasks: Task[]): void {
    this.taskSummary.updateDashboard(tasks);
    this.taskSummarySubject.next(this.taskSummary);
  }

  getTasksSummary(): Observable<TaskSummary> {
    return this.taskSummary$;
  }
}
