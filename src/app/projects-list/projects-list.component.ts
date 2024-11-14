import { Component, OnInit } from '@angular/core';
import { ProjectInterface } from '../project';
import { ProjectsServiceService} from '../projects-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

	projects: ProjectInterface[];
	responsiveOptions: any[] | undefined;


	constructor(private projectService: ProjectsServiceService,
        private translateService: TranslateService
    ) { 
		this.responsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '991px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '767px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

	ngOnInit(): void {
		this.getProjects();
	}

	private getProjects(): void{
		this.projectService.getProjects().subscribe(
			projects =>{
                this.projects = projects;

                for(let project of this.projects){
                    if(this.translateService.currentLang === 'es'){
                        project.name = project.nameEs;
                    }

                    if(this.translateService.currentLang === 'es'){
                        project.summary = project.summaryEs;
                    }
                }
                this.projects.sort((projectA:ProjectInterface, projectB:ProjectInterface) => {
                    return projectB.order - projectA.order;
                });
            }
		);
		
	}

    public openProjectPreviewImage(asset: string){
        window.open(asset);
    }

}
