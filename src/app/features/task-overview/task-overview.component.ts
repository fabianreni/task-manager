import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { Observable } from 'rxjs';

import { CreateTaskDialogComponent } from '../create-task-dialog/create-task-dialog.component';
import { Task } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { DeleteTaskDialogComponent } from '../delete-task-dialog/delete-task-dialog.component';

@Component({
  selector: 'app-task-overview',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule
  ],
  templateUrl: './task-overview.component.html',
  styleUrl: './task-overview.component.scss'
})
export class TaskOverviewComponent {
  tasks$?: Observable<Task[]>;

  constructor(
    private dialog: MatDialog,
    private taskManagementService: TaskManagementService
  ) { }


  ngOnInit() {
    this.tasks$ = this.taskManagementService.getTasks();

    this.tasks$.subscribe(data =>
      console.log(data))
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

  openDeleteDialog(task: Task): void {
    this.dialog.open(DeleteTaskDialogComponent,
      {
        data: task.id
      }
    );
  }
}
