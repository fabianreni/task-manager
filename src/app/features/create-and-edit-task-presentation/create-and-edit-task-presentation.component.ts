import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CreateAndEditTaskPresentation } from './create-and-edit-task-presentation.model';
import { Task, TaskStatus, TaskStatusPresentation } from '../services/task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-and-edit-task-presentation',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './create-and-edit-task-presentation.component.html',
  styleUrl: './create-and-edit-task-presentation.component.scss'
})
export class CreateAndEditTaskPresentationComponent {

  @Input() presentation!: CreateAndEditTaskPresentation;
  @Output() task: EventEmitter<Task | null> = new EventEmitter<Task | null>();

  taskStatuses: TaskStatusPresentation[] = [];

  ngOnInit(): void {
    this.initializeTaskStatuses();
  }

  onSubmit(): void {
    this.task.emit(this.presentation.task);
  }

  onClose(): void {
    this.task.emit(null);
  }

  private initializeTaskStatuses(): void {
    const createStatus = new TaskStatusPresentation(TaskStatus.Created, 'Created');
    const pendingStatus = new TaskStatusPresentation(TaskStatus.Pending, 'Pending');
    const completedStatus = new TaskStatusPresentation(TaskStatus.Completed, 'Completed');

    this.taskStatuses.push(createStatus, pendingStatus, completedStatus);
  }
}
