import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { IndexComponentComponent }  from 'src/app/index-component/index-component.component';
import { ProjectDetailsComponent } from 'src/app/project-details/project-details.component';
import { ProjectsListComponent } from 'src/app/projects-list/projects-list.component';


const routes: Routes = [
	{path: "", component: IndexComponentComponent},
	{path: "project/:id", component: ProjectDetailsComponent},
	{path: "projects", component: ProjectsListComponent}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:
  [
	  RouterModule
  ]
})
export class AppRoutingModule { }
