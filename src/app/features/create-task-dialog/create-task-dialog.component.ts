import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { Task } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';
import { CreateAndEditTaskPresentation } from '../create-and-edit-task-presentation/create-and-edit-task-presentation.model';
import { CreateAndEditTaskPresentationComponent } from '../create-and-edit-task-presentation/create-and-edit-task-presentation.component';

@Component({
  selector: 'app-create-task-dialog',
  standalone: true,
  imports: [
    CommonModule,
    CreateAndEditTaskPresentationComponent],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.scss'
})
export class CreateTaskDialogComponent implements OnInit {

  taskPresentation!: CreateAndEditTaskPresentation;

  constructor(
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskManagementService: TaskManagementService
  ) { }

  ngOnInit(): void {
    this.initializeTask();
  }

  onTaskChanged(task: Task | null): void {
    if (task === null) {
      this.onClose();
      return;
    }

    this.onSubmit(task);
  }

  private onSubmit(task: Task): void {
    this.taskManagementService.createTask(task);
    this.onClose();
  }

  private onClose(): void {
    this.dialogRef.close();
  }

  private initializeTask(): void {
    const task = new Task()
    this.taskPresentation = new CreateAndEditTaskPresentation(this.formBuilder, task);
  }
}
