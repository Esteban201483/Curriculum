import { ContactItemInterface } from "./ContactItemInterface";

export class ContactItemClass implements ContactItemInterface{
    public ID:string;
    public link: string;
    public imgAsset: string;
    public imgAlt: string; 
    public username: string;

    constructor(){
        this.ID = '';
        this.link = '';
        this.imgAsset = '';
        this.imgAlt   = '';
        this.username = '';
    }

}