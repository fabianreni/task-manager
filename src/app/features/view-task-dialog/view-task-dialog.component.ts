import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { Task } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-task-dialog',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './view-task-dialog.component.html',
  styleUrl: './view-task-dialog.component.scss'
})
export class ViewTaskDialogComponent implements OnInit {
  task!: Task;

  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private taskManagementService: TaskManagementService) { }

  ngOnInit(): void {
    this.initializeTask();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  private initializeTask(): void {
    const task = this.taskManagementService.getTask(this.data);
    if (task === null) { return; }

    this.task = task;
  }
}
