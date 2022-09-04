import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent}  from './projects/projects.component';
import { TasksComponent} from './index/index.component';
import { KanbanComponent } from './products/products.component';
import { HelpComponent } from './products/products.component';
const routes: Routes = [

  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent},
  { path: 'kanban', component: KanbanComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
