import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

import { Task } from './task.model';
import { TaskDashboardService } from './task-dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  tasks$: Observable<Task[]>;

  private tasks: Task[] = [];
  private tasksSubject: Subject<Task[]> = new ReplaySubject<Task[]>(1);

  constructor(
    private taskDashboardService: TaskDashboardService) {
    this.tasks$ = this.tasksSubject.asObservable();
  }

  createTask(task: Task): void {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
    this.taskDashboardService.setTaskSummary(this.tasks);
    this.setTaskSummary();
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  getTask(id: number): Task | null {
    const task = this.tasks.find(task => { return task.id == id });

    if (!task) {
      return null;
    }

    return task;
  }

  editTask(newTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === newTask.id);
    if (index !== -1) {
      this.tasks[index] = newTask;
      this.tasksSubject.next(this.tasks);
      this.setTaskSummary();
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
    this.setTaskSummary();
  }

  private setTaskSummary(): void {
    this.taskDashboardService.setTaskSummary(this.tasks);
  }
}
