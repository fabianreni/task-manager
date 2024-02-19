import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { TaskManagementService } from '../services/task-management.service';
import { Task } from '../services/task.model';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [FormsModule,
    CommonModule],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.scss'
})
export class EditTaskDialogComponent {
  task!: Task;
  form!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskManagementService: TaskManagementService
  ) { }
  ngOnInit(): void {
    const task = this.taskManagementService.getTask(this.data);
    if (task === null) { return; }

    console.log(task);
    this.task = task;
    this.form = this.formBuilder.group({
      title: this.task.title,
      description: this.task.description,
      status: this.task.status
    });
  }

  onSubmit(): void {
    this.taskManagementService.editTask(this.task);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
