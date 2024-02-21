import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Task } from "../services/task.model";

export class CreateAndEditTaskPresentation {
    task: Task
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        task: Task) {
        this.task = Object.assign({}, task);
        this.form = this.formBuilder.group({
            title: [task.title, Validators.required],
            description: [task.description, Validators.required],
            status: task.status
        });
    }
}
