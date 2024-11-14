export interface BookInterface{
	id: number;
	name: String;
    previewImageURL: String;
	order: number;
}

export class BookClass implements BookInterface{
	public id: number;
	public name: String;
    public previewImageURL: String;
	public order:number = 9999;

	constructor(){
		this.id = 0;
		this.name = '';
		this.previewImageURL = './assets/placeholder.png';
		this.order = 9999;

	}
}