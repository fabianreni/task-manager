import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  tasks$: Observable<Task[]>;
  private tasks: Task[] = [];
  private tasksSubject: Subject<Task[]>;

  constructor() {
    this.tasksSubject = new ReplaySubject<Task[]>(1);
    this.tasks$ = this.tasksSubject.asObservable();
  }

  createTask(task: Task): void {
    task.setId(this.tasks.length + 1);
    this.tasks.push(task);
    this.tasksSubject.next(this.tasks);
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
    this.tasks.find(task => {
      if (task.id === newTask.id) {
        task = newTask;
      }
    });
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.tasksSubject.next(this.tasks);
  }
}
