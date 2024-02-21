import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { CreateAndEditTaskPresentation } from './create-and-edit-task-presentation.model';
import { Task, TaskStatus, TaskStatusType } from '../services/task.model';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

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

  taskStatuses: TaskStatus[] = [];

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
    const createStatus = new TaskStatus(TaskStatusType.Created, 'Created');
    const pendingStatus = new TaskStatus(TaskStatusType.Pending, 'Pending');
    const completedStatus = new TaskStatus(TaskStatusType.Completed, 'Completed');

    this.taskStatuses.push(createStatus, pendingStatus, completedStatus);
  }
}
