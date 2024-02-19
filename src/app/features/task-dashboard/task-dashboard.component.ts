import { Component, OnInit, signal } from '@angular/core';

import { TaskSummary } from '../services/task.model';
import { TaskDashboardService } from '../services/task-dashboard.service';
import { CommonModule } from '@angular/common';
import { OnDestroyAdapter } from '../../shared/on-destroy-adapter';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss'
})
export class TaskDashboardComponent extends OnDestroyAdapter implements OnInit {
  taskSummary = signal(new TaskSummary());

  constructor(
    private taskDashboardService: TaskDashboardService) {
    super();
  }

  ngOnInit(): void {
    this.getSummary();
  }

  private getSummary(): void {
    const subscription = this.taskDashboardService.getTasksSummary().subscribe((tasksSummary: TaskSummary) => {
      this.taskSummary.set(tasksSummary);
    });

    this.subSink.add(subscription);
  }
}
