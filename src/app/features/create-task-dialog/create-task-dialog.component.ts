import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { Task, TaskStatus, TaskStatusPresentation } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';

@Component({
  selector: 'app-create-task-dialog',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.scss'
})
export class CreateTaskDialogComponent implements OnInit {
  task: Task = new Task();
  form!: FormGroup;

  taskStatuses: TaskStatusPresentation[] = [];

  constructor(
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskManagementService: TaskManagementService
  ) { }

  ngOnInit(): void {

    this.initializeTaskForm();
    this.initializeTaskStatuses();
  }

  onSubmit(): void {
    this.taskManagementService.createTask(this.task);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  private initializeTaskForm(): void {
    this.form = this.formBuilder.group({
      title: this.task.title,
      description: this.task.description,
      status: this.task.status
    });
  }

  private initializeTaskStatuses(): void {
    const createStatus = new TaskStatusPresentation(TaskStatus.Created, 'Created');
    const pendingStatus = new TaskStatusPresentation(TaskStatus.Pending, 'Pending');
    const completedStatus = new TaskStatusPresentation(TaskStatus.Completed, 'Completed');

    this.taskStatuses.push(createStatus, pendingStatus, completedStatus);
  }
}
