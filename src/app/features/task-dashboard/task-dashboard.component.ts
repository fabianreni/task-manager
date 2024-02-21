import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDashboardService } from '../services/task-dashboard.service';
import { OnDestroyAdapter } from '../../shared/on-destroy-adapter';
import { TaskSummary } from '../services/task-summary.model';

@Component({
  selector: 'app-task-dashboard',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task-dashboard.component.html',
  styleUrl: './task-dashboard.component.scss'
})
export class TaskDashboardComponent extends OnDestroyAdapter implements OnInit {
  taskSummary = signal(new TaskSummary());

  hasTasks: boolean = false;
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
      if (tasksSummary.totalTasksCount > 0) {
        this.hasTasks = true;
      }
      else {
        this.hasTasks = false;
      }
    });

    this.subSink.add(subscription);
  }
}
