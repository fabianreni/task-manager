import { Routes } from '@angular/router';
import { ContentNotFoundComponent } from './shared/content-not-found/content-not-found.component';
import { TaskOverviewComponent } from './features/task-overview/task-overview.component';
import { TaskDashboardComponent } from './features/task-dashboard/task-dashboard.component';

export const routes: Routes = [ {
    path: 'task/overview',
    component: TaskOverviewComponent
},
{
    path: 'task/dashboard',
    component: TaskDashboardComponent,
},
{
    path: '',
    redirectTo: 'task/overview',
    pathMatch: 'full'
},
{
    path: '**',
    component: ContentNotFoundComponent
}];