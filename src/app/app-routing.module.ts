import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TreeviewComponent } from './treeview/treeview.component';

const routes: Routes = [
  {path: "task", component: TasksComponent, data: {animation: "TaskPage"}}, 
  {path: "dashboard", component: DashboardComponent, data: {animation: "DashboardPage"}}, 
  {path: "treeview", component: TreeviewComponent, data: {animation: "DashboardPage"}}, 
  {path: "", redirectTo:"/dashboard", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
