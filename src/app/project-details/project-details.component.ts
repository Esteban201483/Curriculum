import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProjectsServiceService} from '../projects-service.service';
import { ProjectInterface } from '../project'; 

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(
	  private route: ActivatedRoute,
	  private projectService: ProjectsServiceService,
	  private location: Location
  ){ }

  project: ProjectInterface;

  ngOnInit(): void {
	  this.getProject();
  }

  getProject()
  {
	  //Obtains the project id from the activated route
	  const id = this.route.snapshot.paramMap.get('id');

	  this.projectService.getProject(Number(id)).subscribe(
		  project => this.project = project
	  );
  }



}
