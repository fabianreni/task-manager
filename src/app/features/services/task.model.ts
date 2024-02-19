export class Task {
    id: number | null;
    title: string | null;
    description: string | null;
    status: TaskStatus | null;

    constructor() {
        this.id = null;
        this.title = null;
        this.description = null;
        this.status = TaskStatus.Created;
    }

    setId(id: number): void {
        this.id = id;
    }
}


export enum TaskStatus {
    Created = 1,
    Pending = 2,
    Completed = 3
}