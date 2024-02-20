import { Task } from "./task.model";

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


