import { Component, OnInit } from '@angular/core';
import { ContactItemInterface } from './model/ContactItemInterface';
import { ContactInfoService} from './service/contact-info.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  public contactInfoItems: ContactItemInterface[];

  constructor(private _contactService: ContactInfoService) { 
    this.contactInfoItems = [];
  }

  ngOnInit(): void {
    this.loadContactItems();
  }

  loadContactItems(){
    this._contactService.getContactInfoItems().subscribe(
      response => {
        this.contactInfoItems = response;
        console.log(this.contactInfoItems)
      }
    );
  }

}
