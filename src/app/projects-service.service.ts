import { Injectable } from '@angular/core';
import {of, Observable} from 'rxjs';

import { BookInterface } from './book';
import { ProjectInterface } from './project';
import { PROJECTS } from './projectData';
import { BOOKS } from './booksData';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  constructor() { }

  getProjects(): Observable<ProjectInterface[]>{

	  return of(PROJECTS);
  }
  getProject(id: number): Observable<ProjectInterface>{
	  return of(PROJECTS.find(project => project.id === id));
  }

  //TODO: Move to books service instead!!!
  getBooks(): Observable<BookInterface[]>{

	  return of(BOOKS);
  }

}
