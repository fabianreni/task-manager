import { Component, Input } from '@angular/core';
import { TaskStatusType, TaskStatus } from '../../features/services/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class TaskStatusComponent {
  @Input() status!: number;

  public statuses: typeof TaskStatusType = TaskStatusType;
}
