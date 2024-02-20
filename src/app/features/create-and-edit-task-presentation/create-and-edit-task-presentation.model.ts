import { FormBuilder, FormGroup } from "@angular/forms";
import { Task } from "../services/task.model";

export class CreateAndEditTaskPresentation {
    task: Task
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        task: Task) {
        this.task = Object.assign({}, task);
        this.form = this.formBuilder.group({
            title: this.task.title,
            description: this.task.description,
            status: this.task.status
        });
    }
}
