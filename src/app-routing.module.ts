import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { IndexComponentComponent }  from 'src/app/index-component/index-component.component';
import { ProjectDetailsComponent } from 'src/app/project-details/project-details.component';
import { ProjectsListComponent } from 'src/app/projects-list/projects-list.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { CertificationsComponent } from 'src/app/certifications/certifications.component';


const routes: Routes = [
	{path: "", component: IndexComponentComponent},
	{path: "project/:id", component: ProjectDetailsComponent},
  {path: "projects", component: ProjectsListComponent},
	{path: "contact", component: ContactComponent},
  {path: "certifications", component: CertificationsComponent} 
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
