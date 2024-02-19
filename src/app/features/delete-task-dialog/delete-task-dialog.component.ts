import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskManagementService } from '../services/task-management.service';

@Component({
  selector: 'app-delete-task-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-task-dialog.component.html',
  styleUrl: './delete-task-dialog.component.scss'
})
export class DeleteTaskDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private dialogRef: MatDialogRef<DeleteTaskDialogComponent>,
    private taskManagementService: TaskManagementService
  ) { }

  onDelete(): void {
    this.taskManagementService.deleteTask(this.data);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
