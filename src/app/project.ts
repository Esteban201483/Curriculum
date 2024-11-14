export interface ProjectInterface{
	id: number;
	name: String;
	nameEs: string;
	summary: String;
	summaryEs: string;
	description: String;
	technologies: Array<String>;
	tags: Array<String>;
	repository: String;
	previewImageURL: String;
	order: number;
}

export class ProjectClass implements ProjectInterface{
	public id: number;
	public name: String;
	public nameEs: string;
	public summary: String;
	public summaryEs: string;
	public description: String;
	public technologies: Array<String>;
	public tags: Array<String>;
	public repository: String;
	public previewImageURL: String;
	public order:number = 9999;

	constructor(){
		this.id = 0;
		this.name = '';
		this.nameEs = '';
		this.summary = '';
		this.description = '';
		this.technologies = [];
		this.tags = [];
		this.repository = '';
		this.previewImageURL = './assets/placeholder.png';
		this.order = 9999;

	}
}