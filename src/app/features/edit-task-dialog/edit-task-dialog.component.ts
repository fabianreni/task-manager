import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { TaskManagementService } from '../services/task-management.service';
import { Task } from '../services/task.model';
import { CreateAndEditTaskPresentation } from '../create-and-edit-task-presentation/create-and-edit-task-presentation.model';
import { CreateAndEditTaskPresentationComponent } from '../create-and-edit-task-presentation/create-and-edit-task-presentation.component';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [
    CommonModule,
    CreateAndEditTaskPresentationComponent],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.scss'
})
export class EditTaskDialogComponent implements OnInit {
  taskPresentation!: CreateAndEditTaskPresentation;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskManagementService: TaskManagementService
  ) { }

  ngOnInit(): void {
    this.initializeTaskForm();
  }

  onTaskChanged(task: Task | null): void {
    if (task === null) {
      this.onClose();
      return;
    }

    this.onSubmit(task);
  }

  private onSubmit(task: Task): void {
    this.taskManagementService.editTask(task);
    this.onClose();
  }

  private onClose(): void {
    this.dialogRef.close();
  }

  private initializeTaskForm(): void {
    const task = this.taskManagementService.getTask(this.data);
    if (task === null) { return; }
    this.taskPresentation = new CreateAndEditTaskPresentation(this.formBuilder, task);
  }
}
