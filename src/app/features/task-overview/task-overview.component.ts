import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { Observable } from 'rxjs';

import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { Task } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { ViewTaskDialogComponent } from '../view-task-dialog/view-task-dialog.component';
@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    CommonModule
  ],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TaskOverviewComponent {
  tasks$: Observable<Task[]>;

  constructor(
    private dialog: MatDialog,
    private taskManagementService: TaskManagementService
  ) {
    this.tasks$ = this.taskManagementService.getTasks();
  }

  openCreateDialog(): void {
    this.dialog.open(CreateTaskDialogComponent);
  }

  openEditDialog(task: Task): void {
    this.dialog.open(EditTaskDialogComponent,
      {
        data: task.id
      }
    );
  }

  openDetailDialog(task: Task): void {
    this.dialog.open(ViewTaskDialogComponent,
      {
        data: task.id
      }
    );
  }

  openDeleteDialog(task: Task): void {
    this.dialog.open(DeleteTaskDialogComponent,
      {
        data: task.id
      }
    );
  }
}
