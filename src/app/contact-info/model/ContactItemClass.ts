import { ContactItemInterface } from "./ContactItemInterface";

export class ContactItemClass implements ContactItemInterface{
    public ID:string;
    public link: string;
    public icon: string;
    public username: string;

    constructor(){
        this.ID = '';
        this.link = '';
        this.icon   = '';
        this.username = '';
    }

}