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

export class TaskSummary {
    totalTasksCount: number = 0;
    createdTasksCount: number = 0;
    pendingTasksCount: number = 0;
    completedTasksCount: number = 0;

    updateDashboard(tasks: Task[]): void {
        this.totalTasksCount = tasks.length;
        this.createdTasksCount = tasks.filter(task => task.status == 1).length;
        this.pendingTasksCount = tasks.filter(task => task.status == 2).length;
        this.completedTasksCount = tasks.filter(task => task.status == 3).length;
    }
}


export class TaskStatusPresentation {
    public id: TaskStatus;
    public name: string;

    constructor(id: TaskStatus, name: string) {
        this.id = id;
        this.name = name;
    }
}