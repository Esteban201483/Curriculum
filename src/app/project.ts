export interface Project
{
	id: number;
	name: String;
	summary: String;
	description: String;
	technologies: Array<String>;
	tags: Array<String>;
	repository: String;
	//Todo: Implement Image Array
}