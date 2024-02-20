export class Task {
    id: number | null;
    title: string | null;
    description: string | null;
    status: TaskStatusType | null;

    constructor() {
        this.id = null;
        this.title = null;
        this.description = null;
        this.status = TaskStatusType.Created;
    }
}

export class TaskStatus {
    public id: TaskStatusType;
    public name: string;

    constructor(id: TaskStatusType, name: string) {
        this.id = id;
        this.name = name;
    }
}

export enum TaskStatusType {
    Created = 1,
    Pending = 2,
    Completed = 3
}