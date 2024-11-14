export interface BookInterface{
    title: string;
    cover: string;
}

export class BookClass implements BookInterface{
    public title: string;
    public cover: string;

    constructor(){
        this.title = '';
        this.cover = '';
    }
}