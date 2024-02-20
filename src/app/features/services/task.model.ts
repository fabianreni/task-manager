export class Task {
    id: number | null;
    title: string | null;
    description: string | null;
    status: Status | null;

    constructor() {
        this.id = null;
        this.title = null;
        this.description = null;
        this.status = Status.Created;
    }
}

export class TaskStatus {
    public id: Status;
    public name: string;

    constructor(id: Status, name: string) {
        this.id = id;
        this.name = name;
    }
}

export enum Status {
    Created = 1,
    Pending = 2,
    Completed = 3
}