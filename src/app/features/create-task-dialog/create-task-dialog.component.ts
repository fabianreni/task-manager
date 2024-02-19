import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule } from '@angular/forms';
import { Task } from '../services/task.model';
import { TaskManagementService } from '../services/task-management.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task-dialog.component.html',
  styleUrl: './create-task-dialog.component.scss'
})
export class CreateTaskDialogComponent {
  task: Task = new Task();
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private formBuilder: FormBuilder,
    private taskManagementService: TaskManagementService
  ) { }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: this.task.title,
      description: this.task.description,
      status: this.task.status
    });
  }

  onSubmit(): void {
    this.taskManagementService.createTask(this.task);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
