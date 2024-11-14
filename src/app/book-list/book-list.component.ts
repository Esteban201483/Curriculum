import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../book';
import { ProjectsServiceService} from '../projects-service.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

	books: BookInterface[];
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
		this.projectService.getBooks().subscribe(
			books =>{
                this.books = books;
            }
		);
		
	}

    public openProjectPreviewImage(asset: string){
        window.open(asset);
    }

}
