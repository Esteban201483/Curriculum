import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';


import { Project } from './project';
import { PROJECTS } from './projectData';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  getProjects(): Observable<Project[]>
  {
	return of(PROJECTS);
  }
  getProject(id: number): Observable<Project>
  {
	  return of(PROJECTS.find(project => project.id === id));
  }

}
