import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsServiceService} from '../projects-service.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

	projects: Project[];

	constructor(private projectService: ProjectsServiceService) { }

	ngOnInit(): void 
	{
		this.getProjects();
	}

	getProjects(): void
	{
		this.projectService.getProjects().subscribe(
			projects => this.projects = projects
		);
		
	}

}
